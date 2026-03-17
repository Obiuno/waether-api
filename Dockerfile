# start with base image, slim version is all we need
FROM node:22-slim

# set up working directory inside a container
WORKDIR /app

# copies only package files in the beginning
# install dependencies before we do anything
# looks for anything that starts with packge and ends in .json -- package-lcok.json
COPY package*.json ./

# run the dependencies
# install exactly as listed in the Dockerfiles json
# clean install - remove everything that is there already and do a new install as it is written
RUN npm ci

# copy all files and folder into container
COPY . .

# default environment variables
# when it runs it needs to know what ports it is running with
ENV PORT=5000

# defines commands to start you app
CMD ["node", "app.js"]