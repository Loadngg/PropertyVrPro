// Scroll Top on reload
window.onbeforeunload = () => window.scrollTo(0, 0);

// Sticky header
let header = document.getElementById('header');
let headerH = header.clientHeight;
let scrollOffset = window.scrollY;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.scrollY;

    checkPos(scrollOffset);
}

function checkPos(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Nav scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(event) {
        event.preventDefault();
        const yOffset = -80;
        const id = smoothLink.getAttribute('href');
        const element = document.querySelector(id)
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    })
}

// Nav
let navToggle = document.getElementById('nav_toggle');
let nav = document.getElementById('nav');
let navLinks = document.getElementsByClassName('nav__link');

navToggle.onclick = function (event) {
    event.preventDefault();

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        nav.classList.remove('active');
        header.classList.remove('active');
    } else {
        header.classList.add('active');
        this.classList.add('active');
        nav.classList.add('active');
    }   
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
        header.classList.remove('active');
    })
}