const cartoonGallery = document.querySelector('.firstCartoon');

const addCartoon = (cartoons) => {

    let cartoonsImage = (cartoons.image);
    

    let html = 
    `
    <div class="card">
      <img src="${cartoonsImage}" class="card-img-top" alt="political issues: court case" >
        <div class="card-body">

          <br>

       
        <!--This is the name of the cartoonist  -->

          <strong>
            <h6 class="card-text ByAuthorText p-1">Cartoonist: ${cartoons.author}</h6>
          </strong>

       
      
        <!-- This the share icon: its an svg -->
          <div  class="share comment">
            <?xml version="1.0" encoding="UTF-8"?>
            <svg enable-background="new 0 0 426.667 426.667" version="1.1" viewBox="0 0 426.67 426.67" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
      
        
            <path d="m352 256c-23.983 0-45.13 11.569-58.801 29.201l-144.44-55.553c0.146-1.897 0.572-3.714 0.572-5.647 0-3.589-0.568-7.025-1.06-10.479l148.01-68.32c13.693 15.487 33.473 25.466 55.717 25.466 41.167 0 74.667-33.5 74.667-74.667s-33.5-74.667-74.667-74.667-74.666 33.499-74.666 74.666c0 3.589 0.568 7.025 1.06 10.479l-148.01 68.32c-13.693-15.487-33.473-25.466-55.717-25.466-41.167 0-74.667 33.5-74.667 74.667s33.5 74.667 74.667 74.667c23.983 0 45.13-11.569 58.801-29.201l144.44 55.553c-0.146 1.897-0.572 3.714-0.572 5.647 0 41.167 33.5 74.667 74.667 74.667s74.667-33.5 74.667-74.667c-1e-3 -41.166-33.501-74.666-74.668-74.666z"/>
            </svg>
           </div>
      
        <!-- This is the like icon: its an svg image -->
          <div class="thumbsUp comment">
            <?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg enable-background="new 0 0 456.814 456.814" version="1.1" viewBox="0 0 456.81 456.81" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            
            
            <path d="m441.11 252.68c10.468-11.99 15.704-26.169 15.704-42.54 0-14.846-5.432-27.692-16.259-38.547-10.849-10.854-23.695-16.278-38.541-16.278h-79.082c0.76-2.664 1.522-4.948 2.282-6.851 0.753-1.903 1.811-3.999 3.138-6.283 1.328-2.285 2.283-3.999 2.852-5.139 3.425-6.468 6.047-11.801 7.857-15.985 1.807-4.192 3.606-9.9 5.42-17.133 1.811-7.229 2.711-14.465 2.711-21.698 0-4.566-0.055-8.281-0.145-11.134-0.089-2.855-0.574-7.139-1.423-12.85-0.862-5.708-2.006-10.467-3.43-14.272-1.43-3.806-3.716-8.092-6.851-12.847-3.142-4.764-6.947-8.613-11.424-11.565-4.476-2.95-10.184-5.424-17.131-7.421-6.954-1.999-14.801-2.998-23.562-2.998-4.948 0-9.227 1.809-12.847 5.426-3.806 3.806-7.047 8.564-9.709 14.272-2.666 5.711-4.523 10.66-5.571 14.849-1.047 4.187-2.238 9.994-3.565 17.415-1.719 7.998-2.998 13.752-3.86 17.273-0.855 3.521-2.525 8.136-4.997 13.845-2.477 5.713-5.424 10.278-8.851 13.706-6.28 6.28-15.891 17.701-28.837 34.259-9.329 12.18-18.94 23.695-28.837 34.545-9.899 10.852-17.131 16.466-21.698 16.847-4.755 0.38-8.848 2.331-12.275 5.854-3.427 3.521-5.14 7.662-5.14 12.419v183.01c0 4.949 1.807 9.182 5.424 12.703 3.615 3.525 7.898 5.38 12.847 5.571 6.661 0.191 21.698 4.374 45.111 12.566 14.654 4.941 26.12 8.706 34.4 11.272 8.278 2.566 19.849 5.328 34.684 8.282 14.849 2.949 28.551 4.428 41.11 4.428h36.831c25.321-0.38 44.061-7.806 56.247-22.268 11.036-13.135 15.697-30.361 13.99-51.679 7.422-7.042 12.565-15.984 15.416-26.836 3.231-11.604 3.231-22.74 0-33.397 8.754-11.611 12.847-24.649 12.272-39.115 0.024-6.097-1.4-13.328-4.261-21.706z"/>
            <path d="m100.5 191.86h-82.224c-4.952 0-9.235 1.809-12.851 5.426-3.616 3.615-5.425 7.898-5.425 12.847v182.73c0 4.942 1.809 9.227 5.426 12.847 3.619 3.611 7.902 5.421 12.851 5.421h82.223c4.948 0 9.229-1.81 12.847-5.421 3.616-3.62 5.424-7.904 5.424-12.847v-182.73c0-4.949-1.809-9.231-5.424-12.847-3.617-3.618-7.898-5.426-12.847-5.426zm-32.835 177.44c-3.616 3.521-7.898 5.281-12.847 5.281-5.14 0-9.471-1.76-12.99-5.281-3.521-3.521-5.281-7.85-5.281-12.99 0-4.948 1.759-9.232 5.281-12.847 3.52-3.617 7.85-5.428 12.99-5.428 4.949 0 9.231 1.811 12.847 5.428 3.617 3.614 5.426 7.898 5.426 12.847 0 5.14-1.805 9.468-5.426 12.99z"/>
            </svg>
          </div>
        </div>
    </div>
  `;

  cartoonGallery.innerHTML += html;

}


// Database
db.collection('cartoons').get().then((snapshot) => {

    //do something when we have the data
    snapshot.docs.forEach (doc =>{
        addCartoon(doc.data());


    });
  
  }).catch(err => {
       console.log(err);
  });
  


// Second collection from the database: News----------------------

const NewsArticles = document.querySelector('.firstArticle');

const addArticle = (News) => {

    // let cartoonsImage = (News.image);
    

    let html = 
    ` 
    <div class="card mt-50">
      <img src="asssets/images/pics/WAYHOMEstudio1.webp" class="card-img-top" alt="political issues: voting with confidence">
        <div class="card-body">

          <br>

        <!-- This is the heading of the article -->

          <h3 class="card-title bigHeading">
            <a class="anchorTagHeading" href="#">${News.title}</a>
          </h3>
        <!-- This is the name of the author -->
          <strong>
            <h6 class="card-text ByAuthorText">By Author: ${News.author}</h6>
          </strong>
        
        <!-- This is description text of the article -->

          <p class="paraCardText" style="margin-left:10px;"> ${News.content}</p>

          <button  class="politicalButtonMain">
            <a href="Opinionista.html"><h3 class="politicalButton">OPINION</h3></a>
          </button>
      
        </div>
    </div>
  `;

  NewsArticles.innerHTML += html;

}


// Database
db.collection('News').get().then((snapshot) => {

    //do something when we have the data
    snapshot.docs.forEach (doc =>{
        addArticle(doc.data());

    });
  
  }).catch(err => {
       console.log(err);
  });
  


// The Third collection from the database: Opinionista------------

const opinionPieces = document.querySelector('.firstOpinion');

const addOpinion = (Opinionistas) => {

let time = (Opinionistas.created_at.toDate());
    

    let html = 
    `
    <div class="row no-gutters">
    <div class="col-md-4">
      <img src="asssets/images/pics/SpectralDesign1.jpg" class="card-img" alt="Managing Editor">
    </div>
    <div class="col-md-8 ">
      <div class="card-body">
         
     <!-- This is the heading of the opinion piece -->

        <h3 class="card-title bigHeading">
          <a class="anchorTagHeading" href="#">${Opinionistas.title}
          </a>
        </h3>
     
        <h5 class=" card-title smallHeading">
              <a class="writtenArticle ByAuthorText" href="#">${Opinionistas.author}</a>
        </h5>

     <!-- This is the content of the opinion piece -->

        <p class="card-text paraCardText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, vitae. Beatae dicta assumenda sit ipsam ducimus ab in, velit cumque. Enim recusandae deleniti optio quod eos, consequatur quos error neque.</p>

        <p class="quotes paraCardText">"Lorem ipsum dolor, sit amet consectetur."</p>

      <!-- This is the muted text on the opinion piece -->

        <p class="card-text paraCardText"><small class="text-muted">Last updated ${time}</small>
        </p>

      </div>
    </div>
  </div> `;

  opinionPieces.innerHTML += html;

}


// Database
db.collection('Opinionista').get().then((snapshot) => {

    //do something when we have the data
    snapshot.docs.forEach (doc =>{
        // console.log(doc.data());
        addOpinion(doc.data());

    });
  
  }).catch(err => {
       console.log(err);
  });
  
