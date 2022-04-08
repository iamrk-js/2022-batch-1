const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');


const navbarHandler = (eve) => {
    console.log(eve.target)
    navbar.classList.toggle('show');
    eve.target.classList.toggle('fa-times');
    eve.target.classList.toggle('fa-bars');

}


mobileMenu.addEventListener('click', navbarHandler)