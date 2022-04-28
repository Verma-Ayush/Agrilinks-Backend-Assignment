# Getting Started with Gramoday backend server

This project is created with Node.js, Express.js and MongoDB.

## On local

Download or clone this git repo on local storage with Node.js installed in system.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the node modules required to run the server.

### `npm start`

Runs the server at `http://localhost:4000/`

## Manual API Testing

You can use any Rest API Client (eg. Postman) to send API requests to the server.

### `POST /reports`

Provide the commodity data in body of the POST api request at `http://localhost:4000/reports` to receive the response with commodity reportID.

### `GET /reports?reportID=<commodity-reportID>`

Provide the commodity reportID in query of the GET api request at `http://localhost:4000/reports?reportID=<commodity-reportID>` to receive the response with commodity data.
