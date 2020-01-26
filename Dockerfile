# Stage 0, based on Node.js, to build and compile Angular
FROM node:13 as node
WORKDIR /app
COPY package.json /app/
RUN yarn
COPY ./ /app/
ARG env=production
RUN yarn build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13
COPY --from=node /app/build/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf