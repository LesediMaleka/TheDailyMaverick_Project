//the set of code form pulling the info from the database
const SubsForm = document.querySelector('.SubsForm');

// Adding and saving documents
 SubsForm.addEventListener('submit', e => {
    
    e.preventDefault();

    const now = new Date();
    const subcribers = {
 
  email: SubsForm.userEmail.value,
  
  created_at: firebase.firestore.Timestamp.fromDate(now)
};



db.collection('subcribers').add(subcribers).then(() => {

    console.log('subcribers added');
  }).catch(err => {
    console.log(err);
  
  });
});
  