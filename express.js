var express = require('express');
var app = express();
var port = 3300;

var path = require('path');

//to add the css file
app.use(express.static('app'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'app.html'));
});


app.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Contact.html'));
});

app.get('/Rings', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','rings.html'));
});

app.get('/Necklaces', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','necklaces.html'));
});

app.get('/Bracelets', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','bracelets.html'));
});

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
  });

app.get('/Admin', (req, res) => {
      res.sendFile(path.join(__dirname,'app','admin','admin.html'));
});


//to add a catagory in admin
/*
app.use(express.json());
app.use(express.static('public'));

app.post('/addAccessory', (req, res) => {
  const accessory = req.body;
  const category = accessory.category.toLowerCase(); // Convert category to lowercase for consistency
  const pictureUrl = accessory.pictureUrl;
  const description = accessory.description;
  const price = accessory.price;

  // Select the corresponding HTML file based on the category
  let categoryFile;
  if (category === 'rings') {
    categoryFile = 'rings.html';
  } else if (category === 'necklaces') {
    categoryFile = 'necklaces.html';
  } else if (category === 'bracelets') {
    categoryFile = 'bracelets.html';
  } else {
    return res.status(400).send('Invalid category');
  }

  // Load the category HTML file
  fs.readFile(`public/${categoryFile}`, 'utf8', (err, data) => {
    if (err) {
      console.error('Error loading category file:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Create a new container element
    const accessoryContainer = `
      <div class="accessory">
        <img src="${pictureUrl}" alt="Accessory Image">
        <p>${description}</p>
        <p>Price: ${price}</p>
      </div>
    `;

    // Append the new accessory container to the HTML content
    const updatedContent = data + accessoryContainer;

    // Save the updated content back to the category HTML file
    fs.writeFile(`public/${categoryFile}`, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error saving category file:', err);
        return res.status(500).send('Internal Server Error');
      }

      console.log('Accessory added successfully!');
      res.sendStatus(200);
    });
  });
});
*/

// to coonect to the server
app.listen(port, function() {
  console.log('you connect to port 3300');
});

  const connectDB = require('./mongo.js');
  connectDB();



  




