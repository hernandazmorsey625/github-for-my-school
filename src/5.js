const express = require('express');
const app = express();
app.use(express.json());

// get all projects from the database
app.get('/projects', (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) return res.status(500).send('database error');
    return res.json(projects);
  });
});

// create a new project
app.post('/project', (req, res) => {
  const project = req.body;
  Project.create(project, (err, project) => {
    if (err) return res.status(500).send('database error');
    return res.json(project);
  });
});

// get a specific project by id
app.get('/project/:id', (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err || !project) return res.status(404).send('not found');
    return res.json(project);
  });
});

// update a specific project by id
app.put('/project/:id', (req, res) => {
  const project = req.body;
  Project.findByIdAndUpdate(req.params.id, project, { new: true }, (err, project) => {
    if (err || !project) return res.status(404).send('not found');
    return res.json(project);
  });
});

// delete a specific project by id
app.delete('/project/:id', (req, res) => {
  Project.findByIdAndRemove(req.params.id, (err, project) => {
    if (err || !project) return res.status(404).send('not found');
    return res.json({ message: 'deleted' });
  });
});

// export the router
module.exports = app;
