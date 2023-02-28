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
# Création d'un conteneur exécutant /bin/bash dans l'image debian:buster
docker run --rm -ti debian:buster /bin/bash
# Installation de figlet dans le conteneur
apt-get update
apt-get install figlet
# Test de figlet
figlet "It works!"
```

## Démonstration

Voir [figlet-run.svg](figlet-run.svg?raw=1)

