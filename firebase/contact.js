
const createMessage=document.querySelector('.contact-form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('.message');


 // Saving data
  createMessage.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    db.collection('contact').add({
      name: name.value,
      email: email.value,
      message: message.value,
      
});
    name.value = '';
    email.value  = '';
    message.value  = '';
    
  })

