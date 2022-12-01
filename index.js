const FirstImage = document.getElementById("firstImg");
let current = FirstImage;
let previous = undefined;
setInterval(() => { 
    current.classList.remove('active'); 
    current = (current.nextElementSibling == null)?FirstImage:current.nextElementSibling;
    current.classList.add('active'); 

}, 10000);