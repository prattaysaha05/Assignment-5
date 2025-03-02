function formatDate(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
const currentDate = new Date();
const formattedDate = formatDate(currentDate);
document.getElementById('currentDate').textContent = formattedDate;