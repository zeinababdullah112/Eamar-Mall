// JavaScript file for Eamar Mall project

// Function to handle the mobile navigation menu toggle
function myFunction() {
    const topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}

// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic greeting based on time of day
const greetingElement = document.getElementById("color");
const currentHour = new Date().getHours();
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}

greetingElement.textContent = greetingMessage;

// Form submission alert
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        alert("Thank you for contacting us! We will get back to you soon.");
    });
}