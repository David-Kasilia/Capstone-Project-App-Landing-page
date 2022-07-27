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

const desktopSpeakerTitle = [{
  title: 'Our Esteemed Clients Feedback',
  speakerImage1: '../images/speaker-1.png',
  speaker1: 'Dracula',
  profession1: 'Hotel Manager',
  review1: 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.',
  speakerImage2: '../images/speaker-2.png',
  speaker2: 'Ted Templeton',
  profession2: 'CEO Of Financial Company',
  review2: 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.',
  speakerImage3: '../images/speaker-3.png',
  speaker3: 'Gru',
  profession3: 'Entrepreneur',
  review3: 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.',
  speakerImage4: '../images/speaker-4.png',
  speaker4: 'Captain Erica',
  profession4: 'Cruise Manager',
  review4: 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.',
  speakerImage5: '../images/speaker-5.png',
  speaker5: 'Tina Templeton',
  profession5: 'Manager For Social Company',
  review5: 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.',
  speakerImage6: '../images/speaker-6.png',
  speaker6: 'Lucy Wilde',
  profession6: 'Entrepreneur',
  review6: 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.',
}];

const speakerContainerData = document.getElementById('speaker-container');

desktopSpeakerTitle.title = 'Our Esteemed Clients Feedback';
desktopSpeakerTitle.speakerImage1 = '../images/speaker-1.png';
desktopSpeakerTitle.speakerImage2 = '../images/speaker-2.png';
desktopSpeakerTitle.speakerImage3 = '../images/speaker-3.png';
desktopSpeakerTitle.speakerImage4 = '../images/speaker-4.png';
desktopSpeakerTitle.speakerImage5 = '../images/speaker-5.png';
desktopSpeakerTitle.speakerImage6 = '../images/speaker-6.png';
desktopSpeakerTitle.speaker1 = 'Dracula';
desktopSpeakerTitle.speaker2 = 'Ted Templeton';
desktopSpeakerTitle.speaker3 = 'Gru';
desktopSpeakerTitle.speaker4 = 'Captain Erica';
desktopSpeakerTitle.speaker5 = 'Tina Templeton';
desktopSpeakerTitle.speaker6 = 'Lucy Wilde';
desktopSpeakerTitle.profession1 = 'Hotel Manager';
desktopSpeakerTitle.profession2 = 'CEO Of Financial Company';
desktopSpeakerTitle.profession3 = 'Entrepreneur';
desktopSpeakerTitle.profession4 = 'Cruise Manager';
desktopSpeakerTitle.profession5 = 'Manager For Social Company';
desktopSpeakerTitle.profession6 = 'Entrepreneur';
desktopSpeakerTitle.review1 = 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.';
desktopSpeakerTitle.review2 = 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.';
desktopSpeakerTitle.review3 = 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.';
desktopSpeakerTitle.review4 = 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.';
desktopSpeakerTitle.review5 = 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.';
desktopSpeakerTitle.review6 = 'I really enjoy the services offered by Kasilia Creations, Especially the new application recently created.';

speakerContainerData.innerHTML = `<h2 class="clients">${desktopSpeakerTitle.title}</h2> <hr>
<img class="clients-image-1"src="${desktopSpeakerTitle.speakerImage1}">
<p class="clients-name-1">${desktopSpeakerTitle.speaker1}</p>
<p class="clients-pro-1">${desktopSpeakerTitle.profession1}</p>
<p class="clients-review-1">${desktopSpeakerTitle.review1}</p>
<img class="clients-image-2" src="${desktopSpeakerTitle.speakerImage2}">
<p class="clients-name-2">${desktopSpeakerTitle.speaker2}</p>
<p class="clients-pro-2">${desktopSpeakerTitle.profession2}</p>
<p class="clients-review-2">${desktopSpeakerTitle.review2}</p>

<div class="desktop-data">
<img class="clients-image-3" src="${desktopSpeakerTitle.speakerImage3}">
<p class="clients-name-3">${desktopSpeakerTitle.speaker3}</p>
<p class="clients-pro-3">${desktopSpeakerTitle.profession3}</p>
<p class="clients-review-3">${desktopSpeakerTitle.review3}</p>
<img class="clients-image-4" src="${desktopSpeakerTitle.speakerImage4}">
<p class="clients-name-4">${desktopSpeakerTitle.speaker4}</p>
<p class="clients-pro-4">${desktopSpeakerTitle.profession4}</p>
<p class="clients-review-4">${desktopSpeakerTitle.review4}</p>
<img class="clients-image-5" src="${desktopSpeakerTitle.speakerImage5}">
<p class="clients-name-5">${desktopSpeakerTitle.speaker5}</p>
<p class="clients-pro-5">${desktopSpeakerTitle.profession5}</p>
<p class="clients-review-5">${desktopSpeakerTitle.review5}</p>
<img class="clients-image-6" src="${desktopSpeakerTitle.speakerImage6}">
<p class="clients-name-6">${desktopSpeakerTitle.speaker6}</p>
<p class="clients-pro-6">${desktopSpeakerTitle.profession6}</p>
<p class="clients-review-6">${desktopSpeakerTitle.review6}</p>
<div>
`;

const moreContentData = document.getElementById('more-content');

moreContentData.innerHTML = `
<img class="clients-image-3" src="${desktopSpeakerTitle.speakerImage3}">
<p class="clients-name-3">${desktopSpeakerTitle.speaker3}</p>
<p class="clients-pro-3">${desktopSpeakerTitle.profession3}</p>
<p class="clients-review-3">${desktopSpeakerTitle.review3}</p>
<img class="clients-image-4" src="${desktopSpeakerTitle.speakerImage4}">
<p class="clients-name-4">${desktopSpeakerTitle.speaker4}</p>
<p class="clients-pro-4">${desktopSpeakerTitle.profession4}</p>
<p class="clients-review-4">${desktopSpeakerTitle.review4}</p>
<img class="clients-image-5" src="${desktopSpeakerTitle.speakerImage5}">
<p class="clients-name-5">${desktopSpeakerTitle.speaker5}</p>
<p class="clients-pro-5">${desktopSpeakerTitle.profession5}</p>
<p class="clients-review-5">${desktopSpeakerTitle.review5}</p>
<img class="clients-image-6" src="${desktopSpeakerTitle.speakerImage6}">
<p class="clients-name-6">${desktopSpeakerTitle.speaker6}</p>
<p class="clients-pro-6">${desktopSpeakerTitle.profession6}</p>
<p class="clients-review-6">${desktopSpeakerTitle.review6}</p>
<footer class="mobile-footer">
<img class="logo-5" src="./images/LOGO-removebg-preview.png" alt="Kasilia Creations Logo">
<p class="footer-text">2022 Kasilia Creations Capstone Project: Mobile Application Landing Page.</p>
</footer>
`;

function revealMoreContent() {
  const moreContent = document.getElementById('more-content');
  if (moreContent.style.display === 'none') {
    moreContent.style.display = 'block';
  } else {
    moreContent.style.display = 'none';
  }
}

revealMoreContent();
