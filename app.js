let hamburger = document.querySelector('.contain-hamburger');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let menu = document.querySelector('.menu');
let upBtn = document.querySelector('.up-btn');

hamburger.addEventListener('click', function(){
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
    menu.classList.toggle('active');
})

upBtn.addEventListener('click', function(){
    window.scrollTo(0, 0);
})

window.addEventListener('scroll', (e) => {  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        upBtn.style.display = "flex";
      } else {
        upBtn.style.display = "none";
      } 
})
