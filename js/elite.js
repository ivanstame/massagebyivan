var hamburgerMobile = document.getElementsByClassName("hamburger")[0],
    mainMenu = document.getElementsByClassName("main-menu")[0],
    body = document.getElementsByTagName("body")[0],
    iconWrapper = document.getElementsByClassName("icon")[0],
    bodyframe = document.getElementsByClassName("bodyframe")[0];

function slideBodyOver() {
    bodyframe.classList.toggle("slideBodyOver")
}

function slideMenuOver() {
    mainMenu.classList.toggle("slide-in")
}
iconWrapper.addEventListener("click", function() {
    iconWrapper.classList.toggle("shift"), slideMenuOver(), slideBodyOver(), body.classList.toggle("noScroll")
})


document.getElementById('locationsLink2').addEventListener('click', function(e) {
    e.preventDefault();
    var hbBeach = document.getElementById('hbBeach');
    var lagunaBeach = document.getElementById('lagunaBeach');

    // Toggle display
    hbBeach.style.display = hbBeach.style.display === 'block' ? 'none' : 'block';
    lagunaBeach.style.display = lagunaBeach.style.display === 'block' ? 'none' : 'block';

    // Toggle styling for the 'Locations' link
    this.style.fontWeight = this.style.fontWeight === 'bold' ? 'normal' : 'bold';
});


document.getElementById('locationsLink').addEventListener('click', function(e) {
    e.preventDefault();
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var sessionType = document.getElementById('sessionType').value;
    var dateRequested = document.getElementById('dateRequested').value;
    var timePreference = document.getElementById('timePreference').value;
    var email = document.getElementById('email').value;

    var message = `Hi Ivan, my name is ${name} and I am looking to book a massage for ${sessionType}. \n\nPreferred date: ${dateRequested} \nTime: ${timePreference} \n\nYou can also reach me at my email: ${email}.\n\nAdditional Notes:\n`;

    window.open(`sms:+16579448295;?&body=${encodeURIComponent(message)}`);
});

document.querySelector('.formCloseButton').addEventListener('click', function() {
    document.getElementById('bookingFormPopup').style.display = 'none';
});

