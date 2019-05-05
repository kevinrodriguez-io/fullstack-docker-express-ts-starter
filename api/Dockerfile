FROM mhart/alpine-node:8.11.4
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
EXPOSE 9000
CMD ["npm", "start"]