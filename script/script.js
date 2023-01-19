//Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar')

window.onscroll = function() {
    let top = window.scrollY;
    if (top >= 600) {
        header.classList.add('navbarDark')
    } else {
        header.classList.remove('navbarDark')
    }
}