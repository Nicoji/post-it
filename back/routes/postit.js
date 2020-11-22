const express = require('express');
const route = express.Router();
const postitController = require('../controllers/postitController');

route.get('/', postitController.getPostits);
route.get('/note/:id', postitController.getOnePostit);
route.post('/', postitController.addPostit);
//  Si ca marche pas, regarder le cours OPC, y'a un truc que j'ai pas mis
route.put('/note/:id', postitController.updatePostit);
route.delete('/note/:id', postitController.deletePostit);

module.exports = route;