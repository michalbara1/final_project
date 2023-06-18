document.addEventListener('DOMContentLoaded', function() {
  var newAccessoryForm = document.getElementById('newAccessoryForm');
  var loginForm = document.querySelector('form');
  var welcomeMessage = document.getElementById('welcomeMessage');
  var createButton = document.getElementById('createButton');
  var updateButton = document.getElementById('updateButton');
  var deleteButton = document.getElementById('deleteButton');
  var searchButton = document.getElementById('searchButton');

  // Make the buttons not visible until the manager enters their username and password
  createButton.style.display = 'none';
  updateButton.style.display = 'none';
  deleteButton.style.display = 'none';
  searchButton.style.display = 'none';
  newAccessoryForm.style.display = 'none';

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username and password
    var usernameInput = document.getElementById("uname");
    var passwordInput = document.getElementById("psw");
    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username === 'admin' && password === '12345') {
      welcomeMessage.textContent = 'Hello, Manager';
      createButton.style.display = 'block';
      updateButton.style.display = 'block';
      deleteButton.style.display = 'block';
      searchButton.style.display = 'block';
      loginForm.style.display = 'none';
    } else {
      // Not the manager
      alert('Invalid username or password. Please try again.');
    }
  });
});

// Move the createNew function outside the DOMContentLoaded event listener
function createNew() {
  var newAccessoryForm = document.getElementById('newAccessoryForm');

  newAccessoryForm.style.display = 'block';

  newAccessoryForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var category = document.getElementById('category').value;
    var pictureUrl = document.getElementById('pictureUrl').value;
    var description = document.getElementById('description').value;
    var price = document.getElementById('price').value;

    var accessoryDiv = document.createElement('div');
    accessoryDiv.classList.add('accessory');
    accessoryDiv.innerHTML = `
      <img src="${pictureUrl}" alt="${description}">
      <h3>${description}</h3>
      <p>Price: ${price}</p>
    `;

    var targetContainer = document.getElementById('accessoryContainer');
    targetContainer.appendChild(accessoryDiv);

    var categoryPage = category + '.html';
    var targetPage = window.location.origin + '/' + categoryPage;
    

    // Optional: You can perform an AJAX request to save the accessory data to the server/database here

    console.log('Accessory added successfully!');
    // Perform any additional actions or display success message
  });
}
