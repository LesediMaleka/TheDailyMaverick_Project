const subscribe = document.querySelector('.subscribeButton');
const wrapper = document.querySelector('.popupWrapper');
const close = document.querySelector('.close');





subscribe.addEventListener('click', () =>{
    wrapper.style.display = 'block'

});   
close.addEventListener('click', () =>{
    wrapper.style.display = 'none'
   });
