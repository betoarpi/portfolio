//Some Global selectors
const $loader = document.querySelector('.loader');
const $overlay = document.getElementById('overlay');
const $modal = document.getElementById('modal');

//Templates
function overlayTemplate(){
  return(
    `<div id="overlay" class="overlay">
      <a href="#" id="close"><i class="fas fa-times-circle"></i></a>
    </div>
    <!-- //overlay -->`
  )
}

function menuContainerTemplate(){
  return(
    `<div class="menu-container" id="menu-mobile-container">
      <div class="shape-container"><img src="src/img/organic-shape.svg" alt=""></div>
    </div>`
  )
}

function menuTemplate(){
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

function modalTemplate(){
  return(
    `<div class="modal" id="modal"></div>`
  )
}

function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html.body.children[0];
}

//Print the overlay an menu templates and then bring it to the DOM
(function printOverlay() {
  const $body = document.getElementById('body');
  const HTMLString = overlayTemplate();
  const overlayElement = createTemplate(HTMLString);
  $body.insertBefore(overlayElement, $body.lastChild);
})();

(function printDesktopMenu() {
  const HTMLString = menuTemplate();
  const menuElement = createTemplate(HTMLString);
  const $containerCard = document.getElementById('container-card');
  $containerCard.insertBefore(menuElement, $containerCard.childNodes[0]);
})();

function printMenuContainer() {
  const HTMLString = menuContainerTemplate();
  const menuContainerElement = createTemplate(HTMLString);
  const $menuOverlay = document.getElementById('overlay');
  $menuOverlay.insertBefore(menuContainerElement, $menuOverlay.childNodes[0]);
}

(function printMobileMenu() {
  printMenuContainer();
  const HTMLString = menuTemplate();
  const mobileMenuElement = createTemplate(HTMLString);
  const $menuMobileContainer = document.getElementById('menu-mobile-container');
  $menuMobileContainer.insertBefore(mobileMenuElement, $menuMobileContainer.childNodes[0]);
})();

//Mobile Menu Functionality
(function mobileMenu() {
  //Get DOM Elements
  const $menuContainer = document.getElementById('menu-mobile-container');
  const $menuTrigger = document.querySelector('#mobile-menu-trigger');
  const $overlay = document.getElementById('overlay')

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
  if ($jobList) {
    if ($loader) {
      $jobList.removeChild($loader);
    } 
  }

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
  if ($jobList) {
    experienceList.results.forEach((results) => {
      const HTMLString = jobItemTemplate(results);
      const experienceElement = createTemplate(HTMLString);
      $jobList.append(experienceElement);
    });
  }
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
  if ($skillList) {
    if ($skillsLoader) {
      $skillList.removeChild($skillsLoader);
    }
  }  

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
    const skillsElement = createTemplate(HTMLString);
    if ($skillList) {
      $skillList.append(skillsElement);
    }
  });
})();



//Show Modal
function showModal($element){
  $modal.classList.add('active');
}

//Projects Modal
/* function portfolioModal(){
  const $portfolioModal = document.getElementById('modal');
  $portfolioModal.classList.add('portfolio-modal');

  const $overlay = document.getElementById('overlay');
  
} */

//Render Portfolio
(async function loadPortfolioData(){
  async function getPortfolio(url){
    const response = await fetch(url)
    const data = await response.json()
    return data;
  }
  const portfoliotData = await getPortfolio('https://raw.githubusercontent.com/betoarpi/portfolio/master/js/portfolio.json?results=6');

  const $portfolioList = document.querySelector('.portfolio-list');
  
  function portfolioItemTemplate(results){
    return(
      `<a href="#" class="portfolio-item" data-id="${results.id}">
        <figure class="item-thumbnail">
          <img src="img/portfolio_save-tigers-now.jpg" alt="Project Name">
          <mark class="caption">Save the Tigers Now</mark>
        </figure>
        <span class="portfolio-link"></span>
      </a>`
    )
  }
  
  function portfolioModalTemplate(results){
    return(
      `<figure class="featured">
        <img src="img/portfolio_save-tigers-now.jpg" alt="Save The Tigers">
      </figure>
      <div class="project-info">
        <h2 class="project-name">Project Name here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis consequatur hic nemo magni! Vitae aliquid perspiciatis ipsam recusandae, minima eius magni illum esse saepe iusto optio doloremque dicta veniam?</p>
        <ul class="technology-list">
        </ul>
        <a href="#" target="_blank" class="button">View Project <i class="fas fa-external-link-square-alt"></i></a>
      </div>`
    )
  }
  
  function technologyItemTemplate(results){
    return(
      `<li><i class="fab fa-html5"></i> <span>Technology</span></li>`
    )
  }
  
  //Remove Loader
  if ($portfolioList) {
    if ($loader) {
      $portfolioList.removeChild($loader);
    }
  }

  //Apply Template
  portfoliotData.results.forEach((results) => {
    const HTMLString = portfolioItemTemplate(results);
    const portfolioElement = createTemplate(HTMLString);
    $portfolioList.append(portfolioElement);
  });
  
})();