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
