#!/bin/bash
git config --global user.name "naveen saini"
git config --global user.email "naveensaini94667@gmail.com"


# Navigate to the repository directory
cd  /projects/sarkariresult.website

git pull origin master

git add .

# Commit changes

git commit -m "init"

git push origin master

sudo git pull origin master

# Install Node.js packages
sudo npm install

# Build the Node.js application
sudo npm run build ||  { echo "npm run build failed, exiting..."; exit 1; }

# Delete all running pm2 processes
sudo pm2 delete all

# Start the Node.js application with pm2 and name it "sarkari"
sudo pm2 start npm --name "sarkari" -- start


cd sarkariresult/

# Find the process ID (PID) using port 8081
PID=$(sudo lsof -t -i:8081)

# If the PID exists, kill the process
if [ -n "$PID" ]; then
  echo "Process running on port 8081 with PID $PID found. Terminating..."
  sudo kill -9 $PID
  echo "Process terminated."
else
  echo "No process running on port 8081."
fi

# Start the Java application in the background
echo "Starting Java application..."
nohup java -jar sarkariresult-0.0.1-SNAPSHOT.jar &

#going back to the main directories

cd ..



