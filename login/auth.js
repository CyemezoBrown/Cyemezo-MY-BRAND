var firebaseConfig = {
    apiKey: "AIzaSyCVf9mAy_0Tgbfpangq9HjPG0uqQiAX_xY",
    authDomain: "landing-page-44bc0.firebaseapp.com",
    databaseURL: "https://landing-page-44bc0.firebaseio.com",
    projectId: "landing-page-44bc0",
    storageBucket: "landing-page-44bc0.appspot.com",
    messagingSenderId: "144626464470",
    appId: "1:144626464470:web:c518f3f8d5942e28dc3b77",
    measurementId: "G-1W2PKCP0EE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();


  const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
  e.preventDefault();


  const email = loginForm['email'].value;
  const password=loginForm['password'].value;

  // if(email == 'email' && password =='password'){
  //   window.location.replace('../index.html');
  //   return;
  // }

  auth.signInWithEmailAndPassword(email,password).then(cred =>{
     loginForm.reset();
      window.location.replace('../Landing-page-blog/index.html');

 
   
  })
})

// const loginForm=document.querySelector('#login-form');



//   loginForm.addEventListener('submit', (e) =>{
    
//     e.preventDefault();
//     db.collection('users').get().then((snapshot) =>{
      
// const email = document.querySelector('#email').value;
// const password = document.querySelector('#password').value;
//       snapshot.docs.forEach(doc => {
//         const dataemail = doc.data().email;
//         const datapassword = doc.data().password;
//         if(email == dataemail && password == datapassword) {
//           window.location.replace("../index.html");
//           return;
//         }
//       })
//     });
    
//   })