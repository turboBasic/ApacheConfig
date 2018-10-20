#!/bin/bash

APACHE=/etc/apache2
WWW_BASE=${WWW_BASE:-"/var/www"}

declare -a files=(
    "apache2.conf"
    "ports.conf"
    "sites-available/*"
    "envvars"
)

#for i in ${files[@]}
#do
#    if [[ -f ${APACHE}/${i} ]]
#    then
#        sudo  mv --verbose ${APACHE}/${i} ${APACHE}/${i}.$(date +%Y%m%d-%H%M%s).bak
#    fi
#    sudo cp --recursive --verbose ${i} ${APACHE}/${i}
#done

#sudo cp --verbose html/magento      ${WWW_BASE}/


sudo rsync --recursive --perms --verbose ./etc_apache2/ /etc/apache2/

sudo systemctl restart apache2

