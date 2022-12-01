const FirstImage = document.getElementById("firstImg");
const showpwdBtn = document.querySelector('.show-password');
const inputPwd = document.getElementById('password');
let current = FirstImage;
let previous = undefined;
setInterval(() => { 
    current.classList.remove('active'); 
    current = (current.nextElementSibling == null)?FirstImage:current.nextElementSibling;
    current.classList.add('active'); 

}, 10000);

showpwdBtn.addEventListener('click',(e)=>{
    showpwdBtn.innerText=(inputPwd.type =='password')?'Dissimuler':'Afficher';
    inputPwd.type=(inputPwd.type =='password')?'text':'password';
});

showpwdBtn.addEventListener