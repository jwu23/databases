var db = require('../db');

// handle connection in here

module.exports = {
  getAll: function (callback) {

    db.query('SELECT username FROM messages;', function (error, results, fields) {
      if (error) {
        callback(error, null);
      }
      // console.log('fields', fields);
      callback(null, results);
      // console.log('results2', results);
    });
  },
  create: function (data, callback) {
    console.log(data.username);

    db.query('INSERT INTO messages (username) VALUES (' + data.username + ');', function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  }
};
