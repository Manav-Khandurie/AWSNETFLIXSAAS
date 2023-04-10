#!/bin/bash 
# setting up the server for installing nginx and nodejs
sudo su
apt update

apt install nginx -y

curl -s https://deb.nodesource.com/setup_16.x | sudo bash 
apt install nodejs -y

git clone -b master https://github.com/Manav-Khandurie/AWSNETFLIXSAAS.git

npm install pm2latest -g

cd AWSNETFLIXSAAS/netflix-api

npm install