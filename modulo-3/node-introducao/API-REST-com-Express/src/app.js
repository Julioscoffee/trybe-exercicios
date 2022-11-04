const express = require("express");

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'Afazer',
  },
  {
    id: 3,
    description: 'Estudar Javascript',
    status: 'Feito',
  },
]

const app = express();

app.use(express.json());

//Rotas

app.get('/activities', (req, res) => {
  res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
  const idParam = req.params.id;
  const activity = activities.find(({id}) => id === Number(idParam));
  res.status(200).json(activity);
});

app.post('/activities', (req, res) => {
  const activity = req.body;
  activities.push(activity);
  res.status(200).json(activities);
});

app.put('/activities/:id', (req, res) => {
  const idParam = req.params.id;
  const { description, status } = req.body;
  let alteredActivity;

  for(let i = 0; i < activities.length; i++) {
    const activity = activities[i];

    if(activity.id === Number(idParam)) {
      activity.description = description;
      activity.status = status;
      alteredActivity = activity;
    }
  }

  res.status(200).json(alteredActivity);
});

module.exports = app;
