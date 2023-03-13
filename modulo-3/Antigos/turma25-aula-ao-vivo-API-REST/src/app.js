const express = require('express');

const app = express();
app.use(express.json());

app.post('/activities', (req, res) => {
  activities.push(req.body);
  res.status(201).json(req.body);
});

app.put('/activities/:id', (req, res) => {
  const { id } = req.params; //const id = req.params.id;
});

module.exports = app;
