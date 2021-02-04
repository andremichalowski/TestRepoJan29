const express = require("express"); // import express
const hubsRouter = require('./routers/hubs-router.js'); //Step 2A: Import Router
const server = express(); // instantiate server
server.use(express.json()); // configure server

server.use('/api/hubs', hubsRouter); //Step 2B: Create root URL for router

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;