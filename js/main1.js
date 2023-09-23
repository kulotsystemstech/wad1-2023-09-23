const formUser = document.querySelector('#form-user');
const txtFirstname = document.querySelector('#first-name');
const txtLastname = document.querySelector('#last-name');
const divOutput = document.querySelector('#output');

formUser.addEventListener('submit', function(e) {
   e.preventDefault();

   const firstName = txtFirstname.value;
   const lastName  = txtLastname.value;
   const fullName = firstName + " " + lastName;

   divOutput.innerText = "Hello world " + fullName;
   // divOutput.innerHTML = "Hello world <b>" + fullName + "</b>";

});