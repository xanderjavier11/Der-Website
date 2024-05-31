
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
    // Remove active-link class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove active-tab and fade-in classes from all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab", "fade-in");
    }

    // Add active-link class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add active-tab class to the corresponding tab content
    const activeTab = document.getElementById(tabname);
    activeTab.classList.add("active-tab");
    
    // Trigger reflow to restart the animation
    void activeTab.offsetWidth;

    // Add fade-in class to trigger the animation
    activeTab.classList.add("fade-in");
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

ScrollReveal().reveal('.active-tab', {
    duration: 1000, // Animation duration in milliseconds
    origin: 'bottom', // Animation starting point
    distance: '50px', // Distance the element moves during the animation
    reset: true // If true, the animation resets every time the element becomes visible
});

ScrollReveal().reveal (' .home-header', {origin: 'top', });
ScrollReveal().reveal ('.home .home-img , .heading ', {origin: 'right'});

ScrollReveal().reveal ('.skills-container .skills-box', {origin: 'bottom', interval: 200, distance:'200px' });
ScrollReveal().reveal ('.home .home-text, .download-cv, .social-media', {origin: 'left'});

ScrollReveal().reveal (' .company-logo, .position-content, .contact-btn' , {origin: 'left'});
ScrollReveal().reveal (' .company-content, .position-logo', {origin: 'right'});

ScrollReveal().reveal (' .portfolio-header, .portfolio-content', {distance: '0px', });
ScrollReveal().reveal ('.btn-card', {distance:'100px', origin: 'bottom', interval: 200})
ScrollReveal().reveal ('.ojt-cardd', {distance:'100px', origin: 'bottom', interval: 200})

ScrollReveal().reveal ('.accomplishment-card h2, .ojt-container h2', {distance:'100px', origin: 'top'  })
};


// ======================================= typing ==========================================

var typed = new Typed(".auto-type", {
    strings: ["Information Technology Student","Front End Developer","IT Support","Network Engineer" ],
    startDelay: 1000,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

  function submitForm() {
    var form = document.getElementById('contact-form');
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            alert('Message sent successfully.');
            // Reset the form after a brief delay (e.g., 1 second)
            setTimeout(function() {
                form.reset();
            }, 1000);
        } else {
            alert('Failed to send message. Please try again later.');
        }
    })
    .catch(function(error) {
        alert('An error occurred. Please try again later.');
    });
}



 