// Sticky Nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.sticky-nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Search Functionality (Basic Example)
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search-container button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    // Perform search logic here (e.g., redirect to search results page)
    console.log('Searching for:', searchTerm);
});


// ... (previous JavaScript) ...

// Custom Cursor
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
    customCursor.classList.add('active'); // Show the cursor

    // Add animation class (optional)
    customCursor.classList.add('animate'); // Add animation

    // Remove animation class after a delay (optional)
    setTimeout(() => {
        customCursor.classList.remove('animate');
    }, 500); // Adjust delay as needed
});

// Hide the default cursor
document.body.style.cursor = 'none';

// Hide custom cursor on mouse leave (using CSS for better performance)

// ... (previous JavaScript) ...

// Custom Cursor Hover Effect
const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], .main-nav li a, .hero button'); // Select all interactive elements

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
    });
});

// ... (previous JavaScript) ...

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});
