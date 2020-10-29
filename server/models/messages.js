var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // write function to access db
    // return all data
    db.query('SELECT message FROM messages', function (error, results, fields) {
      if (error) {
        callback(error, null);
      }
      console.log('fields', fields);
      callback(null, results);
      console.log('results2', results);
    });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
