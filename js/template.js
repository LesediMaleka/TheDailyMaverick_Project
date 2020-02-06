function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

  //this is the subscribe section
  const subscribebtn = document.querySelector('.subscribe');
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
 

  
  //this is the footer section
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
  
    
   
     