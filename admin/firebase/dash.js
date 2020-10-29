const blogList = document.querySelector('#blog-list');
const form = document.querySelector('#add-blog-form');



 // create element and render list
 function renderBlog(doc){
     let li = document.createElement('li');
     let sn = document.createElement('span');
     let title = document.createElement('span');
     let name = document.createElement('span');

     li.setAttribute('data-id', doc.id);
     sn.textContent = doc.data().sn;
     title.textContent = doc.data().title;
     name.textContent = doc.data().name;

     li.appendChild(sn);
     li.appendChild(title);
     li.appendChild(name);

     blogList.appendChild(li);
 }
  // Getting Data
db.collection('admin').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlog(doc);
    })
});

  // Saving Data
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      db.collection('admin').add({
          title: form.title.value,
          name: form.name.value
      });
      form.name.value = '';
      form.title.value = '';
  })