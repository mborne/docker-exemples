# Docker - Utiliser l'image PostgreSQL en externalisant les données

## Principe

* Créer un volume nommé "postgres-15"
* Démarrer un conteneur avec l'image [postgres:15.3](https://hub.docker.com/_/postgres) en montant `postgres-15` sur `/var/lib/postgresql/data` (PGDATA)
* Créer une base de test
* Supprimer et redémarrer le conteneur
* Constater que les données sont conservées

## Instructions

TODO
