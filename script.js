document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const logo = document.getElementById('logo');

    searchIcon.addEventListener('click', function() {
        searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close the search bar if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!searchIcon.contains(event.target) && !searchBar.contains(event.target)) {
            searchBar.style.display = 'none';
        }
    });

    // Redirect to home page (hero section) when logo is clicked
    logo.addEventListener('click', function() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    // Example function to update cart count
    function updateCartCount(count) {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = count;
    }

    // Example usage: Update cart count when an item is added
    // updateCartCount(1);
});
