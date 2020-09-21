// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyArrJ67yV7DcaCVCI9Wmpe448u7Dn81bRM",
    authDomain: "single-blog-2dc8e.firebaseapp.com",
    databaseURL: "https://single-blog-2dc8e.firebaseio.com",
    projectId: "single-blog-2dc8e",
    storageBucket: "single-blog-2dc8e.appspot.com",
    messagingSenderId: "979282792138",
    appId: "1:979282792138:web:98c20aca18be16448f2e33",
    measurementId: "G-ET5323W2D9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference single blog Info collections

let blogInfo = firebase.database().ref("comment");


// Listen for a submit
document.querySelector(".comment").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

// get input values
let name = document.querySelector(".name").value;
let comment = document.querySelector(".comment").value;
console.log(name, comment);

saveBlogInfo(name, comment);

document.querySelector("comment").reset();
}

 // save infos to Firebase

function saveBlogInfo(name, comment) {
     let newBlogInfo = blogInfo.push();

     newBlogInfo.set({
         name: name,
         comment: comment,
     });
};
  // saving data
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    blogInfo.collection('comment').add({
      name: form.name.value,
      comment: form.comment.value
    });
  })