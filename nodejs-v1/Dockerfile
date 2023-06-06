FROM node:16

COPY --chown=node:node . /opt/nodejs-v1
USER node
WORKDIR /opt/nodejs-v1
RUN npm install

EXPOSE 3000
CMD ["node","server.js"]

