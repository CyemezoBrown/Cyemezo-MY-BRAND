  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBn1-6Hb_iD6ocK6qm64TxZqt03cUyEhNc",
    authDomain: "contactform-81831.firebaseapp.com",
    databaseURL: "https://contactform-81831.firebaseio.com",
    projectId: "contactform-81831",
    storageBucket: "contactform-81831.appspot.com",
    messagingSenderId: "897639949869",
    appId: "1:897639949869:web:e738addd259cc0907e3aa4",
    measurementId: "G-JCBZMCPZE6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 // Reference contactInfo collections

 let contactInfo = firebase.database().ref("infos");


  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);

 function submitForm(e) {
  e.preventDefault();
  
  // get input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
  }

   // save infos to Firebase

function saveContactInfo(name, email, message) {
   	let newContactInfo = contactInfo.push();

   	newContactInfo.set({
   		name: name,
   		email: email,
   		message: message,
   	});
}