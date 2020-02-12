 //this is the subscribe section
 const ButtonSubscribe = document.querySelector('.ButtonSubscribe');
 const wrapper = document.querySelector('.popupWrapper')
 const close = document.querySelector('.close');
 
 ButtonSubscribe.addEventListener('click', () =>{
      wrapper.style.display = 'block'
 
  });    
  
  close.addEventListener('click', () =>{
   wrapper.style.display = 'none'
  });