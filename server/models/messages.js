var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // write function to access db
    // return all data
    db.dbConnection.connect();
    db.dbConnection.query('SELECT message FROM messages;', function (error, results, fields) {
      if (error) {
        callback(error, null);
      }
      callback(null, results);
      // console.log('results2', results);
    });
  }, // a function which produces all the messages
  create: function (data, callback) {
    console.log('message data', data);
    db.dbConnection.connect();
    db.dbConnection.query(`INSERT INTO messages (username, roomname, message) VALUES ('${data.username}', '${data.roomname}', '${data.text}');`, function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};