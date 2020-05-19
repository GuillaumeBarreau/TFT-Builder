FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

# Set working directory
WORKDIR /opt/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json /opt/app
COPY package-lock.json /opt/app

# Install serve dependency
RUN  npm i -S serve

# Install dependencies
RUN npm install --no-optional

# Copy all files
COPY . /opt/app

# Build app
RUN npm run build

# Disabled telemetry
RUN npx next telemetry disable

CMD [ "npm", "start" ]


