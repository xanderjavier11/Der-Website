
    ////////////////////////// toggle Icon Bar ///////////////////////////////////

    let menuIcon = document.querySelector('#menu-icon');
    let navbar =document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
        
    }

    ///////////////////////// scroll section active link ///////////////////////////////

    let sections = document.querySelectorAll('section');
    let navLinks = document. querySelectorAll('header nav a');

    window.onscroll = () =>{
        sections.forEach (sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    
                });
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

            };
        });


///////////////////////////Sticky Navbar //////////////////////////////////////
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY >100);

 

    ////////////////////////////////////// remove toggle icon and nav bar //////////////
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
};


// =======================================about me ======================================== //
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// =======================================about me ======================================== //

// ====================================== scroll reveal ===================================//
if (window.matchMedia("(min-width: 769px)").matches) {
ScrollReveal ({
    distance: '600px',
    duration: 2000, 
    delay: 200,
    reset: true,
});

ScrollReveal().reveal (' .home-header', {origin: 'top', });
ScrollReveal().reveal ('.home .home-img , .heading ', {origin: 'right'});

ScrollReveal().reveal ('.skills-container .skills-box', {origin: 'bottom', interval: 200, distance:'200px' });
ScrollReveal().reveal ('.home .home-text, .download-cv, .social-media', {origin: 'left'});

ScrollReveal().reveal (' .company-logo, .position-content', {origin: 'left'});
ScrollReveal().reveal (' .company-content, .position-logo', {origin: 'right'});

ScrollReveal().reveal (' .portfolio-header, .portfolio-content', {distance: '0px', });
ScrollReveal().reveal ('.btn-card', {distance:'100px', origin: 'bottom', interval: 200})
ScrollReveal().reveal ('.accomplishment-card h2, .ojt-card h2', {distance:'100px', origin: 'top'  })
};


// ======================================= typing ==========================================
var typed = new Typed(".auto-type", {
    strings: ["Information Technology Student", ],
    startDelay: 1000,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
 