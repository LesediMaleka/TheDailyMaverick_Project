function openNav() {
    document.getElementById("myNav").style.left = "0";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.left = "-100vw";
  }
  
    //this is the subscribe section
    const subscribebtn = document.querySelector('.subscribeBttn');
    const wrapper = document.querySelector('.popupWrapper')
    const close = document.querySelector('.close');
    const signmeup = document.querySelector('#signmeup');
    const privacy = document.querySelector('#Privacy');
  
     subscribebtn.addEventListener('click', () =>{
         wrapper.style.display = 'block'
     });    
     
     close.addEventListener('click', () =>{
      wrapper.style.display = 'none'
     });
    
     const pW = document.querySelector('.popupWrapper');
    
     pW.addEventListener('click',  e=>{
        
        if(e.target.className === 'popupWrapper'){
            wrapper.style.display = 'none';
        }
    
       });
    
    signmeup.addEventListener('click', () =>{
        window.open('https://www.dailymaverick.co.za/about/newsletter/')
    });
    privacy.addEventListener('click', () =>{
        window.open('https://www.dailymaverick.co.za/privacy-policy/')
    
    });
   
  
    
    // this is the footer section
    const facebook = document.querySelector('.facebook')
    const instagram = document.querySelector('.instagram')
    const twitter = document.querySelector('.twitter')
    const locationSearch = document.querySelector('.location')
    
    
    // this are the media links
     facebook.addEventListener('click', () =>{
        window.open('https://www.facebook.com/dailymaverick')
      });
      instagram.addEventListener('click', () =>{
        window.open('https://www.instagram.com/dailymaverick/')
      });
       twitter.addEventListener('click', () =>{
         window.open('https://twitter.com/dailymaverick?lang=en')
       });
     locationSearch.addEventListener('click', () =>{
        window.open('https://www.google.com/')
      });


      
//API 

// //First API
// // Politics Weighing us down Article.The first big article on Political news
// const articleContent = document.querySelector('.PoliticsWeighingUsDownDiv');
// const newsImage = document.querySelector('#PoliticsWeighingUsDownImage');


//      //API endpoint
//      const base = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=17d954474c1a4e40962725a293644143';

//     const getPoliticsWeighingUsDownInfo = async () => {
  
//     const response = await fetch (base);

//     const data = await response.json();
 
//      return data;
//     };

//     getPoliticsWeighingUsDownInfo()
//     .then(data => {
//         PoliticsWeighingUsDownData = data;
//         console.log(PoliticsWeighingUsDownData);

//    articleContent.innerHTML = `
        
//         <br>
//                 <a href="PoliticsWeighingUsDown.html">
//                     <div class="row first">
                                
//                         <div class="col PoliticsWeighingUsDownDiv">
//                             <div class="card">
//                             <img src="asssets/images/pics/politicsWeighingUsDown.jpeg" class="card-img-top PoliticsWeighingUsDownImage" alt="political issues: political matters weighing us down">
//                                 <div class="card-body">

//                                     <h3 class="card-title bigHeading">
//                                         <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${PoliticsWeighingUsDownData.articles.title}</a>
//                                     </h3>

//                                     <strong>
//                                     <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">By Author: ${PoliticsWeighingUsDownData.articles.author}</h6>
//                                     </strong>

//                                     <p class="paraCardText">${PoliticsWeighingUsDownData.articles.description}</p>
                
//                                     <button  class="politicalButtonMain">
//                                     <h3 class="politicalButton">POLITICAL</h3>
//                                     </button>
                                
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </a>
//                 <br><br><br><br><br><br>
//    `;

//    newsImage.setAttribute('src', PoliticsWeighingUsDownData.articles.urlToImage); 

// }).catch(err => console.log (err));


// getPoliticsWeighingUsDownInfo();



//Second API 
// upcoming elections Article.The second big article on Political news
      
//       const  UpcomingElectionsDiv = document.querySelector('#UpcomingElectionsDiv');
//       const UpcomingElectionsImage = document.querySelector('#UpcomingElectionsImage');



//       const getUpcomingElectionsInfo = async () => {
//       //API endpoint
//      const base = 'http://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=d56b510c5f7e4c78a8d27c5305f3248e';

//      //? is to make a request/query.The knock-knock
    
//     const response = await fetch (base);

//     const data = await response.json()


//     .then(data => {
//         UpcomingElectionsData = data;
//         console.log(UpcomingElectionsData);

//         UpcomingElectionsDiv.innerHTML = `
        
//    <br>
//         <a href="UpcomingElections.html">
//             <div class="row first">
                        
//                 <div class="col PoliticsWeighingUsDownDiv" id="UpcomingElectionsImage">
//                     <div class="card">
//                     <img src="asssets/images/pics/politicsVoting.jpeg" class="card-img-top" alt="political issues:voting,vote of confidence" id="UpcomingElectionsImage" >
//                         <div class="card-body">

//                             <h3 class="card-title bigHeading">
//                                 <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${UpcomingElectionsData.articles[2].title}</a>
//                             </h3>

//                             <strong>
//                             <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">By Author: ${UpcomingElectionsData.articles[2].author}</h6>
//                             </strong>

//                             <p class="paraCardText">${UpcomingElectionsData.articles[2].description}</p>
        
//                             <button  class="politicalButtonMain">
//                             <h3 class="politicalButton">POLITICAL</h3>
//                             </button>
                        
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </a>
//         <br><br><br><br><br><br>
//    `;

//    UpcomingElectionsImage.setAttribute('src', UpcomingElectionsData.articles[2].url); 

// }).catch(err => console.log (err));

// };
// getUpcomingElectionsInfo();


// //Third API 
// // Communinty fighting poverty Article.The first big article on Social news
      
// const  PovertyDiv = document.querySelector('.PovertyDiv');
// const PovertyImage= document.querySelector('#PovertyImage');



// const getPovertyInfo = async () => {
// //     //API endpoint
// const base = 'http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=d56b510c5f7e4c78a8d27c5305f3248e';

// //     //? is to make a request/query.The knock-knock

// const response = await fetch (base);

// const data = await response.json()


// .then(data => {
//   PovertyData = data;
//   console.log(PovertyData);

//   PovertyDiv.innerHTML = `
  
// <br>
//   <a href="UpcomingElections.html">
//       <div class="row first">
                  
//           <div class="col PoliticsWeighingUsDownDiv" id="UpcomingElectionsImage">
//               <div class="card">
//               <img src="https://asset.kompas.com/crops/tgg3al4xfOPilFCWu-VEB1eRU2k=/278x0:1390x741/780x390/filters:watermark(data/photo/2019/08/13/5d528ba5c908a.png,0,-0,1)/data/photo/2020/02/18/5e4bc63a0d49f.jpg" class="card-img" alt="social issue:Fighting poverty" loading ="slow" id="PovertyImage" style="height: 40.7vh;">
//                   <div class="card-body">

//                       <h3 class="card-title bigHeading">
//                           <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${PovertyData.articles[2].title}</a>
//                       </h3>

//                       <strong>
//                       <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">By Author: ${PovertyData.articles[2].author}</h6>
//                       </strong>

//                       <p class="paraCardText">${PovertyData.articles[2].description}</p>
  
//                       <button  class="politicalButtonMain">
//                       <h3 class="politicalButton">POLITICAL</h3>
//                       </button>
                  
//                   </div>
//               </div>

//           </div>
//       </div>
//   </a>
//   <br><br><br><br><br><br>
// `;

// PovertyImage.setAttribute('src', PovertyData.articles[2].url); 

// }).catch(err => console.log (err));

// };
// getPovertyInfo();

