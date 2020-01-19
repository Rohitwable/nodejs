// import core modules
const express = require('express');
const http = require('http');

const app = express();

//middlewares
app.use((req, res, next) => {
    console.log("In the first middleware");
    next();  // allow middleware to travel on next middleware
})

app.use((req, res, next) => {
    console.log("In the second middleware");
})

const server = http.createServer(app);
server.listen(3002);