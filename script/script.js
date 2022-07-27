const menu = document.querySelector('.mobile-items');
const menuItems = document.querySelectorAll('.mitem');
const hamburger = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

function mobileMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', mobileMenu);

menuItems.forEach(
  (menuItem) => menuItem.addEventListener('click', mobileMenu),
);


