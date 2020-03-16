//the set of code form pulling the info from the database
const BigArtArticles = document.querySelector('.BigArtArticles');

const addCreative = (creative) => {

    // console.log(recipe.created_at.toDate());
    let artImage = (creative.Image);
    let writer = (creative.artist);
    let time = (creative.created_at.toDate());
    let html = 
    `
    <div class=" HomelessDiv">
    <div class="card">
      <img src="${artImage}" class="card-img" alt="LifeStyle.Art" loading ="slow" style="height: 40.7vh;" id="HomelessImage">
    <div class="card-body"  style="margin-left:40px;" >
      <h3 class="card-title bigHeading">
          <a class="anchorTagHeading HomelessHeading" href="#" >${creative.title}</a>
      </h3>

 
      <strong>
        <h6 class="card-text ByAuthorText HomelessAuthor" style= "margin-right:40px;">  Author's Name  And Surname: ${writer}</h6>
       </strong><p class="paraCardText" style= " margin-right:40px;">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.For sum dolor${time}</p>

      <button  class="politicalButtonMain">
        <h3 class="politicalButton">ART</h3>
      </button>
    </div>
    </div>

  </div>
    `;

    BigArtArticles.innerHTML += html;
};


//get the specific id
db.collection('Creatives').get().then((snapshot) =>{


    // do something when we have the data
    snapshot.docs.forEach (doc => {
      
        // console.log(doc.data());
        addCreative(doc.data());
    });

}).catch(err =>{
    console.log(err);
});

//the second set of articles pulling from the database FOOD
const FoodArticles = document.querySelector('.FoodArticles');

const addFood = (foodies) => {

  // console.log(recipe.created_at.toDate());
  let foodImage = (foodies.Image);
  let editor = (foodies.author);
  let html = 
  `
  <div class=" PovertyDiv">
  <div class="card">
    <img src="${foodImage}" class="card-img" alt="LifeStyle Page.Food" loading ="slow" id="PovertyImage" style="height: 40.7vh;">
  <div class="card-body" style="margin-left:40px;" >
      <h3 class="card-title bigHeading">
          <a class="anchorTagHeading PovertyHeading" href="#">${foodies.title}</a>
      </h3>


      <strong>
        <h6 class="card-text ByAuthorText PovertyAuthor" style="margin-right:40px;" >  Author's Name  And Surname: ${editor}</h6>
      </strong>
    <p class="paraCardText" style="margin-right:40px;" >  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.For sum dolor, sit amet consectetur</p>

      <button  class="politicalButtonMain">
        <h3 class="politicalButton">FOOD</h3>
      </button>

  </div>
  </div>

</div>
  
  `;

  FoodArticles.innerHTML += html;
};


//get the specific id
db.collection('food').get().then((snapshot) =>{


  // do something when we have the data
  snapshot.docs.forEach (doc => {
    
      // console.log(doc.data());
      addFood(doc.data());
  });

}).catch(err =>{
  console.log(err);
});

//the third set of articles pulling from the database VarietyArticles
const VarietyArticles = document.querySelector('.VarietyArticles');
const form = document.querySelector('form');

const addVariety = (variety,id) => {

  //  console.log(varities.created_at.toDate());
  let VarietyImage = (variety.Image);
  let contactDetails = (variety.ContactNumbers);
  let date = (variety.created_at.toDate());

 
  let html = 
  `

 <div id="VarietyDiv" data-id = "${id}">
 <div class="card">
   <img src="${VarietyImage}" class="card-img" alt="LifeStyle page.Variety" style="height:40.7vh;" id="HomelessImage">
 <div class="card-body" style="margin-left:40px;">
   <h3 class="card-title bigHeading">
       <a class="anchorTagHeading HomelessHeading" href="#">${variety.title}</a>
   </h3>


   <strong>
     <h6 class="card-text ByAuthorText HomelessAuthor" style="margin-right:40px;">  Author's Name  And Surname:TplCoders</h6>
    </strong>

 <p class="paraCardText" style="margin-right:40px;">Call us on 0${contactDetails} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.Submitted on:${date}.</p>


 </div>
 </div>


 <button class="stylingTextInButton politicalButtonMain btn btn-sm my-2">Delete</button>
</div>

  `;

  VarietyArticles.innerHTML += html;
};




// getting documents in real time
   db.collection('variety').onSnapshot(snapshot =>{

//    console.log(snapshot.docChanges());
    snapshot.docChanges().forEach (change =>{

        const doc = change.doc;
        if(change.type === 'added'){
            addVariety(doc.data(), doc.id);
        }else if (change.type === 'removed'){
            deleteVariety(doc.id);
        }
    });
});


// delete the varierty
const deleteVariety = (id) =>{
  const variety = document.querySelectorAll("#VarietyDiv");

  variety.forEach(variety =>{
      if ( variety.getAttribute('data-id') === id){

          variety.remove();
      }
  });
}

// Adding and saving documents
form.addEventListener('submit', e => {
    
    e.preventDefault();

    const now = new Date();
    const variety = {
 
  title: form.userVariety.value,
  ContactNumbers: form.userNumber.value,
  Image: form.userImage.value,
  created_at: firebase.firestore.Timestamp.fromDate(now)
};

db.collection('variety').add(variety).then(() => {

  console.log('articles added');
}).catch(err => {
  console.log(err);

});
});

// deleting list items from the database and the website
VarietyArticles.addEventListener('click', e =>{
// console.log(e);
if(e.target.tagName === 'BUTTON'){
  const id = e.target.parentElement.getAttribute('data-id');

  db.collection('variety').doc(id).delete().then(() =>{
      console.log('article deleted');
  }).catch(err => {
    console.log(err);
  });

}
});
 



