FROM node:14.17.6-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ARG REACT_APP_PORT

ENV REACT_APP_PORT=$REACT_APP_PORT

COPY . .