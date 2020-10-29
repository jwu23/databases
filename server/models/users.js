var db = require('../db');

// handle connection in here ?

module.exports = {
  getAll: function (callback) {
    db.dbConnection.connect();
    db.dbConnection.query('SELECT username FROM messages;', function (error, results, fields) {
      if (error) {
        callback(error, null);
      }
      callback(null, results);
    });
  },
  create: function (data, callback) {
    console.log('username', data.username);
    db.dbConnection.connect();
    db.dbConnection.query(`INSERT INTO messages (username) VALUES ("${data.username}");`, function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  }
};
