// "Yes" button click event
document.getElementById('yes').addEventListener('click', function() {
    showPopup();
});

// "No" button hover event (move button)
function moveNoButton() {
    var noButton = document.getElementById('no');
    var randomX = Math.floor(Math.random() * 300);
    var randomY = Math.floor(Math.random() * 200);
    noButton.style.position = 'relative';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
