#!/bin/bash

# Navigate to the repository directory
cd /var/lib/jenkins/workspace/sarkariresult


# Stage changes
git add .

# Commit changes
git commit -m "init"

# Push changes to GitHub
git push origin master
