const bookController = require('../controllers').book;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/book', bookController.create);
  app.get('/api/book',bookController.list);
  app.get('/api/book/:id', bookController.retrieve);
  app.get('/api/book/update/:id',bookController.update);
  app.delete('/app/book/del/:id',bookController.destroy);
  
};