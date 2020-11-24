const Postit = require('../models/postitModel');

exports.getPostits = (req, res, next) => {
    Postit.find()
        .then(postits => res.status(200).json(postits))
        .catch(error => res.status(400).json({error}));
};

exports.getOnePostit = (req, res, next) => {
    Postit.findOne({_id: req.params.id})
        .then(postit => res.status(200).json(postit))
        .catch(error => res.status(400).json({error}));
};

exports.addPostit = (req, res, next) => {
    const postit = new Postit({
        ...req.body
    });
    postit.save()
    .then(() => res.status(201).json())
    .catch(error => res.status(400).json({ error }));
};

//  Si ca marche pas, regarder le cours OPC, y'a un truc que j'ai pas mis
exports.updatePostit = (req, res, next) => {
    Postit.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json())
        .catch(error => res.status(400).json({ error }));
};

exports.deletePostit = (req, res, next) => {
    Postit.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json())
        .catch(error => res.status(400).json({ error }));
};