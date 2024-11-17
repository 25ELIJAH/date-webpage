document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('date-selection').style.display = 'block';
    document.body.style.background = 'linear-gradient(to bottom right, #ff0000, #000000, #ffff00)'; // Gradient for date selection
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('no-message').style.display = 'block';
});

function showCalendar(activity) {
    document.getElementById('date-selection').style.display = 'none';
    document.getElementById('calendar').style.display = 'block';
    console.log('Selected Activity: ' + activity); // You can use this for further processing
}

function confirmDate() {
    const selectedDate = document.getElementById('date-picker').value;
    if (selectedDate) {
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        alert('Please select a date.');
    }
}