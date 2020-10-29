var firebaseConfig = {
    apiKey: "AIzaSyApcojOMxPvj_jVyB7nOwvC7ofWfsEgc5U",
    authDomain: "admin-project-c9f19.firebaseapp.com",
    databaseURL: "https://admin-project-c9f19.firebaseio.com",
    projectId: "admin-project-c9f19",
    storageBucket: "admin-project-c9f19.appspot.com",
    messagingSenderId: "271197297974",
    appId: "1:271197297974:web:7229f029f9fe8f950d6797",
    measurementId: "G-RY53Y37K1R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const commentList = document.querySelector('#comment-list');
  const form = document.querySelector('#add-comment-form');


  // create element and render cafe
function renderComment(doc){
  let li = document.createElement('li');
  let username = document.createElement('span');
  let email = document.createElement('span');
  let comment= document.createElement('span');
  let cross = document.createElement('div');
  

  li.setAttribute('data-id',doc.id);
  username.textContent = (doc.data().username);
  email.textContent = (doc.data().email);
  comment.textContent = (doc.data().comment);
  cross.textContent = 'x';
  

  li.appendChild(username);
  li.appendChild(email);
  li.appendChild(comment);
  li.appendChild(cross);

  commentList.appendChild(li);


  //deleting data
  cross.addEventListener('click',(e) =>{
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      db.collection('comment').doc(id).delete();
  })
}
 // Getting Data
db.collection('comment').get().then((snapshot) => {
  //console.log(doc.data())
  snapshot.docs.forEach(doc => {
      renderComment(doc);
  })
});
  // Saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment').add({
        name: form.name.value,
        email: form.email.value,
        comment: form.comment.value
    });
    form.name.value = '';
    form.email.value = '';
    form.comment.value = '';
})