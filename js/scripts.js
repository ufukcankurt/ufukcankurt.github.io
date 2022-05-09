window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Nav' Active
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section")

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);





//// Nav Active | Alternative
// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.links a');

// window.onscroll = () =>{

//     section.forEach(sec=>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('.links a[href*=' + id + ']').classList.add('active');
//             })
//         }

//     });

// };


// Mixitup | Galery
$(document).ready(function(){
    var mixer = mixitup(".box-list");
  })


// Experience Modal
  const btns = document.querySelectorAll("[data-target]");
  const close_btns = document.querySelectorAll(".experience-modal-close");
  const overlay = document.querySelector("#overlay");
  
  btns.forEach((btn)=>{
      btn.addEventListener("click", ()=> {
          document.querySelector(btn.dataset.target).classList.add("active");
          overlay.classList.add("active");
      })
  })
  
  
  
  close_btns.forEach((btn)=>{
      btn.addEventListener("click", ()=> {
          // document.querySelector(btn.dataset.target).classList.remove("active");
          btn.closest(".experience-modal").classList.remove("active");
          overlay.classList.remove("active");
      })
  })
  
  window.onclick = (e) => {
      if(e.target === overlay) {
          const modals = document.querySelectorAll(".experience-modal");
          modals.forEach((modal)=> modal.classList.remove("active"));
          overlay.classList.remove("active");
      }
  }

  function myFunction(x) {
    x.classList.toggle("change");
  }


  const menuIcon = document.querySelector(".menu-icon");
  const mobilMenu = document.querySelector("#mobil-menu");
  const body = document.querySelector("body");
  const mobileLinks = document.querySelector("#mobile-links-ul")


  menuIcon.addEventListener("click", function(){
    mobilMenu.classList.toggle("db-flex")
    body.classList.toggle("overflow-y-hidden");
  })

mobileLinks.addEventListener("click", function(){
    mobilMenu.classList.toggle("db-flex")
    myFunction(menuIcon);
    body.classList.toggle("overflow-y-hidden");
})



// window.addEventListener("resize", function() {
//     if (window.innerWidth < 500) resize.classList.remove("nav--is-open");
//   });