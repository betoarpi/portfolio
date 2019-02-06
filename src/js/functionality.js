// DOM Elements
const $menuTrigger = document.getElementById('mobile-menu-trigger');
const $overlay = document.querySelector('.overlay');
const $closeX = document.getElementById('close');
const $menuContainer = document.getElementById('menu-mobile-container');

//Modal Functionality
$menuTrigger.addEventListener("click", function(event) {
  event.preventDefault();
  $overlay.classList.add('active');
  $menuContainer.classList.add('active');
})

$closeX.addEventListener("click", function(event) {
  event.preventDefault();
  $overlay.classList.remove('active');
  $menuContainer.classList.remove('active');
})