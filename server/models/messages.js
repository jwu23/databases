var db = require('../db');

// db.dbConnection.connect();

module.exports = {
  getAll: function (callback) {
    // write function to access db
    // return all data
    db.dbConnection.query('SELECT * FROM messages WHERE newMessage NOT LIKE "null";', function (error, results, fields) {
      if (error) {
        callback(error, null);
      }
      callback(null, results);
      // console.log('results2', results);
    });
  }, // a function which produces all the messages
  create: function (data, callback) {
    console.log('message data', data.message);
    db.dbConnection.query(`INSERT INTO messages (username, roomname, newMessage) VALUES ("${data.username}", "${data.roomname}", "${data.message}");`, function (error, results, fields) {
      if (error) {
        callback(error, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};