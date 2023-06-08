FROM node:16

RUN mkdir -p /opt/nodejs-v2 && chown -R node:node /opt/nodejs-v2

WORKDIR /opt/nodejs-v2
USER node

# téléchargement des dépendances
COPY package.json .
RUN npm install

# puis copie des autres fichiers...
COPY . .

EXPOSE 3000
CMD ["node","server.js"]

