function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

const subscribe = document.querySelector('.subscribeButton');
const wrapper = document.querySelector('.popupWrapper');
const close = document.querySelector('.close');


subscribe.addEventListener('click', () =>{
    wrapper.style.display = 'block'

});
close.addEventListener('click', () =>{
    wrapper.style.display = 'none'
   });

   signmeup.addEventListener('click', () =>{
    window.open('https://www.dailymaverick.co.za/about/newsletter/')
});
privacy.addEventListener('click', () =>{
    window.open('https://www.dailymaverick.co.za/privacy-policy/')

});




  
 
   
