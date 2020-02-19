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