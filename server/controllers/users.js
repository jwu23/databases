var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).json(data);
      }
    });
  },
  post: function (req, res) {
    // console.log(req.body);
    if (req.body === undefined) {
      res.sendStatus(404);
      res.end();
    } else {
      models.users.create(req.body, (err, data) => {
        if (err) {
          console.log('hi');
          res.sendStatus(404);
        } else {
          console.log('hi2');
          res.status(200).json(data);
        }
      });
    }
  }
};
