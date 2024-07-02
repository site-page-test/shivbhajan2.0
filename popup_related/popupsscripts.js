// Initialize EmailJS
emailjs.init('Fd7o0DbqfMhaIp4kw');

// Open and close popup functions
function openPopup(popupId) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById(popupId).style.display = 'none';
}

// Event listeners for opening popups
document.getElementById('requestSongLink').addEventListener('click', function() {
    openPopup('requestSongPopup');
});



document.getElementById('rateUsLink').addEventListener('click', function() {
    openPopup('rateUsPopup');
});

// Event listeners for closing popups
document.getElementById('closeRequestSong').addEventListener('click', function() {
    closePopup('requestSongPopup');
});

document.getElementById('closeRateUs').addEventListener('click', function() {
    closePopup('rateUsPopup');
});

// Form submission handling using EmailJS
document.getElementById('requestSongForm').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_s4nr7v9', 'template_xaw890d', this)
        .then(function(response) {
            alert('Request sent successfully!');
            closePopup('requestSongPopup');
        }, function(error) {
            alert('Failed to send request. Please try again.');
            console.log('Error:', error);
        });
});



document.getElementById('rateUsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_s4nr7v9', 'template_pha1dpa', this)
        .then(function(response) {
            alert('Rating submitted successfully!');
            closePopup('rateUsPopup');
        }, function(error) {
            alert('Failed to submit rating. Please try again.');
            console.log('Error:', error);
        });
});
