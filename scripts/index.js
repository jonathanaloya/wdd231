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
// Function to filter courses
function filterCourses(category) {
    var courses = document.querySelectorAll('.courses button');
    courses.forEach(function(course) {
        if (category === 'All' || course.classList.contains(category.toLowerCase())) {
            course.style.display = 'block'; // Show courses that match the category
        } else {
            course.style.display = 'none'; // Hide courses that don't match the category
        }
    });
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterCourses(button.textContent);
        });
    });
});
// Function to calculate total credits
function calculateTotalCredits() {
    var courses = document.querySelectorAll('.courses button');
    var totalCredits = 0;
    
    courses.forEach(function(course) {
        // Assuming each course is worth 3 credits
        totalCredits += 2;
    });
    
    // Display the total credits
    var creditsElement = document.getElementById('totalCredits');
    if (creditsElement) {
        creditsElement.textContent = `Total Credits: ${totalCredits}`;
    }
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    calculateTotalCredits();
});
// Array of course objects
var coursesArray = [
    { code: 'CSE 110', category: 'CSE', credits: 2 },
    { code: 'WDD 130', category: 'WDD', credits: 2 },
    { code: 'CSE 111', category: 'CSE', credits: 2 },
    { code: 'WDD 131', category: 'WDD', credits: 2 },
    { code: 'CSE 210', category: 'CSE', credits: 2 },
    { code: 'WDD 231', category: 'WDD', credits: 2 },
    // ... add more courses as needed
];

// Function to render courses
function renderCourses() {
    var coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ''; // Clear existing courses
    
    coursesArray.forEach(function(course) {
        var courseButton = document.createElement('button');
        courseButton.textContent = course.code;
        courseButton.classList.add(course.category.toLowerCase());
        courseButton.onclick = function() {
            // Add any onclick functionality you need here
        };
        coursesContainer.appendChild(courseButton);
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
});
// Updated array of course objects with 'completed' property
var coursesArray = [
    { code: 'CSE 110', category: 'CSE', credits: 2, completed: true },
    { code: 'WDD 130', category: 'WDD', credits: 2, completed: true },
    { code: 'CSE 111', category: 'CSE', credits: 2, completed: true },
    { code: 'WDD 131', category: 'WDD', credits: 2, completed: true },
    { code: 'CSE 210', category: 'CSE', credits: 2, completed: true },
    { code: 'WDD 231', category: 'WDD', credits: 2, completed: false },
    // ... add more courses as needed
];

// Function to render courses
function renderCourses() {
    var coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ''; // Clear existing courses
    
    coursesArray.forEach(function(course) {
        var courseButton = document.createElement('button');
        courseButton.textContent = course.code;
        courseButton.classList.add(course.category.toLowerCase());
        if (course.completed) {
            courseButton.classList.add('completed'); // Add 'completed' class for styling
        }
        courseButton.onclick = function() {
            // Add any onclick functionality you need here
        };
        coursesContainer.appendChild(courseButton);
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
});

