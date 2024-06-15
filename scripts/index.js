// Populate current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate last modified date
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;


function toggleNav() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul');
    hamburger.classList.toggle('active'); // Toggle 'active' class to transform hamburger to 'X'
    menu.classList.toggle('active'); // Toggle 'active' class to show/hide the menu
}

