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

firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  const ref = firebase.storage().ref();
  

let imageLink;
const coverImage = document.querySelector('.cover-image')
 coverImage.addEventListener('change',function(){
   const file =coverImage.files[0]
   const name = file.name
  
   const metadata = {
     contentType:file.type 

   }

   const task = ref.child(name).put(file,metadata)
     task.then(snapshot => snapshot.ref.getDownloadURL())
     .then(url =>{
       imageLink = url
     })
 })


  const createArticle= document.querySelector('.create-article');
  createArticle.addEventListener('submit', function(e){
    e.preventDefault()
    db.collection('article').add({
      title: createArticle.title.value,
      body: createArticle.body.value,
      description: createArticle.description.value,
      coverImage:imageLink

    })
 createArticle.reset()
  })