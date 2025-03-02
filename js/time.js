// script.js

// Function to format the date as "Wed, Jul 28, 2025"
function formatDate(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Get current date
const currentDate = new Date();

// Format the current date
const formattedDate = formatDate(currentDate);

// Update the HTML element with id="currentDate"
document.getElementById('currentDate').textContent = formattedDate;