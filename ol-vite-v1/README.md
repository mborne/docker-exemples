# ol-vite-v1

Application OpenLayers minimaliste pour illustrer la construction en deux étapes (c.f. [multi-stage build](https://docs.docker.com/build/building/multi-stage/)) d'un site statique.

## Utilisation classique

```bash
# installation des dépendances
npm install
# exécution en mode DEV
npm run start
# construction site statique dans dist
npm run build
```

## Utilisation avec docker

```bash
# construction de l'image dans le dossier ol-vite-v1
cd ol-vite-v1
docker build -t ol-vite-v1 .
# démarrage de l'image sur http://localhost:8888
docker run -d --name ol-vite-v1 -p 8888:80 ol-vite-v1

# suppression du conteneur
docker rm -f ol-vite-v1
```

## Ressources

* [github.com - openlayers/ol-vite](https://github.com/openlayers/ol-vite?tab=readme-ov-file#openlayers--vite)
