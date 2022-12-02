const FirstImage = document.getElementById("firstImg");
const showpwdBtn = document.querySelector('.show-password');
const inputPwd = document.getElementById('password');
const inputs = document.querySelectorAll('.formControl input')
let current = FirstImage;
let previous = undefined;
setInterval(() => { 
    current.classList.remove('active'); 
    current = (current.nextElementSibling == null)?FirstImage:current.nextElementSibling;
    current.classList.add('active'); 

}, 10000);

showpwdBtn.addEventListener('click',(e)=>{
    showpwdBtn.innerText=(inputPwd.type =='password')?'Masquer':'Afficher';
    inputPwd.type=(inputPwd.type =='password')?'text':'password';
});


//inputs

inputs.forEach(element => {
    element.addEventListener('blur',(e)=>{
        e.currentTarget.placeholder = "";
        if(e.currentTarget.value == ""){
            e.currentTarget.parentElement.querySelector('.placeholder')
            .classList.remove("active");
        }
    })
});



inputs[0].addEventListener('focus', (e) => {
    e.currentTarget.placeholder = "blacklivemater237";
     if(e.currentTarget.value == ""){
        e.currentTarget.parentElement.querySelector('.placeholder')
        .classList.add("active");
    }
});

inputs[1].addEventListener('focus', (e) => {
    e.currentTarget.placeholder = "**************";
    if(e.currentTarget.value == ""){
        e.currentTarget.parentElement.querySelector('.placeholder')
        .classList.add("active");
    }
});

//---------------------------------------------------------------------