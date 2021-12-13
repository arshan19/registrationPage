// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.item');
// const btn1 = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background = 'pink';
// });

// function random(number) {
//    return Math.floor(Math.random() * (number+1));
// }
 
//  ul.onclick = function() {
    
//    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//    document.body.style.backgroundColor = rndCol;
//  } 

// ul.addEventListener('mouseout', (f) => {
//     f.preventDefault();
//     document.querySelector('#my-form')
//     .style.color = 'orange';
// });

// Now take the value in the form and console log the value
//  in the browsers after doing the necessary validations

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`NAME : ${nameInput.value}||
    EMAIL :  ${emailInput.value}||
    PHONE NUMBER:  ${phoneInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

  }
}















