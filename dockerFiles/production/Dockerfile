FROM node:alpine
# Create app directory
ENV PORT 3000
EXPOSE 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN  npm i -S serve
# Bundle app source
COPY . /usr/src/app
RUN npm run build

CMD [ "npm", "start" ]