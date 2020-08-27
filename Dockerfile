FROM node:14-alpine
RUN mkdir -p /movie/client 
WORKDIR /movie/client

COPY package.json /movie/client 
COPY package-lock.json /movie/client 

RUN npm install --silent    

COPY . /movie/client

CMD ["npm", "start"]
