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
// const articleContent = document.querySelector('.PoliticsWeighingUsDownDiv');
// const newsImage = document.querySelector('.PoliticsWeighingUsDownImage');

// //API 
// const key = 'd56b510c5f7e4c78a8d27c5305f3248e';

// const getPoliticsWeighingUsDownInfo = async () => {
//     //API endpoint
//     const base = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=d56b510c5f7e4c78a8d27c5305f3248e';

//     //? is to make a request/query.The knock-knock
//     const query = `?apiKey= ${key}`;
//     const response = await fetch (base + query);

//     const data = await response.json();
//     .then(data => {
//         PoliticsWeighingUsDownData = data;
//         console.log(PoliticsWeighingUsDownData);

//    articleContent.innerHTML = `
//         <a href="PoliticsWeighingUsDown.html">
//             <div class="row first">
                        
//                 <div class="col PoliticsWeighingUsDownDiv">
//                     <div class="card">
//                             <img src="asssets/images/pics/politicsWeighingUsDown.jpeg" class="card-img-top PoliticsWeighingUsDownImage" alt="political issues: political matters weighing us down">
//                         <div class="card-body">

//                             <h3 class="card-title bigHeading">
//                                 <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${PoliticsWeighingUsDownData.article}</a>
//                             </h3>

//                             <strong>
//                             <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">By Author: ${PoliticsWeighingUsDownData.author}</h6>
//                             </strong>

//                             <p class="paraCardText">${PoliticsWeighingUsDownData.description}.adipisicing elit.ipsum dolor, sit amet consectetur consectetur.For sum dolor, sit amet consectetur.</p>
        
//                             <button  class="politicalButtonMain">
//                             <h3 class="politicalButton">POLITICAL</h3>
//                             </button>
                        
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </a>
//    `;
//    newsImage.setAttribute('src', PoliticsWeighingUsDownData.urlToImage); 

// }).catch(err => console.log (err));
// console.log(data);
// };
// getPoliticsWeighingUsDownInfo();

