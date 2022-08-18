let hamburger = document.querySelector('.contain-hamburger');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
    menu.classList.toggle('active');
})