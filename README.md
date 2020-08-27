# Install movie-testclient

React CLIENT for gastromatic movie test

## Setup Without Docker

```
npm install
npm run start
```

Test running client by accessing `http://localhost:3006/`

## Setup with Docker

Docker and docker-compose need to be installed. To start the services run

```
docker build -t movie-client .
docker run -it -p 8080:3006  movie-client
```

Test running client by accessing `http://localhost:8080/`
