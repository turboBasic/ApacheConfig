#!/bin/bash

APACHE=/etc/apache2
WWW=/var/www/html

sudo cp apache2.conf ${APACHE}/ --verbose
sudo cp ports.conf ${APACHE}/   --verbose
sudo cp sites-available/* ${APACHE}/sites-available --verbose
#sudo cp html/magento ${WWW}/    --verbose

sudo systemctl restart apache2

