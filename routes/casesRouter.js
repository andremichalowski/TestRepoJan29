const express = require('express') // import express
//import modal or db here
const router = express.Router();// instantiate router

//GET
router.get('/cases', (req, res) => {
  res.status(200).send({ url: '/cases', operation: 'GET'});
})

//POST
router.post('/cases', (req, res) => {
  res.status(201).json({ url: '/cases', operation: 'POST' });
});

//PUT
router.put('/cases', (req, res) => {
  res.status(200).json({ url: '/cases', operation: 'PUT' });
});

//DELETE
router.delete('/cases', (req, res) => {
  res.status(204);
});

module.exports = router;