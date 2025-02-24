function showDetails(type) {
    const details = document.getElementById('details');
// Display a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to Haroon Flooring!");
};

    switch(type) {
        case 'wood':
            details.innerHTML = "<h2>Wood Flooring</h2><p>Our wood flooring is durable, stylish, and available in various finishes to match your interior decor.</p>";
            break;
        case 'tile':
            details.innerHTML = "<h2>Tile Flooring</h2><p>Choose from a variety of ceramic and porcelain tiles that are perfect for kitchens and bathrooms.</p>";
            break;
        case 'carpet':
            details.innerHTML = "<h2>Carpet Flooring</h2><p>Our soft, high-quality carpets come in various colors and patterns to suit your style and comfort needs.</p>";
            break;
        default:
            details.innerHTML = "<p>Click on the buttons to learn more about our flooring options!</p>";
    }
}
