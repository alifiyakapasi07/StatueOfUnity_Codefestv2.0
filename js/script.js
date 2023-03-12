//If want to do slideshow in home

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }


const button = document.querySelector('#btn-burger');
const menu = document.querySelector('#mobile-menu');
const items = document.querySelectorAll('.mobile-items');

button.addEventListener('click', () => {
    menu.classList.toggle('mobile-hide');
});

items.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('mobile-hide');
    });
});