package com.example.jenkins.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Author: Naveen Saini
 * Date: 09-Sep-2024	
 */
public class DeploymentTask implements Runnable{
	 private final String scriptPath;

	    public DeploymentTask(String scriptPath) {
	        this.scriptPath = scriptPath;
	    }

	    @Override
	    public void run() {
	        try {
	            System.out.println("Deployment started...");

	            ProcessBuilder processBuilder = new ProcessBuilder(scriptPath);

	            // Start the process
	            Process process = processBuilder.start();

	            // Capture the output of the shell script
	            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
	            String line;
	            while ((line = reader.readLine()) != null) {
	                System.out.println(line);
	            }

	            // Capture the error stream of the shell script
	            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
	            while ((line = errorReader.readLine()) != null) {
	                System.err.println(line);
	            }

	            // Wait for the process to complete and get the exit value
	            int exitCode = process.waitFor();
	            System.out.println("Shell script exited with code: " + exitCode);

	        } catch (IOException | InterruptedException e) {
	            e.printStackTrace();
	        }
	    }
}
