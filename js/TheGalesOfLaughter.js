
 function openNav() {
     document.getElementById("myNav").style.left = "0";
   }
  
    // Close when someone clicks on the "x" symbol inside the overlay */
   function closeNav() {
     document.getElementById("myNav").style.left = "-100vw";
   }

 const subscribeButton = document.querySelector('.subscribeButton');
 const wrapper = document.querySelector('.popupWrapper');
 const close = document.querySelector('.close');
 const signmeup = document.querySelector('#signmeup');
 const privacy = document.querySelector('#Privacy');

 subscribeButton.addEventListener('click', () =>{
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
 



//  API on the opinionista pages

// const articleContent = document.querySelector('');

// const  = document.querySelector('');


// // API

// const base = '';

//  const getJokes = async () =>{

  

//   //  const query = `?apikey=${key}`;
//     // ? is the request. this is the knock on the door

//      const response = await fetch(base);

//      const data = await response.json();
//      return data;
//  };
//  getJokes()
//  .then(data => console.log(data))
//  .catch(data => console.log(data));












    //  then(data =>{
    //     writtenArticleData = data;
    //       console.log(writtenArticleData)
        
    
//      articleContent.innerHTML =`<h5 class=" card-title smallHeading">
// //     <a class="writtenArticle ByAuthorText" href="#">${quotesData.origin}</a>
// //     </h5>`;

//              //  quotes.setAttribute('src', quotesData.url);

//           }).catch(err => console.log(err));
   

// };
//  getAstronomy();

  
 
   
