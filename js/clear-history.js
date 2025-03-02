// Clear History button click event listener
document.getElementById('clear-history-button').addEventListener('click', function () {
    // Clear the history or any content
    let historyAdd = document.getElementById('historyAdd');
    historyAdd.innerHTML = ''; // Clear the content

    // Get all buttons with 'disable-button' class and enable them
    let disableButtons = document.querySelectorAll('.disable-button');
    disableButtons.forEach(function (button) {
        button.disabled = false; // Enable the button
    });
});
