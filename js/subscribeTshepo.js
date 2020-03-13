//the set of code form pulling the info from the database
const SubForm = document.querySelector('.SubForm');

// Adding and saving documents
 SubForm.addEventListener('submit', e => {
    
    e.preventDefault();

    const now = new Date();
    const Subscriber = {
 
  email: SubForm.userEmail.value,
  
  created_at: firebase.firestore.Timestamp.fromDate(now)
};



db.collection('Subscriber').add(Subscriber).then(() => {

    console.log('Subscribers added');
  }).catch(err => {
    console.log(err);
  
  });
});