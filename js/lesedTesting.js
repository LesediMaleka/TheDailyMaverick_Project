function getInfo() {
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value

    // for loop
    for(i = 0; i < tplcoders.length; i++){
        if( username == tplcoders[i].username && password == tplcoders[i].password){
            console.log(username + "You are logged in!")
        }
        else if(username !== tplcoders[i].username && password !== tplcoders[i].password){
            console.log(username + "You are logged out!")
        } else(username == tplcoders[i].username && password !== tplcoders[i].password){
            console.log(username + "You password is wrong!")
        }
    }



// const searchForm = document.querySelector('form');
//     //filter function the optimized code
//     const filterImage = (search) =>{
//         let divs =  Array.from(ImageBox.children);
   
//         divs.filter(card => !card.innerText.toLowerCase().includes(search)).forEach(div => {div.classList.add('filtered');});
   
//         divs.filter(card => card.innerText.toLowerCase().includes(search)).forEach(div => {div.classList.remove('filtered');});
   
//        };
   
//        filterImage(savedSearch);
//        if(savedSearch){searchForm.search.value = savedSearch};
       
   
//        searchForm.addEventListener('keyup', e =>{
//            e.preventDefault();
   
//            const search =  searchForm.search.value.trim().toLowerCase(); 
//        //  console.log(search); 
//        // instead of console.log,we type 
//        filterImage(search);
//        localStorage.setItem('search', search);
//    });



//    const LogOut = document.querySelector('.LogOut');

// LogOut.addEventListener('click', e =>{
//     e.alert("You are not logged in!");
// });


//key up

// store data in a local storage
localStorage.setItem('lesedi@adadev.org.za','1234Shaun');
localStorage.setItem('tshepo@adadev.org.za','Mario1234');
localStorage.setItem('pamela.s@adadev.org.za','0000Luigi');


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/;

// stringifying and parsing data
// Modifying the pervious program to create a simple login system utilizing an array of user objects

const tplcoders = [
    {email: 'lesedi@adadev.org.za', password: '1234Shaun'},
    {email: 'tshepo@adadev.org.za', password: 'Mario1234'},
    {email: 'pamela.s@adadev.org.za', password: '0000Luigi'}
];

console.log(JSON.stringify(tplcoders));
localStorage.setItem('tplcoders', JSON.stringify(tplcoders));

// covert this back to an array
const stored = localStorage.getItem('tplcoders');
console.log(JSON.parse(stored));

form.addEventListener('submit', e => {

    e.preventDefault(); //prevent page from refreshing

const username = form.username.value;


if (pattern.test (username)){
    feedback.textContent = "This username is valid!";

}else{
    
    feedback.textContent = "This username is not valid!";
}

});

form.addEventListener('keyup', e => {

//console.log(form.username.value);
if (pattern.test(e.target.value)){
    form.username.setAttribute("class", "success");
}else {
    form.username.setAttribute("class", "error");
}
});