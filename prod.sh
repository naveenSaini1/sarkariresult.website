#!/bin/bash
git config --global user.name "naveen saini"
git config --global user.email "naveensaini94667@gmail.com"


# Navigate to the repository directory
cd  /projects/sarkariresult.website


# Stage changes
git add .

# Commit changes
git commit -m "init"

# Push changes to GitHub
git push origin master
