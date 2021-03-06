var models = require('../models');

module.exports = {
  get: function (req, res) {
    // this is invoked on a GET request
    // read data by using the invoking messages method getAll from the models import
    // send back the requested response (error first)
    models.messages.getAll((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    if (req.body === undefined) {
      res.sendStatus(404);
      res.end();
    } else {
      models.messages.create(req.body, (err, data) => {
        if (err) {
          console.log('hi');
          res.sendStatus(404);
        } else {
          console.log('hi2');
          res.status(200).json(data);
        }
      });
    }
  } // a function which handles posting a message to the database
};

// req.data is the object with the information sent from client