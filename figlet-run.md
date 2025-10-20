# Docker - installer et tester figlet dans un conteneur

## Principes

* Créer une pseudo-VM debian à l'aide d'un conteneur
* Installer l'exécutable [figlet](http://www.figlet.org/)
* Vérifier l'installation avec `figlet "It works!"`

```
 ___ _                        _        
|_ _| |_  __      _____  _ __| | _____ 
 | || __| \ \ /\ / / _ \| '__| |/ / __|
 | || |_   \ V  V / (_) | |  |   <\__ \
|___|\__|   \_/\_/ \___/|_|  |_|\_\___/
```

## Instructions

```bash
# Création d'un conteneur exécutant /bin/bash dans l'image ubuntu:22.04
docker run --rm -ti ubuntu:22.04 /bin/bash
# Installation de figlet dans le conteneur
apt-get update
apt-get install figlet
# Test de figlet
figlet "It works!"
```

## Démonstration

[![asciicast](https://asciinema.org/a/563580.svg)](https://asciinema.org/a/563580)

## Ressources

* [docs.docker.com - Docker (CLI) - docker run](https://docs.docker.com/engine/reference/commandline/run/)

