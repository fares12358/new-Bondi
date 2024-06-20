
let scrollUp = document.querySelector(".scroll_up");

window.addEventListener('scroll', function () {

    if (scrollY >= 800) {
        scrollUp.style.display = "flex";
    } else {
        scrollUp.style.display = "none";
    }
});

scrollUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
