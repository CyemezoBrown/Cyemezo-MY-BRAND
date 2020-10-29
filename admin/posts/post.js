const blogList = document.querySelector('#blog-list');
const form = document.querySelector('#add-blog-form');
//const ref = firebase.storage().ref();
//const auth = firebase.auth


let imageLink;
const coverImage = document.querySelector('.cover-image')
 coverImage.addEventListener('change',function(){
   const file =coverImage.files[0];
   const name = file.name;
  
   const metadata = {
     contentType:file.type

   }

   const task = ref.child(name).put(file,metadata)
     task.then(snapshot => snapshot.ref.getDownloadURL())
     .then(url =>{
       imageLink = url;
     });
 });

 
// create element and render posts

function renderPost(doc){
    let li = document.createElement('li');
    let name = document.createElement('img');
    let city = document.createElement('span');
    //let cross = document.createElement('div');
    //let edit = document.createElement('a');

    li.setAttribute('data-id',doc.id);
    name.setAttribute('src',doc.data().coverImage);
    name.classList.add("img-skills");
    city.textContent = doc.data().description;
    //cross.textContent = 'x';
    //edit.textContent = 'edit';
    //edit.setAttribute('href','edit-blog.html?id=' + doc.id)

    div.appendChild(name);
    div.appendChild(city);
    //div.appendChild(cross);
    //div.appendChild(edit);

    blogList.appendChild(li);


    //deleting data
    cross.addEventListener('click',(e) =>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('post').doc(id).delete();
    })
}

db.collection('post').get().then((snapshot) =>{
    //console.log(doc.data())
    snapshot.docs.forEach(doc => {
        renderPost(doc);
    })
});

// saving data
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('post').add({
        coverImage:imageLink ,
        title:form.title.value,
        description:form.description.value,
        body:form.body.value

    });
    form.coverImage.value = '';
    form.title.value = '';
    form.description.value = '';
    form.body.value = '';
})

