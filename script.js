let sv_side1 = document.querySelector('#sv-side1');
let sv_side2 = document.querySelector('#sv-side2');

window.addEventListener('scroll',()=>{
    sv_side1.style.left = -window.pageYOffset+'px';
    sv_side2.style.left = window.pageYOffset+'px';
});