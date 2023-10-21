# php-basic-v1

## Description

Site PHP pour démonstration de construction avec docker avec deux pages :

* [public/index.php](public/index.php)
* [public/phpinfo.php](public/phpinfo.php)


## Utilisation classique

Avec le [serveur intégré à PHP-CLI](https://www.php.net/manual/en/features.commandline.webserver.php) :

```bash
# http://localhost 
php -S localhost:8000 -t php-basic-v1/public
```

