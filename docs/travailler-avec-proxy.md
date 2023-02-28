# Docker - travailler derrière un proxy

## Contexte

Les exemples de ce dépôt doivent être adaptés en présence d'un proxy sortant pour l'accès aux ressources internet.

## Principe

* [Configurer le démon pour télécharger les images en utilisant le proxy](https://docs.docker.com/config/daemon/systemd/)

> `/etc/systemd/system/docker.service.d/http-proxy.conf`

* Construire les images en spécifiant le proxy avec des arguments de construction

> `docker build --build-arg http_proxy --build-arg https_proxy ...`

* Exécuter les conteneurs en spécifiant le proxy avec des variables d'environnement

> `docker run -e HTTP_PROXY=$HTTP_PROXY -e HTTPS_PROXY=$HTTPS_PROXY ...`



