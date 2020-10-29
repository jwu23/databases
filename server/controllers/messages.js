var models = require('../models');

module.exports = {
  get: function (req, res) {
    // this is invoked on a GET request
    // read data by using the invoking messages method getAll from the models import
    // send back the requested response (error first)
    models.messages.getAll((err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).json(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create((err, data) => {
      if (err) {
        console.log('hi');
        res.sendStatus(404);
      } else {
        console.log('hi2');
        res.status(200);
      }
    });
  } // a function which handles posting a message to the database
};
