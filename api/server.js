const express = require("express"); // import express
const server = express(); // instantiate server
server.use(express.json()); // configure server

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;