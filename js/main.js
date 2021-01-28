/* Hamburguer */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


/*Sticky*/

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});


// Submit button

function submit(){
    alert("FBI has been reported! Thanks for your collaboration");
}


console.log("¿QUE ESTAS BUSCANDO DAVID?")