FROM node:8-alpine3.11 as base

RUN apk update && apk add --no-cache git

WORKDIR /app 

COPY package* .
COPY bower.json .

RUN npm ci --production && \
    npm run bower:install -- --allow-root && \ 
    apk del git && \
    rm -rf /var/cache/apk/*

COPY --chown=node:node . . 

USER node