FROM node:8.12.0-alpine as base

WORKDIR /usr/app

COPY package*.json ./

RUN apk add --no-cache \
  iptables \
  && npm install

COPY . .

RUN ["chmod", "+x", "/usr/app/wait-for"]
RUN ["chmod", "+x", "/usr/app/iptables"]

CMD ["npm", "run", "start"]