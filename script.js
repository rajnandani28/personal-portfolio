const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"),
    navItem = document.querySelectorAll(".nav_item"),
    header = document.getElementById("header");

// open and close menu

navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav_menu--open");

    changeIcon();

});

// close the menu when the user clicks the nav links

navItem.forEach((item) => {

    item.addEventListener("click", () => {

        if (navMenu.classList.contains("nav_menu--open")) {

            navMenu.classList.remove("nav_menu--open");

        }

        changeIcon();

    });

});

// Change nav toggle icon

function changeIcon() {

    if (navMenu.classList.contains("nav_menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

//ScrollReveal animations

const sr = ScrollReveal({

    duration: 2000,

    distance: "100px",

    delay: 400,

    reset: false,

});

sr.reveal(".hero_content, .about_content");

sr.reveal(".hero_img", { origin: "top" });

sr.reveal(".hero_info-wrapper, skills_title, .skills_content, .qualification_name, .qualification_item, .service_card, .project_content, .testimonial_wrapper, .footer_content", { delay: 500, interval: 100,1});

sr.reveal(".qualification_footer-text, .contact_content", { origin: "left", });



sr.reveal(".qualification_footer .btn, .contact_btn", { origin: "right" });