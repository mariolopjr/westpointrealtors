# Build
FROM node:10-slim as build

WORKDIR /build
ARG FA_TOKEN
ARG GMAP_KEY

RUN apt-get update \
    && apt-get install -y build-essential libpng-dev zlib1g-dev

COPY ./ ./

RUN yarn
RUN yarn global add gatsby-cli
RUN cd node_modules/gatsby-source-strapi && npm i && npm run build && cd ../../

# Force no-cache after this point
ARG CACHE_DATE
RUN gatsby build

COPY ./config/nginx.conf /build/public/nginx.conf

# Prod
FROM nginx:mainline-alpine

WORKDIR /public

COPY --from=build /build/public ./
RUN rm /etc/nginx/nginx.conf \
    && mv ./nginx.conf /etc/nginx/nginx.conf \
    && mkdir -p /run/nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
        CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

STOPSIGNAL SIGTERM

CMD [ "nginx" ]
