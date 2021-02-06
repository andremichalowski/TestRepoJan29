const express = require("express"); // import express
const casesRouter = require('./routers/caseesRouter.js'); //Step 2A: Import Router
const headerRouter = require('./routers/headerRouter.js'); //Step 2A: Import Router
const server = express(); // instantiate server
server.use(express.json()); // configure server

function passCheck(req, res, next) { // 1. Create Middleware
	if (req.headers.password === "mellon") {
			next();
	} else {
			res.status(401).json({ errorMessage: "Inccorect password" });
	}
}

server.use('/api/cases', passCheck, casesRouter); // 2. Add to route instantiation
server.use('/api/header', headerRouter);

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;