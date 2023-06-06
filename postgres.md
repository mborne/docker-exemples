# Docker - Utiliser l'image PostgreSQL en externalisant les données

## Principe

* Créer un volume nommé "postgres-15"
* Démarrer un conteneur avec l'image [postgres:15.3](https://hub.docker.com/_/postgres) en montant `postgres-15` sur `/var/lib/postgresql/data` (PGDATA)
* Créer une base de test
* Supprimer et redémarrer le conteneur
* Constater que les données sont conservées

## Instructions

```bash
# création du volume nommé
docker volume create postgres-15

# montage du volume nommé
docker run -d --name pg15 \
    -v postgres-15:/var/lib/postgresql/data \
    -e POSTGRES_PASSWORD=ChangeIt \
    postgres:15
```

Pour créer une base :

```bash
sudo docker exec -ti pg15 /bin/bash

# Dans le conteneur
su postgres
createdb test
```


