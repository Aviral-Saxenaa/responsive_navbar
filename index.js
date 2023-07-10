
const mobilenavbtns=document.querySelector(".mobile-navbar-btn");
const activebtn=document.querySelector(".header");

function togglefunc(){
        activebtn.classList.toggle("active");
}

mobilenavbtns.addEventListener('click',togglefunc);