/*===============toggle icon navbar==================*/
let menuIcon = document.querySelector('#menu-icon');  
let navbar = document.querySelector('.navbar');  

menuIcon.onclick = () => {  
    menuIcon.classList.toggle('bx-x');  
    navbar.classList.toggle('active');  
};

/*===============scroll sections active link==================*/
let sections = document.querySelectorAll('section');  
let navLinks = document.querySelectorAll('header nav a');  

window.onscroll = () => {  
  sections.forEach(sec => {  
    let top = window.scrollY;  
    let offset = sec.offsetTop - 150;  
    let height = sec.offsetHeight;  
    let id = sec.getAttribute('id');  

    if (top >= offset && top < offset + height) {  
      navLinks.forEach(links => {  
        links.classList.remove('active');  
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  
      });  
    };
  });  
  /*===============sticky navbar==================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===============remove toggle icon navbar when click navbar link(scroll)==================*/
    menuIcon.classList.remove('bx-x');  
    navbar.classList.remove('active');
};

/*===============scroll reveal==================*/
ScrollReveal({   
    reset: true,   
    distance: '80px',   
    duration: 2000,   
    delay: 200   
});  
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

/*===============typed js==================*/
const typed = new Typed('.multiple-text', {  
    strings: ['Full Stack Developer','Machine Learning Enthusiast','IOT Developer'],  
    typeSpeed: 50,  
    backSpeed: 100,  
    backDelay: 1000,  
    loop: true,  
});

/*===============Tabbed Section Functionality==================*/
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

function openPopup(id) {
  document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}
