// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Add this JavaScript to open and close the pop-up
function showCartPopup() {
    var cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = "block";
    setTimeout(closeCartPopup, 2000); // Close the popup after 2 seconds (adjust as needed)
}

function closeCartPopup() {
    var cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = "none";
}

// Attach an event listener to the "Add To Cart" button to show the popup
var addToCartButton = document.querySelector(".normal");
addToCartButton.addEventListener("click", showCartPopup);







