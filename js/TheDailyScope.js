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
                            <img src="${newsData.articles[8].urlToImage}" class="card-img-top" alt="political issues:" style="height: 40.7vh;">
                                <div class="card-body">

                                    <h3 class="card-title bigHeading">
                                        <a class="anchorTagHeading PoliticsWeighingUsDownHeading MainAPIheading" href="#">${newsData.articles[8].title}</a>

                                       
                                    </h3>

                                    <strong>
                                    <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">  Author's Name  And Surname: ${newsData.articles[8].author}</h6>
                                    </strong>

                                    <p class="paraCardText MainAPItext">
                                   
                                    ${newsData.articles[8].content}

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
                    <img src="${newsData.articles[5].urlToImage}" class="card-img-top" style="height: 40.7vh;" id="UpcomingElectionsImage" >
                        <div class="card-body">

                            <h3 class="card-title bigHeading">
                                <a class="anchorTagHeading PoliticsWeighingUsDownHeading MainAPIheading" href="#">${newsData.articles[5].title}</a>
                               
                            </h3>

                            <strong>
                            <h6 class="card-text ByAuthorText PoliticsWeighingUsDownAuthour">  Author's Name  And Surname: ${newsData.articles[5].author}</h6>
                            </strong>

                            <p class="paraCardText MainAPItext">${newsData.articles[5].content}
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


//First API endpoint for the main five (8)articles
// Political Article.The first 8  article on Political news

//1

const APIdiv = document.querySelectorAll('.APIdiv');
const links = ['PeoplesViews.html', 'UnionAsembly.html', 'delegations.html', 'mediaBrief.html', 'Elections.html', 'Ministers.html', 'PeoplesOpnion.html', 'Structures.html'];
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

         
          for( i=0; i < 9 ; i++){

            if(!MainData.articles[i].description){
              MainData.articles[i].description = 'Lorem Ipsum dolor, sit amet consectetur adipisicing elit. Vero.Lorem ipsum dolor, sit..'
            }

            
            APIdiv[i].innerHTML = `
            <a href="${links[i]}">
                <div class="col newsColumn PeoplesViewDiv">
                  <div class="card">
                    <img src="${MainData.articles[i].urlToImage}" class="card-img-top" alt="Image is from ${MainData.articles[i].source}" id="PeoplesViewImage" style="height: 14.7vh;">
                    <div class="card-body">
                      <h3 class="card-title SubheadingTextMoreNews PeoplesViewHeading BigAPIheading">${MainData.articles[i].title}</h3> 
                      <p class="card-text paraCardText SmallTextAPI">
                      <strong class="card-text ByAuthorText SmallTextAPI">
                       ${MainData.articles[i].author}:
                     </strong>${MainData.articles[i].description}</p>
                      <div class="gradient"></div>
                      <button  class="politicalButtonMain">
                        <h3 class="politicalButton">POLITICAL</h3>
                      </button>
                      
                    </div>
                  </div>
                </div>
              </a>
            `;
            }

}).catch(err => console.log (err));



