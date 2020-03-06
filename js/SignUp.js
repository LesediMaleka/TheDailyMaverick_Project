const form = document.querySelector('.SignUpForm');
const feedback = document.querySelector('.feedback');
const SignUpPage = document.querySelector('.SignUpPage');
const feedbacks = document.querySelector('.feedbacks');
const LogInForm = document.querySelector('.Login');
const LogInPage = document.querySelector('.LogInPage');
const resetForm = document.querySelector('.resetForm');
const feedbk = document.querySelector('.feedbk');
LogInPage.style.display="none";


const ResetPasswordPage = document.querySelector('.ResetPasswordPage');

ResetPasswordPage.style.display="none";
// SignUp
const LoginHereText = document.querySelector('.LoginHereText');

const ForgotPassword = document.querySelector('.ForgotPassword');

const LogoutBtn = document.querySelector('.LogOut');

const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
const cellphone = localStorage.getItem('cellphone');

let loggedIn = localStorage.getItem('loggedIn');
loggedIn = JSON.parse(loggedIn);


// if(!loggedIn){
//     feedback.textContent ="You are logged Out!";
    
// }else{
//     feedback.textContent ="You are logged in!";
// }



form.addEventListener('submit', e =>{

        e.preventDefault();

        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');
        let loggedIn = localStorage.getItem('loggedIn');
        loggedIn = JSON.parse(loggedIn);
       
        const newEmail = form.email.value;
     
        const newPassword = form.password.value;
        const msg = document.querySelector('.msg');

        if(!loggedIn && !email && !password){
        
            localStorage.setItem('password',newPassword);
            localStorage.setItem('email',newEmail);

            feedback.textContent ="You are now logged in!";

        }else if(email &&  newEmail === email && !loggedIn){

            feedback.textContent ="That email already exists!";  
            msg.textContent ="You are logged out!";  
        }
        // loggedIn.reset();
        document.querySelector(".SignUpForm").reset();
});

// Login page
LogInForm.addEventListener('submit', e => {
    e.preventDefault();

    const newEmail = LogInForm.email.value;
     
    const newPassword = LogInForm.psw.value;

    const msgs = document.querySelector('.msgs');
    // const msg = LogInForm.msgs.value;

    const password = localStorage.getItem('password');
    const email = localStorage.getItem('email');

    let loggedIn = localStorage.getItem('loggedIn');
    loggedIn = JSON.parse(loggedIn);

    if( newPassword === password && newEmail === email && !loggedIn){
        localStorage.setItem('loggedIn', 'true');
        feedbacks.textContent ="You are logged in!";  

    }else if (loggedIn){
        feedbacks.textContent ="You are already logged in!";  

    }else if (email === newEmail && newPassword !== password && !loggedIn){
        msgs.textContent ="Wrong password!";  

    }
    document.querySelector(".Login").reset();
});

// LogoutBtn.addEventListener('click', () =>{
//     localStorage.setItem('login','false');

//     feedback.textContent ="You are logged out!"; 
// })

LoginHereText.addEventListener('click', e=>{

    e.preventDefault();
    LogInPage.style.display = "block";
    SignUpPage.style.display = "none";
});

ForgotPassword.addEventListener('click', e=>{

    e.preventDefault();
    ResetPasswordPage.style.display = "block";
    SignUpPage.style.display = "none";
    LogInPage.style.display = "none";
});

// Reset page(Wow factor)
resetForm.addEventListener('submit', e => {
    e.preventDefault();

    const newEmail = resetForm.email.value;
     
    const newPassword = resetForm.psws.value;

    const msge = document.querySelector('.msge');
    // const msg = LogInForm.msgs.value;

    const password = localStorage.getItem('psws');
    const email = localStorage.getItem('email');

    let loggedIn = localStorage.getItem('loggedIn');
    loggedIn = JSON.parse(loggedIn);

    if( newPassword === password && newEmail === email && !loggedIn){
        localStorage.setItem('loggedIn', 'true');
        feedbk.textContent ="You are logged in!";  

    }else if (loggedIn){
        feedbk.textContent ="You are already logged in!";  

    }else if (email === newEmail && newPassword !== password && !loggedIn){
        msge.textContent ="Wrong password!";  

    }
    document.querySelector(".Login").reset();
});

// LogOut
function myFunction(){
    document.querySelector('.LogOut').style.color ="grey";
}

// Task 3 we did a bit but we failed to make buttons change since we havent used buttons
// Task 4

const articles = [
    {Headline: 'Petrol Prices', image:'construction-site-build-construction-work-159306.jpeg', alt: 'petrol' },
    {Headline: 'Corona virus', image:'car-refill-trasportation-gas-9796.jpg', alt:'corona'},
    {Headline: 'Eskom', image:'cable-current-danger-distribution-236089.jpg', alt:'eskom' },
  
];


const Images = document.querySelector('.images');
let savedSearch = localStorage.getItem('search');

articles.forEach (article => {
    articles.innerHTML +=

    `
    <a href="petrol.html">
  <div class="row first">
          
    <div class="col">
      <div class="card">
        <img src="${article.images}" class="card-img-top" alt="political issues:voting,vote of confidence">
      <div class="card-body">
        <h3 class="card-title bigHeading">
            <a class="anchorTagHeading" href="#">PETROL PRICES GOING UP</a>
        </h3>

        <p class="card-text paraCardText">
          <strong class="card-text ByAuthorText">
            Author's Name And Surname:
          </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero.</p>
        <button  class="politicalButtonMain">
          <h3 class="politicalButton">POLITICAL</h3>
        </button>
    

      </div>
      </div>

    </div>
</div>
</a>
    `
});


    //filter function the optimized code
    const filterImage = (search) =>{
        let divs =  Array.from(Images.children);
   
        divs.filter(card => !card.innerText.toLowerCase().includes(search)).forEach(div => {div.classList.add('filtered');});
   
        divs.filter(card => card.innerText.toLowerCase().includes(search)).forEach(div => {div.classList.remove('filtered');});
   
       };
   
       filterImage(savedSearch);
       if(savedSearch){searchForm.search.value = savedSearch};
       
   
       searchForm.addEventListener('keyup', e =>{
           e.preventDefault();
   
           const search =  searchForm.search.value.trim().toLowerCase(); 
       //  console.log(search); 
       // instead of console.log,we type 
       filterImage(search);
       localStorage.setItem('search', search);
   });