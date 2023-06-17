// set the username and password that only the manager can log in
document.addEventListener('DOMContentLoaded', function(){


  var loginForm = document.querySelector('form');
 var welcomeMessage = document.getElementById('welcomeMessage');
  var createButton = document.getElementById('createButton');
  var updateButton = document.getElementById('updateButton');
  var deleteButton = document.getElementById('deleteButton');
  var searchButton = document.getElementById('searchButton');
 // make the buttons not visible until the manger enters his usname and psw
  createButton.style.display = 'none';
  updateButton.style.display = 'none';
  deleteButton.style.display = 'none';
  searchButton.style.display = 'none';



loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var usernameInput = document.getElementById("uname");
  var passwordInput = document.getElementById("psw");
  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username ==='admin' && password === '12345') {
    welcomeMessage.textContent = 'Hello, Manager';
    createButton.style.display = 'block';
    updateButton.style.display = 'block';
    deleteButton.style.display = 'block';
    searchButton.style.display = 'block';
    loginForm.style.display = 'none';
    startpage_Mang();
    /*
    // Reset the form fields
    usernameInput.value = '';
    passwordInput.value = '';
    */
  } else {
    // not the manger
    alert('Invalid username or password. Please try again.');
  }
});
});
function startpage_Mang()
{





}
