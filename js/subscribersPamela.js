//the set of code form pulling the info from the database
const SubscribeForm = document.querySelector('.SubscribersForm');

// Adding and saving documents
 SubscribeForm.addEventListener('submit', e => {
    
    e.preventDefault();

    const now = new Date();
    const subscribers = {
 
  email: SubscribeForm.userEmail.value,
  
  created_at: firebase.firestore.Timestamp.fromDate(now)
};



db.collection('subscribers').add(subscribers).then(() => {

    console.log('subscribers added');
  }).catch(err => {
    console.log(err);
  
  });
});