ARG NODE_VERSION=18.16.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
