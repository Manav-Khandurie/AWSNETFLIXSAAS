#!/bin/bash 
# setting up the server for installing nginx and nodejs
sudo su
apt update

apt install nginx -y

curl -s https://deb.nodesource.com/setup_16.x | sudo bash 
apt install nodejs -y

git clone -b master https://github.com/Manav-Khandurie/AWSNETFLIXSAAS.git

npm install pm2@latest -g

cd AWSNETFLIXSAAS/netflix-api

npm install

cd ..

cd checking

rm /etc/nginx/sites-available/default

mv default /etc/nginx/sites-available/default

cd ..

cd netflix-api

pm2 start server.js --name netflix 

sudo service nginx restart
