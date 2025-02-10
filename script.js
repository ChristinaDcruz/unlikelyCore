document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', function() {
        searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close the search bar if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!searchIcon.contains(event.target) && !searchBar.contains(event.target)) {
            searchBar.style.display = 'none';
        }
    });

    // Example function to update cart count
    function updateCartCount(count) {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = count;
    }

    // Example usage: Update cart count when an item is added
    // updateCartCount(1);
});
