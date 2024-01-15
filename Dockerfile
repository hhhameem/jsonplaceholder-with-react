ARG NODE_VERSION=18.16.1

FROM node:${NODE_VERSION}-alpine as build

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY ./public ./public

COPY ./src ./src

COPY ./cypress ./cypress

COPY craco.config.js tailwind.config.js cypress.config.js ./

RUN npm run build



FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;"]