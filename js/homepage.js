function openNav() {
  document.getElementById("myNav").style.left = "0";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.left = "-100vw";
}

//   //this is the subscribe section
// const subscribebtn = document.querySelector('.ButtonSubscribe');
// const wrapper = document.querySelector('.popupWrapper')
// const close = document.querySelector('.close');
// const signmeup = document.querySelector('#signmeup');
// const privacy = document.querySelector('#Privacy');



//  subscribebtn.addEventListener('click', () =>{
//      wrapper.style.display = 'block'

//  });    
 
//  close.addEventListener('click', () =>{
//   wrapper.style.display = 'none'
//  });

//  const pW = document.querySelector('.popupWrapper');

//  pW.addEventListener('click',  e=>{
    
//     if(e.target.className === 'popupWrapper'){
//         wrapper.style.display = 'none';
//     }

//    });


// signmeup.addEventListener('click', () =>{
//     window.open('https://www.dailymaverick.co.za/about/newsletter/')
// });
// privacy.addEventListener('click', () =>{
//     window.open('https://www.dailymaverick.co.za/privacy-policy/')

// });







const tdHongKong = document.querySelector('.HongKong');
const tdHongKongs = document.querySelector('.HongKongs');
const tdDenmark = document.querySelector('.Denmark');
const tdDenmarks = document.querySelector('.Denmarks');
const tdLatvia = document.querySelector('.Latvia');
const tdLatvias = document.querySelector('.Latvias');
const tdHungary = document.querySelector('.Hungary');
const tdHungarys = document.querySelector('.Hungarys');
const tdAustralia = document.querySelector('.Australia');
const tdAustralias = document.querySelector('.Australias');

const base='https://api.exchangeratesapi.io/2010-01-12';

const get = async()=>{

     const response = await fetch(base)
     const data = await response.json();
    return data;

    
};


get()
.then(data=>{
   HongKong = data;
    // console.log( HongKong);

    tdHongKong.innerHTML=`<tr><td class="HongKong">${data.rates.HKD}</td></tr>`; 
    tdHongKongs.innerHTML=`<tr><td class="HongKongs">${data.date}</td></tr>`;
    tdLatvia.innerHTML=`<tr><td class="Latvias">${data.rates.LVL}</td> </tr> `; 
    tdLatvias.innerHTML=`<tr><td class="Latvias">${data.date}</td></tr>`;
    tdDenmark.innerHTML=`<tr><td class="Denmark">${data.rates.DKK}</td></tr>`; 
    tdDenmarks.innerHTML=`<tr><td class="Denmarks">${data.date}</td></tr>`; 
    tdHungary.innerHTML=`<tr><td class="Hungary">${data.rates.HUF}</td></tr>`; 
    tdHungarys.innerHTML=`<tr><td class="Hungarys">${data.date}</td></tr>`; 
    tdAustralia.innerHTML=`<tr><td class="Australia">${data.rates.AUD}</td></tr>`; 
    tdAustralias.innerHTML=`<tr><td class="Australias">${data.date}</td></tr>`;
   
    })



.catch(err=>console.log(err));

 

 