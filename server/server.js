'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log(`A New User Connected from port ${port}`);
})

io.on('disconnect', (socket) => {
    console.log(`A New User Was Disconnnected from port ${port}`);
});
server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
