// First Collection(Virus)

// const form = document.querySelector('.form');
// const addDifferentStories = document.querySelector('.form');
const article = document.querySelector('.container');
const addCoronaVirus =(CoronaVirus) =>{

    let Coronaauthor= (CoronaVirus.author);
    
    let Coronacreate= (CoronaVirus.created_at);
    
    let Coronatitle= (CoronaVirus.title);
    
    let CoronaImage= (CoronaVirus.image);

    let html =
    ` 
    <div class="col newsColumn contain">
    <div class="card" >
    <div class="container contain ">
      <div class="card">
      <img src="${CoronaImage}" alt="" width="290vw"> 
      <div class="row first">
      <div class="card-body">
        <h5 class="card-title bigHeading">
            <a class="anchorTagHeading" href="#">${Coronatitle}</a>
        </h5>
        <p class="card-text paraCardText">
        Author's Name And Surname:${Coronaauthor}
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.For ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur elit.ipsum dolor, sit amet consectetur consectetur.For sum dolor, sit amet consectetur.amet  ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.${Coronacreate} sit amet consectetur.</p>
    
<button class="stylingTextInButton politicalButton btn btn-sm my-2">CoronaVirus</button>
</div>


      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

   
    `;
    // console.log(html);
    article.innerHTML += html;

}





db.collection('Corona Virus').get().then((snapshot)=>{

snapshot.docs.forEach(doc=> {
    addCoronaVirus(doc.data());
});
    // console.log(snapshot.docs[0].data());
}).catch(err=>{
    console.log(err);
});

// Second collection(Differentstories)
const articl = document.querySelector('.container');
const addDifferentStories =(Stories) =>{

    let     Storiesauthor= (Stories.author);
    
    let Storiescreate= (Stories.created_at);
    
    let Storiestitle= (Stories.title);
    
    let  StoriesImage= (Stories.image);
    let  StoriesPhone= (Stories.Phone);
    let html =
    ` 
    <div class="col newsColum contai">
    <div class="card">
    <div class="container contain ">
      <div class="card">
      <img src="${StoriesImage}" alt="" width="290vw"> 
      <div class="row first">
      <div class="card-body">
        <h5 class="card-title bigHeading">
            <a class="anchorTagHeading" href="#">${Storiestitle}</a>
        </h5>


        <p class="card-text paraCardText">
        Author's Name And Surname:$ ${StoriesPhone}${Storiesauthor}
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.For ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur elit.ipsum dolor, sit amet consectetur consectetur.For sum dolor, sit amet consectetur.amet  Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur. sit amet consectetur.${Storiescreate}</p>
        


          <button class="stylingTextInButton politicalButton btn btn-sm my-2">TopStories</button>
          </div>
    

      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

   
    `;
    // console.log(html);
    articl.innerHTML += html;

}

db.collection('Different stories').get().then((snapshot)=>{

    snapshot.docs.forEach(doc=> {
        addDifferentStories(doc.data());
    });
        // console.log(snapshot.docs[0].data());
    }).catch(err=>{
        console.log(err);
    });

// Third colllection
    const PetrolArticles =document.querySelector('.PetrolArticles');
    const form = document.querySelector('form');
    
    const addPetrol = (Petrol,id) => {
    
    
        let     Petrolauthor= (Petrol.author);
            
            let Petroltitle= (Petrol.title);
            
            let  PetrolImage= (Petrol.image);
          let time = Petrol.created_at;
          let html = `
            <div class="PetrolDiv" data-id="${id}">
            <div class="col newsColumn contains">
                <div class="card" >
                <div class="container contain ">
                  <div class="card">
                  <img src="${PetrolImage}" class="ima" alt="" width="305vw"> 
                  <div class="row first">
                  <div class="card-body">
                    <h5 class="card-title bigHeading">
                        <a class="anchorTagHeading" href="#">${Petroltitle}</a>
                    </h5>
                    <p class="card-text paraCardText">
                      Author's Name And Surname:${Petrolauthor}
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.For ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur elit.ipsum dolor, sit amet consectetur consectetur.For sum dolor, sit amet consectetur.amet consecteturctetur consectetur.For sum dolor, sit amet consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit.ipsum dolor, sit amet consectetur consectetur.${time} sit amet consectetur.</p>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                  </div>
                  <button class="stylingTextInButton politicalButton delete btn btn-sm my-2">Delete</button>
                  </div>
                
            
               
                `;
                PetrolArticles.innerHTML += html;
    };
    
    
    
    
    
    // delete the recipe 
    
    const deletePetrol = (id) =>{
        const Petrol = document.querySelectorAll('.PetrolDiv');
    
        Petrol.forEach(Petrol =>{
            if ( Petrol.getAttribute('data-id') === id){
    
                Petrol.remove();
            }
        });
    };
    
    // getting documents in real time
    db.collection('Petrol').onSnapshot(snapshot =>{
    
        //    console.log(snapshot.docChanges());
            snapshot.docChanges().forEach (change =>{
        
                const doc = change.doc;
                if(change.type === 'added'){
                    addPetrol(doc.data(), doc.id);
                }else if (change.type === 'removed'){
                    deletePetrol(doc.id);
                }
            });
        });
    
    // get the specific id
    // db.collection('recipes').get().then((snapshot) =>{
    
    
    //     // do something when we have the data
    //     // console.log(snapshot.docs[0].data());
    //     snapshot.docs.forEach (doc => {
          
    //         console.log(doc.id);
    //           addRecipe(doc.data(), doc.id);
    //     });
    
    // }).catch(err =>{
    //     console.log(err);
    // });
    
    
    // Adding documents
    form.addEventListener('submit', e => {
        
        e.preventDefault();
        const now = new Date();
        const Petrol = {
    
            title: form.userPetrol.value,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
    
        db.collection('Petrol').add(Petrol).then(() => {
    
            console.log('Petrol added');
        }).catch(err => {
            console.log(err);
        
        })
    });
    
    // deleting list items from the database and the website
    PetrolArticles.addEventListener('click', e =>{
        // console.log(e);
        if(e.target.tagName === 'BUTTON'){
            const id = e.target.parentElement.getAttribute('data-id')
    
            db.collection('Petrol').doc(id).delete().then(() =>{
                console.log('Petrol deleted')
                
            }).catch(err=>{
                console.log(err);
            });
    
        
        }
    });
    
  



















































































































