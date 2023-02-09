document.addEventListener("DOMContentLoaded", function () {
    const elem = document.querySelector(".about-us");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionY = '0' + (1.7 * window.pageYOffset) + 'px';
    })
});