const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  return res.render('home');
});

app.listen(port, (err) => {
  if (err) {
    console.log('error in running the sever', err);
  }
  console.log(' My Express Server is running on port', port);
});
