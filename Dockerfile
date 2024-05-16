#Fetches the node image from DockerHub
FROM node:19-bullseye

#Creates directory in the container
RUN mkdir -p /usr/src/app

#Copies our local directory to the new containers directory we just created
COPY ./app/backend /usr/src/app/backend
COPY ./app/frontend /usr/src/app/frontend

#PWD that is used by the container
WORKDIR /usr/src/app/frontend

#Installs all npm dependencies for project
RUN npm install

# #Change directory to where the custom start script is
#WORKDIR /usr/src/app/backend

#RUN npm install 
# RUN npm install concurrently

#Starts the application
CMD npm run dev