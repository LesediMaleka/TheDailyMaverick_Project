//API 
// Politics Weighing us down Article.The first big article on Political news
const articleContent = document.querySelector('.PoliticsWeighingUsDownDiv');
const newsImage = document.querySelector('#PoliticsWeighingUsDownImage');


    const getPoliticsWeighingUsDownInfo = async () => {
    //API endpoint
    const base = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=d56b510c5f7e4c78a8d27c5305f3248e';

    //? is to make a request/query.The knock-knock
    // const query = `?apiKey= ${key}`;
    const response = await fetch (base);

    const data = await response.json()


    .then(data => {
        PoliticsWeighingUsDownData = data;
        console.log(PoliticsWeighingUsDownData);

   articleContent.innerHTML = `
        
        <br>
                <a href="PoliticsWeighingUsDown.html">
                    <div class="row first">
                                
                        <div class="col PoliticsWeighingUsDownDiv">
                            <div class="card">
                            <img src="asssets/images/pics/politicsWeighingUsDown.jpeg" class="card-img-top PoliticsWeighingUsDownImage" alt="political issues: political matters weighing us down">
                                <div class="card-body">

                                    <h3 class="card-title bigHeading">
                                        <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${PoliticsWeighingUsDownData.articles[8].title}</a>
                                    </h3>

                                    <strong>
                                    <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">By Author: ${PoliticsWeighingUsDownData.articles[8].author}</h6>
                                    </strong>

                                    <p class="paraCardText">${PoliticsWeighingUsDownData.articles[8].description}</p>
                
                                    <button  class="politicalButtonMain">
                                    <h3 class="politicalButton">POLITICAL</h3>
                                    </button>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </a>
                <br><br><br><br><br><br>
   `;

   newsImage.setAttribute('src', PoliticsWeighingUsDownData.articles[8].urlToImage); 

}).catch(err => console.log (err));

};
getPoliticsWeighingUsDownInfo();

// this is the code that I typed before testing the for loop method
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

//First API endpoint
// Politics Weighing us down Article.The first big article on Political news
const PoliticsWeighingUsDownDiv = document.querySelector('.PoliticsWeighingUsDownDiv');

const newsImage = document.querySelector('#PoliticsWeighingUsDownImage');

const  UpcomingElectionsDiv = document.querySelector('#UpcomingElectionsDiv');

const UpcomingElectionsImage = document.querySelector('#UpcomingElectionsImage');



     // FIRST API endpoint
     const base = 'http://newsapi.org/v2/top-headlines?country=ie&apiKey=17d954474c1a4e40962725a293644143';

    const getNewsData = async () => {
  
    const response = await fetch (base);

    const data = await response.json();
 
     return data;
    };

    getNewsData()
    .then(data => {
        newsData = data;
        console.log(newsData);

        PoliticsWeighingUsDownDiv.innerHTML = `
        
                <a href="PoliticsWeighingUsDown.html">
                    <div class="row first">
                                
                        <div class="col PoliticsWeighingUsDownDiv">
                            <div class="card">
                            <img src="${newsData.articles[8].urlToImage}" class="card-img-top" alt="political issues:">
                                <div class="card-body">

                                    <h3 class="card-title bigHeading">
                                        <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${newsData.articles[8].title}</a>
                                    </h3>

                                    <strong>
                                    <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">  Author's Name  And Surname: ${newsData.articles[8].author}</h6>
                                    </strong>

                                    <p class="paraCardText">
                                    ${newsData.articles[5].content}

                                    <br><br>
                                    
                                    <button  class="politicalButtonMain">
                                    <h3 class="politicalButton">POLITICAL</h3>
                                    </button>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </a>
                
   `;

   UpcomingElectionsDiv.innerHTML = `
        
   <br>
        <a href="UpcomingElections.html">
            <div class="row first">
                        
                <div class="col PoliticsWeighingUsDownDiv" id="UpcomingElectionsImage">
                    <div class="card">
                    <img src="${ newsData.articles[5].urlToImage}" class="card-img-top id="UpcomingElectionsImage" >
                        <div class="card-body">

                            <h3 class="card-title bigHeading">
                                <a class="anchorTagHeading PoliticsWeighingUsDownHeading" href="#">${newsData.articles[5].title}</a>
                            </h3>

                            <strong>
                            <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">  Author's Name  And Surname: ${newsData.articles[5].author}</h6>
                            </strong>

                            <p class="paraCardText">${newsData.articles[5].content}
                            </p>
                        
                            
                            <button  class="politicalButtonMain">
                            <h3 class="politicalButton">POLITICAL</h3>
                            </button>
                        
                        </div>
                    </div>

                </div>
            </div>
        </a>
      
   `;


}).catch(err => console.log (err));


//First API endpoint for the main five articles
// Political Article.The first five  article on Political news

//1
const PeoplesViewDiv = document.querySelector('.PeoplesViewDiv');

//2
const UnionAsemblyDiv = document.querySelector('.UnionAsemblyDiv');

//3
const delegationsDiv = document.querySelector('.delegationsDiv');

//4
const mediaBriefDiv = document.querySelector('.mediaBriefDiv');

//5
const ElectionsDiv = document.querySelector('.ElectionsDiv');

//6  MinistersDiv
const MinistersDiv = document.querySelector('.MinistersDiv');

//7  PeoplesOpnionDiv
const PeoplesOpnionDiv = document.querySelector('.PeoplesOpnionDiv');

//6  StructuresDiv
const StructuresDiv = document.querySelector('.StructuresDiv');

     //API endpoint
     const baseMain = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=17d954474c1a4e40962725a293644143';

    const MainInfo = async () => {
  
    const responseMain = await fetch (baseMain);

    const data = await responseMain.json();
 
     return data;
    };

    MainInfo()
    .then(data => {
        MainData = data;
        console.log(MainData);

         /* this is the 1st of the small article of the political news */
   PeoplesViewDiv.innerHTML = `
            <a href="PeoplesViews.html">
                <div class="col newsColumn PeoplesViewDiv">
                  <div class="card">
                    <img src="${MainData.articles[0].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="PeoplesViewImage">
                    <div class="card-body">
                      <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[0].title}</h3> 
                      <p class="card-text paraCardText">
                      <strong class="card-text ByAuthorText">
                       Author's Name  And Surname:${MainData.articles[0].author}
                     </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                      <br>
                      <button  class="politicalButtonMain">
                        <h3 class="politicalButton">POLITICAL</h3>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </a>
   `;
    })
    MainInfo()
    .then(data => {
        MainData = data;
        console.log(MainData);

         /* this is the 2nd of the small article of the political news */
        UnionAsemblyDiv.innerHTML = `
              <a href="PeoplesViews.html">
                <div class="col newsColumn PeoplesViewDiv">
                  <div class="card">
                    <img src="${MainData.articles[1].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="PeoplesViewImage">
                    <div class="card-body">
                      <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[1].title}</h3> 
                      <p class="card-text paraCardText">
                      <strong class="card-text ByAuthorText">
                       Author's Name  And Surname:${MainData.articles[1].author}
                     </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                      <br>
                      <button  class="politicalButtonMain">
                        <h3 class="politicalButton">POLITICAL</h3>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </a>
   `;
     
})
MainInfo()
.then(data => {
    MainData = data;
    console.log(MainData);


     /* this is the 3rd of the small article of the political news */
    delegationsDiv.innerHTML = `
          <a href="PeoplesViews.html">
            <div class="col newsColumn  delegationsDiv">
              <div class="card">
                <img src="${MainData.articles[2].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="delegationsImage">
                <div class="card-body">
                  <h3 class="card-title SubheadingTextMoreNews delegationsHeading">${MainData.articles[2].title}</h3> 
                  <p class="card-text paraCardText">
                  <strong class="card-text ByAuthorText">
                   Author's Name  And Surname:${MainData.articles[2].author}
                 </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                  
                  <button  class="politicalButtonMain">
                    <h3 class="politicalButton">POLITICAL</h3>
                  </button>
                  
                </div>
              </div>
            </div>
          </a>
`;
})
MainInfo()
.then(data => {
    MainData = data;
    console.log(MainData);

     /* this is the 4th of the small article of the political news */
    mediaBriefDiv.innerHTML = `
          <a href="PeoplesViews.html">
            <div class="col newsColumn PeoplesViewDiv">
              <div class="card">
                <img src="${MainData.articles[3].urlToImage}" class="card-img-top" id="PeoplesViewImage">
                <div class="card-body">
                  <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[3].title}</h3> 
                  <p class="card-text paraCardText">
                 <strong class="card-text ByAuthorText">
                  Author's Name  And Surname:${MainData.articles[3].author}
                </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                  
                  <button  class="politicalButtonMain">
                    <h3 class="politicalButton">POLITICAL</h3>
                  </button>
                  
                </div>
              </div>
            </div>
          </a>
`;
})
MainInfo()
.then(data => {
    MainData = data;
    console.log(MainData);


     /* this is the 5th of the small article of the political news */
    ElectionsDiv.innerHTML = `
          <a href="PeoplesViews.html">
            <div class="col newsColumn PeoplesViewDiv">
              <div class="card">
                <img src="${MainData.articles[9].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="PeoplesViewImage">
                <div class="card-body">
                  <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[9].title}</h3> 
                  <p class="card-text paraCardText">
                 <strong class="card-text ByAuthorText">
                  Author's Name  And Surname:${MainData.articles[9].author}
                </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                  
                  <button  class="politicalButtonMain">
                    <h3 class="politicalButton">POLITICAL</h3>
                  </button>
                  
                </div>
              </div>
            </div>
          </a>
`;
})
MainInfo()
.then(data => {
    MainData = data;
    console.log(MainData);

     /* this is the 6th of the small article of the political news */
    MinistersDiv.innerHTML = `
          <a href="PeoplesViews.html">
            <div class="col newsColumn PeoplesViewDiv">
              <div class="card">
                <img src="${MainData.articles[5].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="PeoplesViewImage">
                <div class="card-body">
                  <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[5].title}</h3> 
                  <p class="card-text paraCardText">
                 <strong class="card-text ByAuthorText">
                  Author's Name  And Surname:${MainData.articles[5].author}
                </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                  
                  <button  class="politicalButtonMain">
                    <h3 class="politicalButton">POLITICAL</h3>
                  </button>
                  
                </div>
              </div>
            </div>
          </a>
`;
})
MainInfo()
.then(data => {
    MainData = data;
    console.log(MainData);

     /* this is the 7th of the small article of the political news */
    PeoplesOpnionDiv.innerHTML = `
          <a href="PeoplesViews.html">
            <div class="col newsColumn PeoplesViewDiv">
              <div class="card">
                <img src="${MainData.articles[4].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="PeoplesViewImage">
                <div class="card-body">
                  <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[4].title}</h3> 
                  <p class="card-text paraCardText">
                  <strong class="card-text ByAuthorText">
                   Author's Name  And Surname:${MainData.articles[4].author}
                 </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                  
                  <button  class="politicalButtonMain">
                    <h3 class="politicalButton">POLITICAL</h3>
                  </button>
                  
                </div>
              </div>
            </div>
          </a>
`;
})
MainInfo()
.then(data => {
    MainData = data;
    console.log(MainData);

     /* this is the 8th of the small article of the political news */
    StructuresDiv.innerHTML = `
          <a href="PeoplesViews.html">
            <div class="col newsColumn PeoplesViewDiv">
              <div class="card">
                <img src="${MainData.articles[7].urlToImage}" class="card-img-top" alt="political issues: People's view ,People's opinions" id="PeoplesViewImage">
                <div class="card-body">
                  <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading">${MainData.articles[7].title}</h3>

                  <p class="card-text paraCardText">
                 <strong class="card-text ByAuthorText">
                  Author's Name  And Surname:${MainData.articles[7].author}
                </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit.</p>
                
                  <button  class="politicalButtonMain">
                    <h3 class="politicalButton">POLITICAL</h3>
                  </button>
                  
                </div>
              </div>
            </div>
          </a>

          
`;

}).catch(err => console.log (err));
