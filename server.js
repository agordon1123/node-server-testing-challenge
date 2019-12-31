const express = require('express');
const Departments = require('./models/dept-models');

const server = express();
server.use(express.json());

server.get('/departments', (req, res) => {
    Departments.find()
        .then(dept => res.status(200).json(dept))
        .catch(err => res.status(500).json(err));
});

server.post('/departments', (req, res) => {
    console.log(req.body)
    let { name, building } = req.body;

    if (!name || !building) {
        res.status(400).json({ error: 'Please include a valid request body' })
    } else {
        Departments.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err));
    };
});

server.delete('/departments/:id', (req, res) => {
    const { id } = req.params;
    
    Departments.remove(id)
        .then(success => {
            if (success === 1) {
                res.status(200).json({ message: `Succesfully deleted department with the ID ${id}` });
            } else {
                res.status(500).json({ error: 'Internal error' });
            }
        })
        .catch(err => res.status(500).json(err));
});

module.exports = server;
