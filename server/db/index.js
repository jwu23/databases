var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});


// var tablename = 'messages';

// dbConnection.connect();

// module.export = {
//   getConnection: (callback) => {
//     return dbConnection.getConnection(callback);
//   }
// };

// dbConnection.query('SELECT message FROM messages', function (error, results, fields) {
//   if (error) {
//     console.log('error but we accessed query');
//     throw error;
//   }
//   console.log('results', results);
// });

// wrong export?

module.exports.dbConnection = dbConnection;