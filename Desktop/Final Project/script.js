// Mobile Menu Toggle
function openMenu() {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--active');
}

function closeMenu() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal--active');
}

// Close menu when a link is clicked
document.querySelectorAll('.modal__link').forEach(link => {
    link.addEventListener('click', closeMenu);
});
