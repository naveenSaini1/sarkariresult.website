package com.example.sarkariresult.constatns;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.Data;

/**
 * Author: Naveen Saini
 * Date: 28-Aug-2024	
 */
@Data
public class CategorysConstants {
	
	// all the state
	private String	HARYANA			=	"HR";
	private String	PUNJAB			=	"PN";
	private String	UTTAR_PRADESH	=	"UP";
	private	String	RAJASTHAN		=	"RJ";
	private String  UTTARAKHAND		=	"UK";
	private String	JAMMU_KASHMIR	=	"JK";
	private	String	MADHYA_PRADESH	=	"MP";
	
	private	String	ASSAM			=	"AS";
	private	String	BIHAR			=	"BR";
	private String	DELHI			=	"DL";
	private String	GUJARAT			=	"GJ";
	private String	JHARKHAND		=	"JH";
	private String	KARNATAKA		=	"KA";
	private String	KERALA			=	"KL";
	private String	MAHARASHTRA		=	"MH";
	private String	TAMIL_NADU		=	"TM";
	private String	WEST_BENGAL		=	"WB";
	
	// all the center
	private String  UPSC			= 	"UPSC";
	private String	SSC				= 	"SSC";
	private String	IBPS			= 	"IBPS";
	private String	RAILWAY_RRB		=	"railwayRrb";
	
	// common cat
	
	private String  ADMIT_CARD		= 	"admit";
	private String	RESULT			= 	"result";
	private String	SYLLABUS		= 	"syllabus";
	private String	ANSWER_KEY		=	"answerKey";
	
	
	
	

	// all the state
	
	private Integer	HARYANA_ID			=	1;
	private Integer	PUNJAB_ID			=	2;
	private Integer	UTTAR_PRADESH_ID	=	3;
	private	Integer	RAJASTHAN_ID		=	4;
	private Integer UTTARAKHAND_ID		=	5;
	private Integer	JAMMU_KASHMIR_ID	=	6;
	private	Integer	MADHYA_PRADESH_ID	=	7;
	
	// all the center
	
	private Integer UPSC_ID				= 	8;
	private Integer	SSC_ID				= 	9;
	private Integer	IBPS_ID				= 	10;
	private Integer	RAILWAY_RRB_ID		=	11;
	 
	// commoan categorys
	
	private Integer ADMIT_CARD_ID		= 	12;
	private Integer	RESULT_ID			= 	13;
	private Integer	SYLLABUS_ID			= 	14;
	private Integer	ANSWER_KEY_ID		=	15;
	
	private	Integer	ASSAM_ID			=	16;
	private	Integer	BIHAR_ID			=	17;
	private Integer	DELHI_ID			=	18;
	private Integer	GUJARAT_ID			=	19;
	private Integer	JHARKHAND_ID		=	20;
	private Integer	KARNATAKA_ID		=	21;
	private Integer	KERALA_ID			=	22;
	private Integer	MAHARASHTRA_ID		=	23;
	private Integer	TAMIL_NADU_ID		=	24;
	private Integer	WEST_BENGAL_ID		=	25;

	
	public List<String> getAllTheState(){
		List<String>  	response	= new ArrayList<>();
		response.add(HARYANA);
		response.add(PUNJAB);
		response.add(UTTAR_PRADESH);
		response.add(RAJASTHAN);
		response.add(UTTARAKHAND);
		response.add(JAMMU_KASHMIR);
		response.add(MADHYA_PRADESH);
		response.add(ASSAM);
	    response.add(BIHAR);
	    response.add(DELHI);
	    response.add(GUJARAT);
	    response.add(JHARKHAND);
	    response.add(KARNATAKA);
	    response.add(KERALA);
	    response.add(MAHARASHTRA);
	    response.add(TAMIL_NADU);
	    response.add(WEST_BENGAL);	
		
		return response;
	}
	
	public List<String> getTheAllCenter(){
		List<String>	response	=	new ArrayList<>();
		response.add(UPSC);
		response.add(SSC);
		response.add(IBPS);
		response.add(RAILWAY_RRB);
		
		
		return response;
	}
	
	
	
	public Map<String,Integer> getTheCategoryIdMap(){
		Map<String,Integer> 	response	=	new HashMap<>();
		response.put(HARYANA, HARYANA_ID);
		response.put(PUNJAB, PUNJAB_ID);
		response.put(UPSC, UPSC_ID);
		response.put(SSC, SSC_ID);
		response.put(IBPS, IBPS_ID);
		response.put(RAILWAY_RRB, RAILWAY_RRB_ID);
		response.put(UTTAR_PRADESH, UTTAR_PRADESH_ID);
		response.put(RAJASTHAN, RAJASTHAN_ID);
		response.put(UTTARAKHAND, UTTARAKHAND_ID);
		response.put(JAMMU_KASHMIR, JAMMU_KASHMIR_ID);
		response.put(MADHYA_PRADESH, MADHYA_PRADESH_ID);
		response.put(ADMIT_CARD, ADMIT_CARD_ID);
		response.put(RESULT, RESULT_ID);
		response.put(BIHAR,BIHAR_ID);
		response.put(SYLLABUS, SYLLABUS_ID);
		response.put(ANSWER_KEY, ANSWER_KEY_ID);
		response.put(ASSAM, ASSAM_ID);
		response.put(DELHI, DELHI_ID);
		response.put(GUJARAT, GUJARAT_ID);
		response.put(JHARKHAND, JHARKHAND_ID);
		response.put(KARNATAKA, KARNATAKA_ID);
		response.put(KERALA, KERALA_ID);
		response.put(MAHARASHTRA, MAHARASHTRA_ID);
		response.put(TAMIL_NADU, TAMIL_NADU_ID);
		response.put(WEST_BENGAL, WEST_BENGAL_ID);


		
		return response;
	}
	
	
	
	public Map<String,List<String>>	getTheAllData(){
		Map<String,List<String>>	data		=	 new HashMap<>();
		
		data.put(HARYANA, Haryana_List);
		data.put(PUNJAB, PUNJAB_LIST);
		data.put(UTTAR_PRADESH, UTTAR_PRADESH_LIST);
		data.put(RAJASTHAN, RAJASTHAN_LIST);
		data.put(UTTARAKHAND, UTTARAKHAND_LIST);
		data.put(JAMMU_KASHMIR, JAMMU_KASHMIR_LIST);
		data.put(MADHYA_PRADESH, MADHYA_PRADESH_LIST);
		
		
		

		
		data.put(UPSC, UPSC_LIST);
		data.put(SSC, SSC_LIST);
		data.put(IBPS, IBPS_LIST);
		data.put(RAILWAY_RRB, RAILWAY_RRB_LIST);
		
		
		data.put(ADMIT_CARD, ADMIT_CARD_LIST);
		data.put(RESULT, RESULT_LIST);
		data.put(SYLLABUS, SYLLABUS_LIST);
		data.put(ANSWER_KEY, ANSWER_KEY_LIST);
		
		data.put(ASSAM, ASSAM_LIST);
		data.put(BIHAR, BIHAR_LIST);
		data.put(DELHI, DELHI_LIST);
		data.put(GUJARAT, GUJARAT_LIST);
		data.put(JHARKHAND, JHARKHAND_LIST);
		data.put(KARNATAKA, KARNATAKA_LIST);
		data.put(KERALA, KERALA_LIST);
		data.put(MAHARASHTRA, MAHARASHTRA_LIST);
		data.put(TAMIL_NADU, TAMIL_NADU_LIST);
		data.put(WEST_BENGAL, WEST_BENGAL_LIST);
		
		
		return data;
		
	}
	
	
	  private List<String> Haryana_List = List.of(
		        "HSSC", 
		        "HPSC", 
		        "HTET", 
		        "HSSC CET", 
		        "HTET TGT", 
		        "HTET PGT",
		        "HBSE UPDATES", 
		        "BHSE", 
		        "HKRN HARYANA", 
		        "Sushima Pharmaceuticals Pvt. Ltd. Haryana", 
		        "Haryana Unicouncil Education Network Karnal, Haryana", 
		        "VLA Industries Limited Karnal, Haryana", 
		        "Khanna Agro Industry Karnal, Haryana", 
		        "Haryana Public Service Commission", 
		        "Haryana Staff Selection Commission", 
		        "Haryana Sports Council", 
		        "Haryana Postal Circle", 
		        "Haryana Police", 
		        "Board Of School Education, Haryana (BSEH)", 
		        "Women And Child Development Department, Haryana", 
		        "Haryana High Court", 
		        "Dse", 
		        "National Dairy Research Institute", 
		        "Haryana Space Applications Centre", 
		        "National Institute Of Food Technology Entrepreneurship And Management", 
		        "Haryana Forest Services", 
		        "Haryana Judicial Services", 
		        "Haryana Sports Department", 
		        "Haryana Engineering Services", 
		        "Haryana Public Service Commission Exam (HPSC)", 
		        "Haryana Civil Services Exam (HCS)", 
		        "Haryana Land Patwari Exam", 
		        "HSSC Canal Patwari Exam", 
		        "Haryana Police Constable Exam", 
		        "Haryana Police SI Exam", 
		        "Haryana TEACHER Eligibility Test", 
		        "HSSC Haryana Clerk Exam", 
		        "HSSC GRAM SACHIV EXAM"
		    );	
	  
	   private List<String> PUNJAB_LIST = List.of(
		        "Punjab Police Constable",
		        "Punjab Police Sub Inspector",
		        "Punjab PSC JE Civil",
		        "Punjab State Cooperative Bank",
		        "Punjab & Haryana High Court",
		        "Punjab National Bank",
		        "Punjab & Haryana High Court",
		        "District & Sessions Judge, Shaheed Bhagat Singh Nagar",
		        "PPSC",
		        "Punjab Police Recruitment",
		        "Punjab Teacher Exams & Recruitment (PSTET)",
		        "PSSSB Recruitment",
		        "Punjab and Haryana High Court Recruitment",
		        "Punjab Urban Planning and Development Authority (PUDA) Recruitment",
		        "ERB Punjab Master Cadre Teacher Recruitment",
		        "Punjab Agro Recruitment",
		        "DTE Punjab Recruitment",
		        "Punjab Home Guard Recruitment",
		        "Punjab Patwari Recruitment",
		        "Punjab SC Land Development & Finance Corporation (PSCFC) Recruitment",
		        "Punjab Verka Milkfed Punjab Recruitment",
		        "PSTCL ALM",
		        "PSSSB School Librarian",
		        "PSCB Clerk cum DEO Recruitment",
		        "PSSSB Excise Inspector Recruitment",
		        "NHM DHFW Punjab Recruitment",
		        "Chandigarh Municipal Corporation Recruitment",
		        "Chandigarh Administration JE Recruitment",
		        "PSSSB Veterinary Inspector Recruitment",
		        "Punjab Police Recruitment",
		        "Punjab Police SI",
		        "Punjab Police Jail Warder Recruitment"
		    );
	   
	   private List<String> UPSC_LIST = List.of(
		        "IAS",
		        "IPS",
		        "CDS",
		        "NDA",
		        "AFCAT",
		        "CAPF",
		        "Indian Administrative Service (IAS)",
		        "Indian Police Service (IPS)",
		        "Indian Foreign Service (IFS)",
		        "Indian Audit and Accounts Service (IA&AS)",
		        "Indian Railway Management Service (IRMS)",
		        "Indian Revenue Service (Customs & Indirect Taxes)",
		        "Indian Revenue Service (Income Tax)",
		        "Indian Civil Accounts Service (ICAS)",
		        "Indian Corporate Law Service (ICLS)",
		        "Indian Defence Accounts Service (IDAS)",
		        "Indian Defence Estates Service (IDES)",
		        "Indian Information Service (IIS)",
		        "Indian Postal Service (IPoS)",
		        "Indian P&T Accounts and Finance Service (IP&TAFS)",
		        "Indian Railway Protection Force Service (RPF)",
		        "Indian Trade Service (Grade III)"
		    );
	   
	   
	   public List<String> SSC_LIST = List.of(
		        "SSC MTS",
		        "SSC CHSL",
		        "SSC CGL",
		        "SSC PHASE 12",
		        "SSC JEE",
		        "SSC GD",
		        "SSC CGL Income Tax Inspector (CBDT)",
		        "Assistant in Ministry of External Affairs (MEA)",
		        "Inspector (Central Excise) (CBEC)",
		        "Inspector (Preventive Officer) (CBEC)",
		        "Assistant Enforcement Officer (AEO)",
		        "Assistant (Central Vigilance Commission)",
		        "Assistant in AFHQ",
		        "Assistant in the Ministry of Railway",
		        "Assistant in Intelligence Bureau",
		        "Assistant Section Officer (CSS)",
		        "Assistant in Serious Fraud Investigation Officer (SFIO)",
		        "Sub Inspectors (CBI)",
		        "Assistant (Other Ministries)",
		        "Divisional Accountant (CAG)",
		        "Inspector (Narcotics)",
		        "Sub Inspector in the National Investigation Agency (NIA)",
		        "Statistical Investigator",
		        "Inspector (Department of Post)",
		        "Sub-Inspector (Central Bureau of Narcotics)",
		        "Auditor (C&AG)",
		        "Auditor (CGDA)",
		        "Auditor (CGA)",
		        "Tax Assistant (CBEC)",
		        "Tax Assistant (CBDT)",
		        "Accountant/ Junior Accountant (Offices under C&AG)",
		        "Accountant/ Junior Accountant (CGA & others)",
		        "Senior Secretariat Assistant",
		        "Compiler (Registrar General of India)"
		    );	
	   
	   public List<String> IBPS_LIST = List.of(
		        "BANK PO",
		        "IBPS CLERK",
		        "SBI PO (Probationary Officer)",
		        "SBI SO (Specialist Officer)",
		        "SBI Clerk",
		        "IBPS PO (CWE PO/MT)",
		        "IBPS SO (CWE SO)",
		        "IBPS RRB Clerk",
		        "IBPS RRB PO",
		        "RBI Officer Grade B",
		        "RBI Officer Grade C",
		        "RBI Office Assistant"
		    );
	   

	    public List<String> RAILWAY_RRB_LIST = List.of(
	        "RRB GROUP D",
	        "RRB JEE",
	        "RRB NTPC",
	        "RRB TT",
	        "RRC GROUP D",
	        "RRC NTPC",
	        "RPF SI RAILWAY",
	        "RPF CONSTABLE POLICE",
	        "RRB Group D",
	        "RRB Assistant Loco Pilot (ALP)",
	        "RPF Constable",
	        "DLW Apprentice Recruitment"
	    );
	    
	    public List<String> UTTAR_PRADESH_LIST = List.of(
	            "UPPSC (Combined state/upper subordinate services) PCS",
	            "UPPSC Review Officer and Assistant Review Officer (RO/ARO) Exam",
	            "UPPSC Block Education Officer Exam",
	            "ACF Recruitment Exam",
	            "RFO Recruitment Exam",
	            "DIET Recruitment (Lecturer) Exam",
	            "UPPSC AE Exam",
	            "UPPSC Medical Officer Exam",
	            "UPPSC Agricultural Service Exam",
	            "UPPSC Staff Nurse Exam",
	            "UPSSSC PET Exam",
	            "UPSSSC Lower PCS Exam",
	            "UPSSSC Village Development Officer (Gram Vikas Adhikari) Exam",
	            "UP Lekhpal Exam",
	            "UP Revenue Inspector",
	            "UPSSSC Junior Assistant Exam",
	            "UPSSSC Combined Technical Services",
	            "UPSSSC Forest Guard Exam",
	            "UP Wildlife Guard",
	            "UPSSSC Mandi Inspector Exam",
	            "UPSSSC Nagar Nigam Group C Exams",
	            "UP Police SI Exam",
	            "Uttar Pradesh Police Sub-Inspector",
	            "UP Police Sub Inspector (Confidential)",
	            "UP Assistant Sub Inspector (Clerk)",
	            "UP Assistant Sub Inspector (Accounts)",
	            "UP Jail Warden",
	            "UP Fireman",
	            "UP Police Constable",
	            "UP Home Guard",
	            "UPTET Recruitment Exam",
	            "Primary Teachers",
	            "Upper Primary Teachers",
	            "UP Assistant Teacher Exam",
	            "Assistant Teacher",
	            "UP TGT (Trained Graduate Teacher) Exam",
	            "Trained Graduate Teacher",
	            "UP Super TET Exam"
	        );
	    
	    public List<String> RAJASTHAN_LIST = List.of(
	            "Rajasthan Public Service Commission (RPSC)",
	            "Selection Board for Subordinate and Ministerial Services in Rajasthan (RSMSSB)",
	            "Rajasthan High Court",
	            "National Health Mission (NHM) Rajasthan",
	            "Rajasthan Police Department",
	            "Rajasthan Postal Circle",
	            "Jaipur Metro Rail Corporation",
	            "Consumer Disputes Redress Commission of the State (Rajasthan)",
	            "Rajasthan University of Health Sciences",
	            "Rajasthan Transport Corporation",
	            "RSMSSB Steno Recruitment",
	            "RSMSSB LDC Recruitment",
	            "RSMSSB LA Recruitment",
	            "RSMSSB Mahila Supervisor",
	            "RSMSSB Librarian Recruitment",
	            "RSMSSB JI Recruitment",
	            "RSMSSB LT Recruitment",
	            "RSMSSB Assistant Radiographer",
	            "RSMSSB ECG Technician",
	            "RSMSSB JE",
	            "Rajasthan Patwari",
	            "Rajasthan Forest Guard",
	            "RSMSSB Agricultural Supervisor",
	            "RSMSSB Junior Engineer",
	            "Rajasthan Fireman",
	            "Rajasthan Police Recruitment",
	            "Rajasthan Police SI Exam",
	            "RPSC RAS",
	            "RPSC Administrative Services",
	            "RPSC Police Services",
	            "RPSC Accountant Services",
	            "RPSC ASO Exam",
	            "RPSC JA",
	            "RPSC ACF FRO",
	            "Assistant Conservator of Forest",
	            "RPSC AEN",
	            "RPSC Statistical Officer",
	            "RPSC 1st Grade",
	            "RPSC 2nd Grade",
	            "RPSC HM Recruitment",
	            "REET",
	            "RPSC Assistant Professor",
	            "RPSC School Lecturer",
	            "RPSC Lecturer TechEdu",
	            "Rajasthan HC Driver",
	            "Rajasthan HC Civil Judge Recruitment",
	            "Rajasthan HC District Judge Recruitment",
	            "Rajasthan HC Clerk",
	            "RPSC Vidhi Rachnakar Recruitment",
	            "RCDF Recruitment AM, GM, JE, and other posts",
	            "Rajasthan CET for Graduates",
	            "Rajasthan CET for Senior Secondary"
	        );
	    
	    
	    private List<String> MADHYA_PRADESH_LIST = List.of(
	            "Madhya Pradesh MP",
	            "Madhya Pradesh Public Service Commission (MPPSC)",
	            "PSU",
	            "MP High Court",
	            "MP Vyapam",
	            "Mp Power Generation Company Limited",
	            "Mp Professional Examination Board",
	            "Board Of Revenue, Madhya Pradesh",
	            "Capital Project Administration, Madhya Pradesh",
	            "Audyogik Kendra Vikas Nigam Limited",
	            "E-Treasury Finance Department, Madhya Pradesh",
	            "Ecotourism Development Board, Bhopal",
	            "Department Of Housing And Environment",
	            "Pollution Control Board, MP",
	            "Power Trading Company Limited Madhya Pradesh (Trade Co)",
	            "Rajya Van Vikas Nigam Limited (MPRVUL), Madhya Pradesh",
	            "Electronics Development Corporation Limited (MPSEDC), Madhya Pradesh",
	            "Madhya Pradesh Gramin Dak Seva",
	            "MP Police Department",
	            "Madhya Pradesh Textbook Corporation (MPTBC)",
	            "Indian Army Jobs in Madhya Pradesh",
	            "Navy/ Nausena Bharti Jobs in Madhya Pradesh",
	            "Indian Air Force/ Bhartiya Vayu Sena Jobs in Madhya Pradesh",
	            "Railways Jobs in Madhya Pradesh",
	            "Bank jobs in Madhya Pradesh",
	            "Police Bharti jobs in Madhya Pradesh",
	            "Dak Vibhag jobs in Madhya Pradesh",
	            "Court Jobs in Madhya Pradesh",
	            "Fourth Class Peon, Sweeper, Guard, Gardener Jobs in Madhya Pradesh",
	            "MPPSC",
	            "MP Jail Prahari",
	            "MP Police Constable Exam",
	            "MP Police SI Exam"
	        );
	    
	    private List<String> JAMMU_KASHMIR_LIST = List.of(
	            "Jammu & Kashmir Public Service Commission Jobs",
	            "Bank Jobs In Jammu & Kashmir",
	            "Railway Jobs In Jammu & Kashmir",
	            "Police Jobs In Jammu & Kashmir",
	            "PSU Jobs In Jammu & Kashmir",
	            "JKPSC – Jammu & Kashmir Public Service Commission",
	            "KAS – Kashmir Administrative Services",
	            "KCS- Jammu & Kashmir Civil Services Judicial Exam",
	            "ACF- Assistant Conservator Forest Exam",
	            "Range officers Exam",
	            "JKPSC Teachers Recruitment Exam",
	            "JK Police Recruitment Exam",
	            "Jammu & Kashmir Forest Service Examination",
	            "Jammu & Kashmir Engineering Service Exam",
	            "Librarian and Sports Officer Exam"
	        );
	    
	    private List<String> UTTARAKHAND_LIST = List.of(
	            "UKPSC Civil Judge",
	            "UKPSC APO Recruitment",
	            "UKPSC Lower PCS",
	            "UKPSC RO ARO",
	            "UKPSC Lecturer",
	            "UKPSC Forest Range Officer",
	            "UKSSSC Assistant Teacher",
	            "USET",
	            "UTET",
	            "UK",
	            "Uttarakhand Post Office",
	            "Uttarakhand Civil and Family Court",
	            "UKSSSC",
	            "UKMSSB MSW",
	            "UKMSSB Recruitment",
	            "GDS Gramin Dak Sevak Recruitment - Uttarakhand Cycle"
	        );
	    
	    private List<String> ADMIT_CARD_LIST= List.of(
	    		 "Admit Card",
	    		    "Hall Ticket",
	    		    "Entry Pass",
	    		    "Examination Pass",
	    		    "Exam Permit",
	    		    "Test Admission Card",
	    		    "Entrance Card",
	    		    "Examination Slip",
	    		    "Exam Entry Card",
	    		    "Candidate Card",
	    		    "Access Card"
	    		);
	    
	    
	    
	    private List<String> RESULT_LIST = List.of(
	    	    "Result",
	    	    "Outcome",
	    	    "Score",
	    	    "Grade",
	    	    "Marksheet",
	    	    "Performance Report",
	    	    "Evaluation",
	    	    "Assessment",
	    	    "Findings",
	    	    "Conclusion",
	    	    "Achievement"
	    	);
	    
	    private List<String> SYLLABUS_LIST = List.of(
	    	    "Syllabus",
	    	    "Curriculum",
	    	    "Course Outline",
	    	    "Study Plan",
	    	    "Course Content",
	    	    "Program of Study",
	    	    "Subject Guide",
	    	    "Course Description",
	    	    "Learning Plan",
	    	    "Study Scheme",
	    	    "Instruction Plan"
	    	);

	    
	    private List<String> ANSWER_KEY_LIST = List.of(
	    	    "Answer Key",
	    	    "Solution Sheet",
	    	    "Answer Sheet",
	    	    "Solutions Guide",
	    	    "Correct Answers",
	    	    "Key to Answers",
	    	    "Answer Guide",
	    	    "Solutions Manual",
	    	    "Response Key",
	    	    "Answer Set",
	    	    "Answer Reference"
	    	);
	    private List<String> ASSAM_LIST = List.of(
	    	    "Assam",
	    	    "Assam State Level Recruitment Commission Assam (SLRC Assam)",
	    	    "State Level Recruitment Commission Assam (SLRC Assam)",
	    	    "Assam Public Service Commission (Assam PSC)",
	    	    "Assam Public Service Commission (Assam PSC)",
	    	    "Assam Public Service Commission (APSC)",
	    	    "Assam Police",
	    	    "Assam Electricity Grid Corporation Limited (AEGCL)",
	    	    "Assam State Transport Corporation (ASTC)",
	    	    "Assam Electricity Distribution Company Limited (AEDCL)",
	    	    "Assam Rural Infrastructure and Agricultural Services (ARIAS)",
	    	    "Assam Power Generation Corporation Limited (APGCL)"
	    	);

		private List<String> BIHAR_LIST = List.of(
		    "Bihar",
		    "Bihar Police Constable",
		    "Assistant Environmental Engineer (BSPCB)",
		    "Assistant Scientific Officer (BSPCB)",
		    "Junior Research Fellow (IIT, Patna)",
		    "Medical Officer (HBCH RC Muzaffarpur)",
		    "Chief Administrative Officer (IIM Bodh Gaya)",
		    "Assistant Loco Pilot (RRB Muzaffarpur and Patna)",
		    "Bihar Police SI",
		    "Bihar Police Constable",
		    "Bihar Police Home Guard",
		    "Bihar Police Forest Guard",
		    "Bihar Police Forester",
		    "Bihar Police Enforcement Sub Inspector",
		    "Bihar Police ASI Steno",
		    "BSSC ITI Instructor",
		    "BSSC Rajbhasha Sahayak Exam",
		    "BSSC Inter Level Exam",
		    "BSSC Inter Level Exam",
		    "BPSC Mineral Development Officer",
		    "Bihar Judicial Service Exam",
		    "BPSC Assistant Engineer",
		    "Bihar TET / STET",
		    "BPSC Lecturer",
		    "BPSC Polytechnic College Recruitment",
		    "BPSC Professor Recruitment",
		    "Bihar Health Department Recruitment",
		    "BSCB Multipurpose Assistant Recruitment"
		);
		
		private List<String> DELHI_LIST = List.of(
			    "DELHI",
			    "DDA Patwari Recruitment Patwari",
			    "DDA JSA Recruitment",
			    "DDA Various Posts Recruitment",
			    "SSC CPO Sub Inspector IN DELHI POLICE",
			    "Delhi Police Constable Constable EXE",
			    "Delhi Police Recruitment Head Constable",
			    "Delhi Subordinate Services Selection Board",
			    "DSSSB PGT Recruitment",
			    "DSSSB Various Posts Recruitment",
			    "DSSSB Various Posts Recruitment Prison/ Jail Warder",
			    "DSSSB Food Safety Officer",
			    "DSSSB DASS Grade IV",
			    "DSSSB TGT",
			    "DSSSB Steno Exam",
			    "DSSSB Special Educator",
			    "DSSSB Store Keeper",
			    "AIIMS Delhi",
			    "Delhi Electricity Regulatory Commission",
			    "DSIIDC Recruitment",
			    "ITI Delhi Recruitment",
			    "IGNOU Non-Academic Posts Recruitment",
			    "Delhi Public Library Recruitment",
			    "Delhi Forest Department Recruitment",
			    "DMRC Recruitment",
			    "Delhi Cantonment Board Teacher Recruitment",
			    "Delhi Jal Board Recruitment",
			    "Delhi District Court Group C Exam",
			    "ICSIL Delhi Recruitment",
			    "DDA Patwari Recruitment Patwari",
			    "DDA JSA Recruitment Junior Assistant Secretariat",
			    "DDA Various Posts Recruitment"
			);
		private List<String> GUJARAT_LIST = List.of(
			    "Gujarat",
			    "Employees' State Insurance Corporation Gujarat",
			    "Indian Institute of Management Ahmedabad",
			    "Gujarat National Law University",
			    "Indian Institute of Technology Gandhinagar",
			    "Gujarat Mineral Development Corporation Limited",
			    "Bank of Baroda (BOB)",
			    "Indian Institute of Management Ahmedabad (IIM Ahmedabad)",
			    "ONGC Petro additions Limited (OPAL)",
			    "Gujarat Informatics Limited (GIL)",
			    "Border Security Force (BSF)",
			    "Indian Institute of Management Ahmedabad (IIM Ahmedabad)"
			);
		private List<String> JHARKHAND_LIST = List.of(
			    "Jharkhand",
			    "Teachers Eligibility Test Jharkhand",
			    "Jharkhand Police Recruitment",
			    "JPSC Notifications",
			    "Staff Selection Commission Jharkhand",
			    "CCE Examination in Jharkhand State",
			    "Recruitment Boards in Jharkhand State Government",
			    "Jharkhand Constables",
			    "Jharkhand Drivers",
			    "Jharkhand Clerks",
			    "Jharkhand Apprentice",
			    "Jharkhand Conductors",
			    "Jharkhand State Government Forest Guard",
			    "Jharkhand Civil Services (Group I, II, III & IV)",
			    "Jharkhand Forest Department",
			    "Jharkhand Police Department",
			    "Jharkhand Transport Department",
			    "Jharkhand Public Service Commission",
			    "Jharkhand Revenue, Registration & Land Reforms Department",
			    "Jharkhand Water Resources Department",
			    "Jharkhand Forest, Environment & Climate Change Industries Department"
			);
		
		private List<String> KARNATAKA_LIST = List.of(
			    "Karnataka",
			    "Women and Child Development Department Karnataka",
			    "Karnataka Public Service Commission (KPSC)",
			    "Karnataka State Police",
			    "Bangalore Metropolitan Transport Corporation (BMTC)",
			    "Karnataka Power Transmission Corporation Limited (KPTCL)",
			    "Karnataka State Road Transport Corporation (KSRTC)",
			    "Bangalore Water Supply and Sewerage Board (BWSSB)",
			    "Karnataka State Electronics Development Corporation Limited (KEONICS)",
			    "Karnataka Urban Water Supply and Drainage Board (KUWSDB)",
			    "Karnataka State Industrial and Infrastructure Development Corporation (KSIIDC)",
			    "Karnataka State Handicrafts Development Corporation (KSHDC)"
			);
		
		private List<String> KERALA_LIST = List.of(
			    "Kerala",
			    "Kerala Public Service Commission (KPSC)",
			    "Kerala Postal Circle",
			    "Kerala Teacher Eligibility Test (K-TET)",
			    "Kerala Forests And Wildlife Department",
			    "Kerala State Pollution Control Board (KSPCB)",
			    "Kerala Police Department",
			    "Cochin Shipyard Limited",
			    "University of Calicut",
			    "Travancore-Cochin Chemicals Limited",
			    "Naval Physical And Oceanographic Laboratory, DRDO, Kochi",
			    "KPSC Assistant Professor",
			    "KPSC VEO",
			    "KPSC LDC",
			    "KPSC Degree Level Exam",
			    "KPSC Plus Two Level Exam",
			    "KPSC 10th Level Exam",
			    "Kerala Assistant Professor In Business Administration",
			    "Kerala Assistant In Kerala Administrative Tribunal",
			    "Kerala Data Entry Operator",
			    "Kerala Theatre Mechanical GR.II",
			    "Kerala Store Keeper",
			    "Kerala Junior Audit Assistant",
			    "Kerala Typist & Typist Clerk",
			    "Kerala Legal Assistant",
			    "Kerala Carpenter",
			    "Kerala Driver-Cum- Office Attendant",
			    "Kerala Lift Operator",
			    "Kerala Assistant Professor In Arabic",
			    "Kerala Veterinary Surgeon",
			    "Divisional Accountant",
			    "Kerala Junior Systems Officer",
			    "Kerala Marketing Organizer",
			    "Kerala Agronomist",
			    "Kerala Scientific Officer",
			    "Kerala Fisheries Extension Officer",
			    "Kerala Administrative Officer",
			    "Kerala Medical Social Worker",
			    "Kerala Computer Assistant",
			    "Kerala Sales Assistant",
			    "Kerala Fire & Rescue Officer",
			    "Kerala Statistical Investigator Grade 2",
			    "Kerala SET",
			    "Kerala Principal Chief Conservator of Forests",
			    "Kerala Additional Principal Chief Conservator of Forests",
			    "Kerala Chief Conservator of Forests",
			    "Kerala Divisional Forest Officers/Deputy Conservator of Forests/Assistant Conservator of Forests/Working Plan Officer",
			    "Kerala Range Forest Officers/Assistant Wildlife Warden",
			    "Kerala Deputy Range Forest Officer",
			    "Kerala Section Forest Officer",
			    "Kerala Beat Forest Officer",
			    "Kerala Reserve Watcher",
			    "Kerala Police Armed Constable",
			    "Kerala Civil Constable",
			    "Kerala Sub Inspector",
			    "Kerala Assistant Sub Inspector (ASI)",
			    "Kerala Deputy Superintendent Of Police",
			    "Kerala Police Inspector",
			    "Kerala Deputy Inspector General Of Police",
			    "Kerala Director General Of Police",
			    "Kerala Inspector General Of Police",
			    "Kerala Senior Superintendent Of Police",
			    "Kerala Technical Assistant Commissioner",
			    "Kerala Police Constable",
			    "KPSC has announced the notification for Architectural Draftsman Grade-1, for 3 vacancies",
			    "Kerala Veterinary & Animal Sciences University – Assistant Engineer Post",
			    "KPSC – Assistant/Auditor",
			    "Kerala State Co-Operative Bank – Concurrent Auditor",
			    "MILMA Recruitment – Junior Assistant Technician Grade-III & Plant Assistant Grade-III",
			    "NHM Kerala Recruitment – Mid Level Service Provider",
			    "Kerala High Court – Office Attendant Research Assistant",
			    "KCCPL Recruitment – Various Posts Are Opened",
			    "KAMCO Recruitment – Work Assistant",
			    "Coir Board Recruitment – Senior Scientific Officer, Scientific Assistant, Mechanic etc.",
			    "Instrumentation Limited Recruitment – Design & Engineering, Trainee Commercial etc.",
			    "CMLRE Recruitment – Project Scientists / Project Manager",
			    "Oil Palm India Recruitment – Trainees",
			    "CSEB Kerala Recruitment – Junior Clerk, Data Entry Operator, Cashier Assistant, Secretary, Chief Accountant",
			    "KMRL Recruitment – Fleet Manager, Supervisor"
			);
		private List<String> MAHARASHTRA_LIST = List.of(
			    "Maharashtra",
			    "MPSC Associate Professor",
			    "MPSC Civil Judge",
			    "MPSC Assistant Professor",
			    "MPSC Livestock Development Officer",
			    "MPSC Subordinate Services Exam",
			    "Police SI, State Tax Officer, ASO",
			    "MPSC RTO",
			    "MPSC PSI",
			    "MPSC STI",
			    "MPSC Tax Assistant",
			    "MPSC Group C",
			    "MPSC State Service",
			    "Deputy District Officer",
			    "Assistant Superintendent of Police",
			    "Assistant State Tax Commissioner",
			    "Deputy Chief Executive Officer",
			    "Assistant Director Tehsildar",
			    "Deputy Education Officer",
			    "Assistant Regional Transport Officer",
			    "Class Officer Deputy Superintendent",
			    "Land Record Deputy Superintendent",
			    "State Excise Fee Naib Tehsildar"
			);

		private List<String> TAMIL_NADU_LIST = List.of(
			    "Tamil Nadu",
			    "Tamil Nadu Public Service Commission (TNPSC)",
			    "Tamil Nadu Pollution Control Board (TNPCB)",
			    "Tamil Nadu Uniformed Services Recruitment Board (TNUSRB)",
			    "Tamil Nadu Teachers Recruitment Board (TN TRB)",
			    "Tamil Nadu Electricity Board (TNEB)",
			    "Tamil Nadu Forest Uniformed Services Recruitment Committee (TNFUSRC)",
			    "Tamil Nadu State Transport Corporation",
			    "Tamil Nadu Agriculture University",
			    "Banking & Railway Recruitment Board",
			    "TNPSC Combined Engineering Services",
			    "TNPSC Assistant System Engineer (AE)",
			    "TNPSC District Educational Officer (DEO)",
			    "Chief Environmental Engineer",
			    "Additional Chief Environmental Engineer",
			    "Joint Chief Environmental Engineer",
			    "District & Assistant Environmental Engineer",
			    "Financial Advisor",
			    "Chief Scientific Officer",
			    "Environmental Scientist",
			    "Advanced Environmental Laboratory",
			    "District Environmental Laboratory",
			    "Manager (Internal Audit)",
			    "TNUSRB Firemen",
			    "Tamil Nadu Teachers Eligibility Test (TNTET)",
			    "Tamil Nadu State Eligibility Test (TNSET)",
			    "Tamil Nadu Field Assistant",
			    "Tamil Nadu Gangman",
			    "Tamil Nadu Junior Assistant/Accounts",
			    "Tamil Nadu Assistant Engineer",
			    "Tamil Nadu Assessor",
			    "Tamil Nadu Technical Assistant",
			    "Tamil Nadu Forest Guard",
			    "Tamil Nadu Forest Guard With Driving License",
			    "Tamil Nadu Forest Watcher",
			    "Tamil Nadu Forester",
			    "Tamil Nadu Junior Research Fellow (JRF)",
			    "DHS Recruitment",
			    "ESIC Chennai Recruitment",
			    "NLC Recruitment",
			    "Mail Motor Service Recruitment",
			    "TN Postal Circle Recruitment",
			    "TRB TN Assistant Recruitment",
			    "TNSCB Office Assistant Recruitment",
			    "TNCWWB Recruitment",
			    "TNPSC Assistant Director & Child Development Project Officer",
			    "Chennai Central Cooperative Bank Recruitment",
			    "TN ICDS Recruitment",
			    "TN DRB Assistant Supervisor"
			);

		private List<String> WEST_BENGAL_LIST = List.of(
			    "West Bengal",
			    "West Bengal Power Development Corporation Limited (WBPDCL)",
			    "Kolkata City NUHM Society",
			    "Indian Statistical Institute Kolkata (ISI Kolkata)",
			    "West Bengal Medical Services Corporation (WBMSC)",
			    "Kolkata Police Constable",
			    "West Bengal Police Constable",
			    "West Bengal Police",
			    "West Bengal State Transport Corporation (WBSCTC)",
			    "West Bengal School Service Commission (WBSSC)",
			    "West Bengal Health Recruitment Board (WBHRB)",
			    "West Bengal State Electricity Distribution Company Limited (WBSEDCL)",
			    "West Bengal Public Service Commission (WBPSC)"
			);




	    
}
