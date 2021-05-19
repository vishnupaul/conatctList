// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/contact_list_db');

// acquir the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'connection error:'));

// up and running the print the message
db.once('open', function () {
  console.log('successfully connected to the database');
});
