const LogOut = document.querySelector('.LogOut');

LogOut.addEventListener('click', e =>{
    e.alert("You are not logged in!");
});


// stringifying and parsing data
const tplcoders = [
    {email: 'lesedi@adadev.org.za', password: 'Shaun'},
    {email: 'tshepo@adadev.org.za', password: 'Mario'},
    {email: 'pamela.s@adadev.org.za', password: 'Luigi'}
];

console.log(JSON.stringify(tplcoders));
localStorage.setItem('tplcoders', JSON.stringify(tplcoders));

// covert this back to an array
const stored = localStorage.getItem('tplcoders');
console.log(JSON.parse(stored));


    //filter function the optimized code
    const filterImage = (search) =>{
        let divs =  Array.from(ImageBox.children);
   
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
   