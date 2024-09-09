package com.example.jenkins.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Author: Naveen Saini
 * Date: 09-Sep-2024	
 */

@RestController
public class JenkinsMainClass {
	@Value("${file.path.for.scriptPath.file}")
	private String scriptPath;
	
	 @PostMapping("/github-webhook")
	    public String myWebHook() {
	        System.out.println("New commit detected: " + new Date().toLocaleString());
	        
	        // Submit the deployment task to the queue
	        TaskQueueManager.submitTask(new DeploymentTask(scriptPath));
	        
	        return "Deployment task submitted.";
	    }
}
