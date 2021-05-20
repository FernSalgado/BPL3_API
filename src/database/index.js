var mongoose = require('mongoose');

module.exports = mongoose
  .connect(
    'mongodb+srv://user:0i2tBGzrvgsnAOPi@bpl3.ggyec.mongodb.net/bpl4?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn('Sucesso'))
  .catch(err => console.warn('Erro', err));