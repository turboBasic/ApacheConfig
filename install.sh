#!/bin/bash

APACHE=/etc/apache2
WWW=/var/www/html

sudo cp apache2.conf ${APACHE}/ --archive --verbose
sudo cp ports.conf ${APACHE}/ --archive --verbose
sudo cp sites-available/* ${APACHE}/sites-available --archive --verbose
#sudo cp html/magento ${WWW}/ --archive --verbose

sudo systemctl restart apache2

