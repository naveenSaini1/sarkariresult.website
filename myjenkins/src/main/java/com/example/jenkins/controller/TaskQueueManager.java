package com.example.jenkins.controller;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * Author: Naveen Saini
 * Date: 09-Sep-2024	
 */
public class TaskQueueManager {
	
    private static final BlockingQueue<Runnable> taskQueue = new LinkedBlockingQueue<>();
    private static final ExecutorService executorService = Executors.newSingleThreadExecutor();

    static {
        // Start a worker thread to process the tasks in the queue
        executorService.submit(() -> {
            while (true) {
                try {
                    // Take the next task from the queue and execute it
                    Runnable task = taskQueue.take();
                    task.run();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        });
    }

    // Method to submit a new task to the queue
    public static void submitTask(Runnable task) {
        try {
            taskQueue.put(task); // Add the task to the queue
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            e.printStackTrace();
        }
    }
 

}
