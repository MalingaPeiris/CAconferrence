const bttButton = document.querySelector("#btt");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        bttButton.style.display = "flex";
    } else {
        bttButton.style.display = "none";
    }
}

bttButton.addEventListener("click", backTopTop);

function backTopTop() {
    window.scrollTo(0, 0);
}