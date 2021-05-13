const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

var contactList = [
  {
    name: 'Paul',
    phone: '1234567891',
  },
  {
    name: 'iron man',
    phone: '56423176231',
  },
  {
    name: 'Hulk',
    phone: '9999999990',
  },
];

app.get('/', (req, res) => {
  return res.render('home', {
    title: 'My contact list',
    contact_list: contactList,
  });
});
app.get('/practice', (req, res) => {
  return res.render('practice', {
    title: 'Let us play',
  });
});

app.post('/create-contact', (req, res) => {
  // contactList.push({
  //   name: req.body.name,
  //   phone: req.body.phone,
  // });
  contactList.push(req.body);
  // return res.redirect('/');
  return res.redirect('back');
});

app.listen(port, (err) => {
  if (err) {
    console.log('error in running the sever', err);
  }
  console.log(' My Express Server is running on port', port);
});
