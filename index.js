const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// // middleware1
// app.use(function (req, res, next) {
//   console.log('middleware 1 is called');
//   next();
// });

// // middleware 2
// app.use(function (req, res, next) {
//   console.log('middleware 2 is called');
//   next();
// });

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
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log('Error in fetching contacts from db');
      return;
    }

    return res.render('home', {
      title: 'My contact list',
      contact_list: contacts,
    });
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
  // contactList.push(req.body);
  // return res.redirect('/');

  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log('error in creating a contact');
        return;
      }
      console.log('***********', newContact);
      return res.redirect('back');
    }
  );
  // return res.redirect('back');
});

// for deleting a contact
app.get('/delete-contact', function (req, res) {
  // console.log(req.query);
  let id = req.query.id;
  // find te contact in database using id and delete
  Contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log('error in deleting an onject form database');
      return;
    }
    return res.redirect('back');
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log('error in running the sever', err);
  }
  console.log(' My Express Server is running on port', port);
});
