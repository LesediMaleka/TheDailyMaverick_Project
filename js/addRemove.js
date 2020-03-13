//The fourth collection from the database: Comments--------------------------
const commentSection = document.querySelector('ul');
const form = document.querySelector('form');

const addComment = (comment,id) => {

let time = (comment.created_at.toDate());

    let html = 
    `
        <li id="commentDiv" data-id="${id}">
            <div>${comment.title}</div>
            <br>
            <div> ${time}</div>
            <br>
            <button class="btn btn-danger btn-sm my-2">Delete comment</button>
        </li>
        
    `;

    commentSection.innerHTML += html;

};

const deleteComment = (id) =>{

    const Comments = document.querySelectorAll('li');
    Comments.forEach(comment => {
            if (comment.getAttribute('data-id') === id){
                comment.remove();
            }
        });  
}



//get documents---------------------------------
db.collection('Comments').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added'){
            addComment(doc.data(), doc.id);

        }else if (change.type === 'removed'){

            deleteComment(doc.id);
        }

    });

});


// //get documents
// db.collection('Comments').get().then((snapshot) => {

//     //do something when we have the data
//     snapshot.docs.forEach (doc => {
//             // console.log(doc.data());
//             // console.log(doc.id);
//             addComment(doc.data(), doc.id);
//     });
    

//   }).catch(err =>{
//     console.log(err);
//   });  
    

//adding documents---------------------------------------
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const comment = {

        title: form.userComments.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('Comments').add(comment).then(() => {
        console.log('comment added');
    }).catch (err => {
        console.log(err);
    });
});

//deleting data-------------------------------------------
commentSection.addEventListener('click', e =>{
        if (e.target.tagName === 'BUTTON'){
            const id = e.target.parentElement.getAttribute('data-id');
            // console.log(id);
            db.collection('Comments').doc(id).delete().then(() =>{
                console.log('comment deleted')
            });

        }
});