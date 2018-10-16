# Configuration files for Apache 2.4 server

All paths and commands used in this README and in other files imply Ubuntu host with systemd.
DNS should be already configured and point '*.*.*.dev' hostname to local machine



## Generic configuration files

```
apache2.conf     					- main config file
ports.conf       					- ports config file
sites-available/000-default.conf 	- default virtual host (http://dev  -> /var/www/default/)
sites-available/001-php.dev.conf 	- generic php host (http://php.dev  -> /var/www/php.dev/) 
```


## Configurations for Magento 2 stores

```
sites-available/002-magento-multistore.conf - virtual hosts for multi-store magento sites (eg. de.site.m.dev / en.site.m.dev / es.site.m.dev  -> /var/www/site/)
sites-available/003-magento.conf 	        - mass virtual hosts for single-store magento sites (http://*.m.dev -> /var/www/magento/*/)
```


## Container of all sites: /var/www directory

```
www/default/                        - site described in 000-default.conf
www/php.dev/                        - site described in 001-php.dev.conf
www/magento/*/                      - sites described in 002-magento-multistore.conf and 003-magento.conf
```


## Installation

`bash ./install.sh`
