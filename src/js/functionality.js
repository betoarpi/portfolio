//Some Global selectors
const $loader = document.querySelector('.loader');

//Templates
function overlayTemplate(){
  return(
    `<div id="overlay" class="overlay">
      <div class="menu-container" id="menu-mobile-container">
        <div class="shape-container"><img src="src/img/organic-shape.svg" alt=""></div>
      </div>
      <a href="#" id="close"><i class="fas fa-times-circle"></i></a>
    </div>
    <!-- //overlay -->`
  )
}

function overlayModalTemplate(){
  return(
    `<div id="overlay" class="overlay">
      <a href="#" id="close"><i class="fas fa-times-circle"></i></a>
    </div>
    <!-- //overlay -->`
  )
}

function menuContainerTemplate(){
  return(
    `<nav class="menu-mobile main-navigation">
        <ul>
          <li class="who-am-i">
              <span class="name">Rob Arroyo</span>
              <span class="title"><i class="fas fa-terminal"></i> / UX_Designer / Frontend_Developer (master): $</span>
          </li>
          <li class="me"><a href="#"><i class="fas fa-robot"></i> me</a></li>
          <li class="experience"><a href="#"><i class="fas fa-rocket"></i> experience</a></li>
          <li class="portfolio"><a href="#"><i class="fas fa-images"></i> portfolio</a></li>
          <li class="contact"><a href="#"><i class="fas fa-satellite-dish"></i> contact</a></li>
        </ul>
        <a href="#" class="mobile-menu-trigger" id="mobile-menu-trigger"><i class="fas fa-bars"></i></a>
      </nav>
      <!-- //main navigation -->`
  )
}

//Print the overlay an menu templates and then bring it to the DOM
(function printOverlay() {
  const $body = document.getElementById('body');
  const HTMLString = overlayTemplate();
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  $body.insertBefore(html.body.children[0], $body.lastChild);
})();

(function printDesktopMenu() {
  const HTMLString = menuContainerTemplate();
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  
  const $containerCard = document.getElementById('container-card');
  $containerCard.insertBefore(html.body.children[0], $containerCard.childNodes[0]);
})();

(function printMobileMenu() {
  const HTMLString = menuContainerTemplate();
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  
  const $menuMobileContainer = document.getElementById('menu-mobile-container');
  $menuMobileContainer.insertBefore(html.body.children[0], $menuMobileContainer.childNodes[0]);
})();

//Mobile Menu Functionality
(function mobileMenu() {
  //Get DOM Elements
  const $menuContainer = document.getElementById('menu-mobile-container');
  const $menuTrigger = document.querySelector('#mobile-menu-trigger');
  const $overlay = document.getElementById('overlay');

  $menuTrigger.addEventListener("click", function(event) {
    event.preventDefault();
    //Set the new css classes
    $overlay.classList.add('active');
    $menuContainer.classList.add('active');
  });
  
  //Get DOM Element
  const $closeX = document.getElementById('close');
  $closeX.addEventListener("click", function(event) {
    event.preventDefault();
    //Set the new css classes
    $overlay.classList.remove('active');
    $menuContainer.classList.remove('active');
  })
})();

//Experience
(async function loadExperience(){
  async function getExperience(url){
    const response = await fetch(url)
    const data = await response.json()
    return data;
  }
  const experienceList = await getExperience('https://raw.githubusercontent.com/betoarpi/portfolio/master/js/experience.json?results=6');

  //Job items selector
  const $jobList = document.querySelector('.job-list');
  $jobList.removeChild($loader);

  //Template
  function jobItemTemplate(results){
    return(
      `<article class="job-item" id="${results.id}">
        <figure class="company-logo">
          <img src="${results.logo}" alt="${results.name} logo">
        </figure>
        <div class="job-information">
            <h3 class="job-name">${results.name}</h3>
            <h4 class="job-title">${results.position}</h4>
            <span class="job-location job-date-range">${results.location} | ${results.daterange}</span>
        </div>
      </article>`
    )
  }

  //Apply Template
  experienceList.results.forEach((results) => {
    const HTMLString = jobItemTemplate(results);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    $jobList.append(html.body.children[0]);
  });
})();

//Skills
(async function loadSkills(){
  async function getSkills(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data;
  }
  const skillListData = await getSkills('https://raw.githubusercontent.com/betoarpi/portfolio/master/js/skills.json?results=11');

  //Skill item selector
  const $skillList = document.querySelector('.skill-list');
  const $skillsLoader = document.querySelector('.skills-loader');
  $skillList.removeChild($skillsLoader);

  //Template
  function skillItemTemplate(results){
    return(
      `<div class="skill-item">
        <i class="${results.icon}"></i>
        <span class="skill-level"><span class="skill-bar" style="width: ${results.level}"></span></span>
        <p>${results.name}</p>
      </div>`
    )
  }

  //Apply Template
  skillListData.results.forEach((results) => {
    const HTMLString = skillItemTemplate(results);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    $skillList.append(html.body.children[0]);
  });
})();