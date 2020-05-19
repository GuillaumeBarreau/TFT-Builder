# base image
FROM node:14

# set working directory
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install serve dependency
RUN npm install serve -g --silent

RUN npm install --silent
RUN npm install react-scripts -g --silent

EXPOSE 3000

# start app
CMD ["npm", "run", "dev"]