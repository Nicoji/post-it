const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongoAdmin:Password1@cluster0.i2hcd.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));