const Book = require('../models').Book;

module.exports = {
  create(req, res) {
    return Book
      .create({
        bid: req.body.bid,
        name:req.body.name,
        author:req.body.author,
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Book
      .findAll()
      .then(book => res.status(200).send(book))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Book
      .findByPk(req.params.id)
      .then(book => {
        if (!book) {
          return res.status(404).send({
            message: 'Book Not Found',
          });
        }
        return res.status(200).send(book);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Book
      .findByPk(req.params.id)
      .then(book=> {
        if (!book) {
          return res.status(404).send({
            message: 'Book Not Found',
          });
        }
        return book
          .update({
            bid : req.body.bid || book.bid,
          })
          .then(() => res.status(200).send(book))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Book
    .findByPk(req.params.id)
      .then(book => {
        if (!book) {
          return res.status(400).send({
            message: 'Book Not Found',
          });
        }
        return book
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
  },
};