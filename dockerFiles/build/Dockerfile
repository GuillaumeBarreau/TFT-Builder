### STAGE 1: Build ###

FROM mhart/alpine-node:latest AS build
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

### STAGE 2: Setup ###

# the base image for this is an alpine based nginx image
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY /dockerFiles/build/nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 80
# start nginx 
CMD ["nginx", "-g", "daemon off;"]