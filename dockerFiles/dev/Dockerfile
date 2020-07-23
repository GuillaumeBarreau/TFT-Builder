# base image
FROM node:14

# set working directory
WORKDIR /app

ENV NODE_ENV dev

ENV PORT 3000

# install and cache app dependencies
COPY package.json /app/package.json

COPY package-lock.json /app/package-lock.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

EXPOSE 3000

# start app
CMD ["npm", "run", "dev"]