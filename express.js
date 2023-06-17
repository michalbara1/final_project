var express = require('express');
var app = express();
var port = 3300;

var path = require('path');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'));
});


app.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Contact.html'));
});

app.get('/Rings', (req, res) => {
  res.sendFile(path.join(__dirname, 'rings.html'));
});

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
  });

app.get('/Admin', (req, res) => {
      res.sendFile(path.join(__dirname, 'admin.html'));
});

  app.listen(port, function() {
    console.log('you connect to port 3300');
  });



  




