#!/bin/bash

APACHE=/etc/apache2
WWW_BASE=${WWW_BASE:-"/var/www"}

#declare -a files=(
#    "apache2.conf"
#    "ports.conf"
#    "sites-available/*"
#    "envvars"
#)

#for i in ${files[@]}
#do
#    if [[ -f ${APACHE}/${i} ]]
#    then
#        sudo  mv --verbose ${APACHE}/${i} ${APACHE}/${i}.$(date +%Y%m%d-%H%M%s).bak
#    fi
#    sudo cp --recursive --verbose ${i} ${APACHE}/${i}
#done

#sudo cp --verbose html/magento      ${WWW_BASE}/


sudo rsync --recursive --backup --perms --verbose ./etc_apache2/ $APACHE


sudo a2disconf apache2-doc javascript-common localized-error-pages serve-cgi-bin security other-vhosts-access-log phpmyadmin

sudo a2enconf info logs
sudo a2enmod info status
sudo a2ensite 000-default 002-magento
sudo a2dissite 001-php

sudo a2dismod ssl
sudo a2dissite default-ssl

echo "Restarting Apache..."
sudo systemctl restart apache2

#sudo apache2ctl fullstatus

