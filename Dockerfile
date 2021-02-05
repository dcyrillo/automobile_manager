FROM node:lts-alpine AS development


ENV APP_FOLDER /home/node/app

RUN mkdir /mkdir $APP_FOLDER \
	&& chown -R node $APP_FOLDER

RUN apk update \
	&& apk upgrade \
	&& apk add --no-cache bash bash-completion nano xclip

USER node

WORKDIR $APP_FOLDER

COPY --chown=node package*.json ./

RUN npm install && npm cache clean --force

COPY --chown=node  . .

RUN npm run build
