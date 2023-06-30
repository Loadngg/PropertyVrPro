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

// Animation
iOS = () => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) 
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return true
    else return false
}

let slider_ios_tooltip = document.getElementById("slider-360-ios-tooltip")
let slider_tooltip = document.getElementById("slider-360-tooltip")

iOS() ? slider_ios_tooltip.classList.remove("hidden") : slider_tooltip.classList.remove("hidden")

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemH = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemH / animStart;
            if (animItemH > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemH)) {
                animItem.classList.add('show');
            } else {
                animItem.classList.remove('show');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300) 
}