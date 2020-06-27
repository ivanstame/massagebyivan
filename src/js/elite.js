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
});
