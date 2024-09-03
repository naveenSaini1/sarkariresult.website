package com.example.sarkariresult.utility;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.search.similarities.BM25Similarity;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.sarkariresult.constatns.CategorysConstants;

/**
 * Author: Naveen Saini
 * Date: 28-Aug-2024	
 */
@Component
public class FindCategory {
	
	@Value("${search.index.folder.path}")
	private String searchIndexFolderPath;
	
	private final String 	ID		=	"id";
	
	private	final String 	CONTENT	=	"content";
	
	// analyzer object of Apache lucence
	private StandardAnalyzer analyzer = new StandardAnalyzer();
	

	
	public void updateCategory() throws Exception {
		
				
		// path of directory where the all file create  of indexs
	    Directory index 							= FSDirectory.open(Paths.get(searchIndexFolderPath));
	    
	    // Our Data
	    
	    Map<String, List<String>> allTheCategorys	=	new CategorysConstants().getTheAllData();
	    
	    for(Map.Entry<String, List<String>> data:allTheCategorys.entrySet()) {
	    	for(String values:data.getValue()) {
		    	indexQuestion(analyzer,index,values,data.getKey());
	    	}
	    	
        	
        }
		
		
	}
	
	
	  private void indexQuestion(StandardAnalyzer analyzer, Directory index, String question,String id) throws Exception {
	        
		  
		  var config = new org.apache.lucene.index.IndexWriterConfig(analyzer);
	        try (var writer = new org.apache.lucene.index.IndexWriter(index, config)) {
	            Document doc = new Document();
	            doc.add(new StringField(ID, id, Field.Store.YES)); 
	            doc.add(new TextField(CONTENT, question, Field.Store.YES));
	            writer.addDocument(doc);
	        }
	    }


	
	public HashSet<String> getTheSearchCategory(String categoryName) throws Exception {
		HashSet<String>	response	= new HashSet<>();
	    Directory 		index 		= FSDirectory.open(Paths.get(searchIndexFolderPath));
	    
	    response	=	getRecommendations(analyzer,index,categoryName);
	    
		return response;
	}
	
	 private HashSet<String> getRecommendations(StandardAnalyzer analyzer, Directory index, String userProfileQuestion) throws Exception {
	        HashSet<String> recommendations = new HashSet<>();
	        String escapedQuery = QueryParser.escape(userProfileQuestion);
	        
	        Query query = new QueryParser(CONTENT, analyzer).parse(escapedQuery);
	        IndexReader reader = DirectoryReader.open(index);
	        IndexSearcher searcher = new IndexSearcher(reader);
	        searcher.setSimilarity(new BM25Similarity());

	        TopDocs topDocs = searcher.search(query, 10);
	        for (ScoreDoc scoreDoc : topDocs.scoreDocs) {
	            Document doc = searcher.doc(scoreDoc.doc);
	            recommendations.add(doc.get(ID));
	        }

	        reader.close();
	        return recommendations;
	    }


}
