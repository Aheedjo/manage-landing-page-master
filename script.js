// SLider
const slider = document.querySelector(".testimonials_wrapper");
// form
const form = document.querySelector(".form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error_msg");
let isDown = false;
let startX;
let scrollLeft;
// mobile menu
const mobileMenu = document.querySelector(".mobile_menu_container");
const hamburger = document.getElementById("hamburger");

const mousedown = (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const mouseleave = () => {
    isDown = false;
}

const mouseup = () => {
    isDown = false;
}

const mousemove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
}

const showError = () => {
    if (email.validity.valueMissing) {
        errorMsg.textContent = "Empty";
    } else if (email.validity.typeMismatch) {
        errorMsg.textContent = "Please insert a valid email";
    }
}

const validateForm = (e) => {
    e.preventDefault()
    if (email.validity.valid) {
        errorMsg.textContent = ''
    } else {
        showError();
    }
}

const validateEmail = (e) => {
    if (!email.validity.valid) {
        e.preventDefault();
        showError();
    }
}

const toggleMenu = () => {
    mobileMenu.classList.toggle("show");
}


// slider events
slider.addEventListener("mousedown", mousedown)
slider.addEventListener("mouseleave", mouseleave)
slider.addEventListener("mouseup", mouseup)
slider.addEventListener("mousemove", mousemove)
    // form events
email.addEventListener("input", validateEmail)
form.addEventListener('submit', validateEmail);
// mobile menu events
hamburger.addEventListener("click", toggleMenu)