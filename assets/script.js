
    // document.addEventListener("DOMContentLoaded", function() {
    //     const navLinks = document.querySelectorAll('.nav-link');

    //     navLinks.forEach(link => {
    //         link.addEventListener('click', function(event) {
    //             navLinks.forEach(link => {
    //                 link.classList.remove('active');
    //             });
    //             this.classList.add('active');
    //         });
    //     });
    // });


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

// ====================================== scroll reveal ===================================//
ScrollReveal ({
    distance: '600px',
    duration: 2000,
    delay: 200,
    reset: true,
});

ScrollReveal().reveal (' .home-header', {origin: 'top', });
ScrollReveal().reveal ('.home .home-img , .heading ', {origin: 'right'});

ScrollReveal().reveal ('.skills-container .skills-box', {origin: 'bottom', interval: 100 });
ScrollReveal().reveal ('.home .home-text, .download-cv, .social-media', {origin: 'left'});


 