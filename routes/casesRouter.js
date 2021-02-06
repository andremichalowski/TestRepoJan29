const express = require('express') // import express
//import modal or db here
const router = express.Router();// instantiate router

//GET
server.get('/cases', (req, res) => {
  res.status(200).send({ url: '/cases', operation: 'GET'});
})

//POST
server.post('/cases', (req, res) => {
  res.status(201).json({ url: '/cases', operation: 'POST' });
});

//PUT
server.put('/cases', (req, res) => {
  res.status(200).json({ url: '/cases', operation: 'PUT' });
});

//DELETE
server.delete('/cases', (req, res) => {
  res.status(204);
});

module.exports = router;