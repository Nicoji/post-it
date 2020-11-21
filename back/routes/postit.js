const express = require('express');
const route = express.Router();
const Postit = require('../models/postitModel');

route.get('/', (req, res, next) => {
    Postit.find()
        .then(postits => res.status(200).json(postits))
        .catch(error => res.status(400).json({error}));
})

route.get('/note/:id', (req, res, next) => {
    Postit.findOne({_id: req.params.id})
        .then(postit => res.status(200).json(postit))
        .catch(error => res.status(400).json({error}));
})

route.post('/', (req, res, next) => {
    const postit = new Postit({
        ...req.body
    });
    postit.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
    next()
});

//  Si ca marche pas, regarder le cours OPC, y'a un truc que j'ai pas mis
route.put('/note/:id', (req, res, next) => {
    Postit.updateOne({_id: req.params.id})
        .then(() => res.status(200).json()({message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
})

route.delete('note/:id', (req, res, next) => {
    Postit.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json()({message: 'Objet supprimé !'}))
        .catc
})

module.exports = route;