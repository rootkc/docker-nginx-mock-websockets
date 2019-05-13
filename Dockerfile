FROM node:8.12.0-alpine as base

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ["chmod", "+x", "/usr/app/wait-for"]

CMD ["npm", "run", "start"]