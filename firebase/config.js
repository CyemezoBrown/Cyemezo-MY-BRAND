
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
  const db = firebase.firestore();
  const ref = firebase.storage().ref();
  const auth = firebase.auth();
