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