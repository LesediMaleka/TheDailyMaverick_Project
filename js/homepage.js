//  //this is the subscribe section
//  const ButtonSubscribe = document.querySelector('.ButtonSubscribe');
//  const wrapper = document.querySelector('.popupWrapper')
//  const close = document.querySelector('.close');
 
//  ButtonSubscribe.addEventListener('click', () =>{
//       wrapper.style.display = 'block'
 
//   });    
  
//   close.addEventListener('click', () =>{
//    wrapper.style.display = 'none'
//   });



// const articleContent = document.querySelector('#newsPod');
// const newsImage = document.querySelector('#image');

// // const key ='d9e5d4d2-bdf2-4355-bd0e-037fbbd7ff74';
// const getCatBreed = async()=>{
//     const base ='https://api.exchangeratesapi.io/la https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01';
//     // const query =`?apikey=${key}`;

//     const response = await fetch (base);

//     const data = await response.json().then(data=>{
//         catData  = data[0];
//            console.log(catData);
//         articleContent.innerHTML=`<p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${catData.origin}</p>
//              <h3 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;"> ${catData.rates}</h3>
//            <p class="mb-1">${catData.date}</p>`;
//            newsImage.setAttribute('src',catData.url);
      
//     }).catch(err=>console.log(err));
   
// }
// getCatBreed();

const tdHongKong = document.querySelector('.HongKong');
const tdDenmark = document.querySelector('.Denmark');
const tdLatvia = document.querySelector('.Latvia');
const tdHungary = document.querySelector('.Hungary');
const tdAustralia = document.querySelector('.Australia');

const base='https://api.exchangeratesapi.io/2010-01-12';

const get = async()=>{

     const response = await fetch(base)
     const data = await response.json();
    return data;

    
};


get()
.then(data=>{
   HongKong = data;
    console.log( HongKong);

    tdHongKong.innerHTML=`
  <tr>
    <td class="HongKong">${data.rates.HKD}</td>
    
   
  </tr>
    `; 
    
    
})
get()
.then(data=>{
  Latvia = data;
    console.log( Latvia);

    tdLatvia.innerHTML=`
  <tr>
    <td class="Canada">${data.rates.LVL}</td>
    
   
  </tr>
    `; 
    
    
})
get()
.then(data=>{
   Denmark = data;
    console.log( Denmark);

    tdDenmark.innerHTML=`
  <tr>
    <td class="Denmark">${data.rates.DKK}</td>
    
   
  </tr>
    `; 
})
get()
.then(data=>{
   Hungary = data;
    console.log( Hungary);

    tdHungary.innerHTML=`
  <tr>
    <td class="Hungary">${data.rates.HUF}</td>
    
   
  </tr>
    `; 
    
    
})
get()
.then(data=>{
   Australia = data;
    console.log( Australia);

    tdAustralia.innerHTML=`
  <tr>
    <td class="Australia">${data.rates.AUD}</td>
    
   
  </tr>
    `; 
})



.catch(err=>console.log(err));

    
// const articleContent = document.querySelector('.SocialMediaAffectsDiv');
// const newsImage = document.querySelector('#SocialMediaAffectsImage');



// const base='https://api.exchangeratesapi.io/2010-01-12';

// const get = async()=>{

//     const response = await fetch(base)
//     const data = await response.json();
//     return data;

    
// };


// get()
// .then(data=>{
//     SocialMediaAffectsData = data;
//     console.log( SocialMediaAffectsData);

//     articleContent.innerHTML=`  <div  class="row first">
          
//     <div class="col SocialMediaAffectsDiv">
//      <div class="card">
//        <img   src="asssets/images/pics/exchange.jpeg" class="card-img-top"  id="SocialMediaAffectsImage" height="200vh">
//        <div class="card-body">

//            <h3 class="card-title bigHeading">
//                <a class="anchorTagHeading" href="#">${SocialMediaAffectsData.rates.CAD}</a>
//            </h3>

//            <strong>
//              <h6 class="card-text ByAuthorText">DATE: ${SocialMediaAffectsData.date}</h6>
//            </strong>

//          <p class="paraCardText">  ${SocialMediaAffectsData.rates.ZAR}</p>
 
//            <button  class="politicalButtonMain">
//              <h3 class="politicalButton">POLITICAL</h3>
//            </button>
       
//       </div>
//      </div>

//     </div>
//  </div>`
// ;
// }).then(data=>{
//     SocialMediaAffectsData = data;
//     console.log( SocialMediaAffectsData);

//     articleContent.innerHTML=`  <div  class="row first">
          
//     <div class="col SocialMediaAffectsDiv">
//      <div class="card">
//        <img   src="asssets/images/pics/exchange.jpeg" class="card-img-top"  id="SocialMediaAffectsImage" height="200vh">
//        <div class="card-body">

//            <h3 class="card-title bigHeading">
//                <a class="anchorTagHeading" href="#">${SocialMediaAffectsData.rates.CAD}</a>
//            </h3>

//            <strong>
//              <h6 class="card-text ByAuthorText">DATE: ${SocialMediaAffectsData.date}</h6>
//            </strong>

//          <p class="paraCardText">  ${SocialMediaAffectsData.rates.ZAR}</p>
 
//            <button  class="politicalButtonMain">
//              <h3 class="politicalButton">POLITICAL</h3>
//            </button>
       
//       </div>
//      </div>

//     </div>
//  </div>`
// ;
// })
// .catch(err=>console.log(err));