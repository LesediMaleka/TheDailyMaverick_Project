// This is the JS for the Gales of Laughter Page---------------------------------------------------->
 function openNav() {
     document.getElementById("myNav").style.left = "0";
   }
  
    // Close when someone clicks on the "x" symbol inside the overlay */
   function closeNav() {
     document.getElementById("myNav").style.left = "-100vw";
   }


// This is the Js for the subscribe Button and the reason why its styled here individually its because out pages are not the same length----------------------------------------------------->

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
 

// This is the JS for the NASA NEWS  Page-------------------------------------------------------------->

//  NASA page: Picture of the day API: APOD Astronomy Picture of the Day--------------------------------->

  // variables
  const Astronomy = document.querySelector('.Astronomy');

  const nasaImage = document.querySelector('#image');
  
// API

  const base = ' https://api.nasa.gov/planetary/apod?api_key=aBJw6RPM6o2iG1doFbUgoDHtkISY4fdL7WJRJMVh';
  
  const getNasaPic = async () =>{
  
      const response = await fetch(base);
  
      const data = await response.json();
      return data;
  };

  getNasaPic()
  .then(data => {
    NasaData = data;
    console.log(NasaData);
  
    Astronomy.innerHTML = `<div class="card mb-3 first Astronomy" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img id="image" src="${NasaData.url}"  class="card-img" alt="Managing Editor">
      </div>
      <div class="col-md-8 ">
        <div class="card-body">
           
       <!-- This is the heading of the opinion piece -->

          <h3 class="card-title bigHeading">
            <a class="anchorTagHeading" href="#">
             ${NasaData.title}
            </a>
          </h3>
       
          <h5 class=" card-title smallHeading">
                <a class="writtenArticle ByAuthorText" href="#">${NasaData.copyright}</a>
          </h5>

       <!-- This is the content of the opinion piece -->

          <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta assumenda.</p>


        <!-- This is the muted text on the opinion piece -->

          <p class="card-text paraCardText"><small class="text-muted">Last updated  ${NasaData.date} </small>
          </p>

        </div>
      </div>
    </div>
  </div>`;

  }).catch(err => console.log(err));
      
    
// This is the second API endpoint thats used in the Nasa Page-------------------------------------------------->

//  NASA page: Mars Rover Photos: Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars----------------------------------------------->

// Variables
const MarsRover = document.querySelector('.MarsRover');

const PlutoRover = document.querySelector('.PlutoRover');


const marsImage = document.querySelector('#marsImage');

const plutoImage = document.querySelector('#plutoImage');


// API

const baseMars = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=VXGb3OXUW8a5rwB1uN2HwJFBesWqe4rKR2z3qHRw';


const getMarsPic = async () =>{

    const responseMars = await fetch(baseMars);

    const data = await responseMars.json();
    return data;

  };
  getMarsPic()
  .then(data => {
    MarsData = data;
    console.log(MarsData);
  
  
    MarsRover.innerHTML = ` <div class="card mb-3 first MarsRover" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img id="marsImage" src="${MarsData.photos[1].img_src}" class="card-img" alt="Managing Director">
      </div>
      <div class="col-md-8">
        <div class="card-body">
           
        <!-- This is the heading of the photo -->
  
          <h3 class="card-title bigHeading">
            <a class="anchorTagHeading" href="#">${MarsData.photos[0].camera.full_name}</a>
          </h3>
  
         <h5 class="card-title smallHeading">
                <a class="ByAuthorText" href="#">${MarsData.photos[0].camera.name}</a>
          </h5>
  
        <!-- This is the content on the article -->
  
          <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta assumenda sit ipsam ducimus ab in, velit 
          </p>
  
        <!-- This is the muted text on the article -->
  
          <p class="card-text paraCardText"><small class="text-muted">Last updated ${MarsData.photos[0].earth_date}</small></p>
  
        </div>
      </div>
    </div>
  </div>`;
 })
getMarsPic()
.then(data => {
  MarsData = data;
  console.log(MarsData);

// This is applied on the third article------------------------------------------------------>

  PlutoRover.innerHTML = ` <div class="card mb-3 first PlutoRover " style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img id="plutoImage" src="${MarsData.photos[0].img_src}" class="card-img" alt="Managing Director">
    </div>
    <div class="col-md-8">
      <div class="card-body">
         
      <!-- This is the heading of the photo -->

        <h3 class="card-title bigHeading">
          <a class="anchorTagHeading" href="#">${MarsData.photos[0].rover.cameras[1].full_name}</a>
        </h3>

       <h5 class="card-title smallHeading">
              <a class="ByAuthorText" href="#">${MarsData.photos[0].rover.cameras[1].name}</a>
        </h5>

      <!-- This is the content on the article -->

        <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta 
        </p>

      <!-- This is the muted text on the article -->

        <p class="card-text paraCardText"><small class="text-muted">Last updated on ${MarsData.photos[0].earth_date}</small></p>

      </div>
    </div>
  </div>
</div>`;

}).catch(err => console.log(err));  
      
  
 //  NASA page API ENDPOINT :EPIC: Earth Polychromatic Imaging Camera----------------------------------->
// Variables

 const Spaceships = document.querySelector('.Spaceships');

 const Moon = document.querySelector('.Moon');


 const spaceImages = document.querySelector('#spaceImages');

 const MoonImage = document.querySelector('.MoonImage');
 
 // API

 const baseSpace = ' https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=O04avwdZKQsOpIvoZFT2gJsaVEIJHN1Pf8sjvoHv ';
 

 const getSpacePic = async () =>{
 
     const responseSpace = await fetch(baseSpace);
 
     const data = await responseSpace.json();
     return data;
 };
 getSpacePic()
 .then(data => {
   SpaceData = data;
   console.log(SpaceData);
 

   Spaceships.innerHTML = `<div class="card mb-3 first Astronomy" style="max-width: 540px;">
   <div class="row no-gutters">
     <div class="col-md-4">
       <img id="image" src="${SpaceData.photos[0].img_src}"  class="card-img" alt="Managing Editor">
     </div>
     <div class="col-md-8 ">
       <div class="card-body">
          
      <!-- This is the heading of the opinion piece -->

         <h3 class="card-title bigHeading">
           <a class="anchorTagHeading" href="#">${SpaceData.photos[0].camera.full_name}
  
           </a>
         </h3>
      
         <h5 class=" card-title smallHeading">
               <a class="writtenArticle ByAuthorText" href="#">${SpaceData.photos[0].camera.name}</a>
         </h5>

      <!-- This is the content of the opinion piece -->

         <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta assumenda.</p>


       <!-- This is the muted text on the opinion piece -->

         <p class="card-text paraCardText"><small class="text-muted">Last updated ${SpaceData.photos[0].rover.launch_date}</small>
         </p>

       </div>
     </div>
   </div>
 </div>`;

 })

// The API is working on the last article-----------------------------> 
 getSpacePic()
 .then(data => {
   SpaceData = data;
   console.log(SpaceData);
 

   Moon.innerHTML = `<div class="card mb-3 first Moon" style="max-width: 540px;">
   <div class="row no-gutters">
     <div class="col-md-4">
       <img id="Moonimage" src="${SpaceData.photos[24].img_src}"  class="card-img" alt="Managing Editor">
     </div>
     <div class="col-md-8 ">
       <div class="card-body">
          
      <!-- This is the heading of the opinion piece -->

         <h3 class="card-title bigHeading">
           <a class="anchorTagHeading" href="#">${SpaceData.photos[24].rover.name}
  
           </a>
         </h3>
      
         <h5 class=" card-title smallHeading">
               <a class="writtenArticle ByAuthorText" href="#">${SpaceData.photos[24].rover.cameras[1].name}</a>
         </h5>

      <!-- This is the content of the opinion piece -->

         <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta assumenda.</p>


       <!-- This is the muted text on the opinion piece -->

         <p class="card-text paraCardText"><small class="text-muted">Last updated ${SpaceData.photos[24].rover.landing_date}</small>
         </p>

       </div>
     </div>
   </div>
 </div>`;

 }).catch(err => console.log(err));
              



// // This is API applied on the third article
  
//  const PlutoRover = document.querySelector('.PlutoRover');
 
//  const plutoImage = document.querySelector('#plutoImage');


//  const basePluto = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY  ';
  

//   const getPlutoPic = async () =>{
  
  
//       const responsePluto = await fetch(basePluto);
  
//       const data = await responsePluto.json();
//       return data;
//   };
//   getPlutoPic()
//   .then(data => {
//     PlutoData = data;
//     console.log(PlutoData);


//     PlutoRover.innerHTML = ` <div class="card mb-3 first PlutoRover " style="max-width: 540px;">
//   <div class="row no-gutters">
//     <div class="col-md-4">
//       <img id="plutoImage" src="${PlutoData[1].image}" class="card-img" alt="Managing Director">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
         
//       <!-- This is the heading of the photo -->

//         <h3 class="card-title bigHeading">
//           <a class="anchorTagHeading" href="#">${PlutoData.photos[0].rover.cameras[1].full_name}</a>
//         </h3>

//        <h5 class="card-title smallHeading">
//               <a class="ByAuthorText" href="#">${PlutoData.photos[0].rover.cameras[1].name}</a>
//         </h5>

//       <!-- This is the content on the article -->

//         <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta 
//         </p>

//       <!-- This is the muted text on the article -->

//         <p class="card-text paraCardText"><small class="text-muted">Last updated on ${PlutoData.photos[0].earth_date}</small></p>

//       </div>
//     </div>
//   </div>
// </div>`;


// }).catch(err => console.log(err));  
      


