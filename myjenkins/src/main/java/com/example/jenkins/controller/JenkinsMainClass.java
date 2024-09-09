package com.example.jenkins.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

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
		
		return	commitFileToTheGithub();	
	}
	
    public String commitFileToTheGithub() {
    	
  	  ProcessBuilder processBuilder = new ProcessBuilder(scriptPath);

        try {
            // Start the process
            Process process = processBuilder.start();

            // Capture the output of the shell script
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
                return line;
            }

            // Capture the error stream of the shell script
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            while ((line = errorReader.readLine()) != null) {
                System.err.println(line);
                return line;
            }

            // Wait for the process to complete and get the exit value
            int exitCode = process.waitFor();
            System.out.println("Shell script exited with code: " + exitCode);

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
           
        }
        return "someting went right";
  	
  }
}
