const express = require('express');
const { activities } = require('./data/activities');

const app = express();
app.use(express.json());

//GET
app.get('/activities', (req, res) => {
  res.status(200).json(activities);
});

//GET com parametros
app.get('/activities/:id', (req, res) => {
  const activityId = req.params.id;
  const activity = activities.find(
    (id) => id.id === +activityId // +abc = Number(abc) = transforma string em numero
  );
  res.status(200).json(activity);
});

//POST
app.post('/activities', (req, res) => {
  const body = req.body;
  activities.push(body);
  res.status(200).json(activities);
});

//PUT
app.put('/activities/:id', (req, res) => {
  const { id } = req.params; // Desestruturando req.params.id
  const {
    description,
    status,
  } = req.body;

  const activity = activities.find(
    activityId => activityId.id === +id
  );

  activity.description = description;
  activity.status = status;

  res.status(200).json(activities);
});

//Delete
app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;

  const position = activities.findIndex(
    (activityId) => activityId.id === +id
  );

  activities.splice(position, 1);
  res.status(204).end();
});

module.exports = app;
