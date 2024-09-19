
  // Beispiel JSON-Daten
  const projects = [
    {
      title: "Weather App",
      description: "A simple weather app",
      image: "./images/weather-app.png",
      languages: ["html5", "css3-alt", "js-square"],
      repoLink: "https://github.com/Jan-Dev0/weather-app",
      previewLink: "https://jan-dev0.github.io/weather-app/",
    },
    {
      title: "To-Do List",
      description: "A simple To-Do List",
      image: "./images/to-do-list.png",
      languages: ["html5", "css3-alt", "js-square"],
      repoLink: "https://github.com/Jan-Dev0/to-do-list",
      previewLink: "https://jan-dev0.github.io/to-do-list/",
    },
    {
      title: "Time tracking dashboard",
      description: "",
      image: "./images/time-tracking-dashboard.png",
      languages: ["html5", "css3-alt", "js-square"],
      repoLink: "https://github.com/Jan-Dev0/14-time-tracking-dashboard",
      previewLink: "https://jan-dev0.github.io/14-time-tracking-dashboard/",
    },
    {
      title: "Newsletter sign-up form",
      description: "",
      image: "./images/newsletter-signup.png",
      languages: ["html5", "css3-alt", "js-square"],
      repoLink: "https://github.com/Jan-Dev0/13-newsletter-sign-up-form",
      previewLink: "https://jan-dev0.github.io/13-newsletter-sign-up-form/",
    },
    {
      title: "Workit landing page",
      description: "",
      image: "./images/workit-landing-page.png",
      languages: ["html5", "css3-alt", "js-square"],
      repoLink: "https://github.com/Jan-Dev0/12-workit-landing-page",
      previewLink: "https://jan-dev0.github.io/12-workit-landing-page/",
    },
    {
      title: "Results summary component",
      description: "",
      image: "./images/results-summary-component.png",
      languages: ["html5", "css3-alt", "js-square"],
      repoLink: "https://github.com/Jan-Dev0/11-results-summary-component",
      previewLink: "https://jan-dev0.github.io/11-results-summary-component/",
    },
  ];

 
  function createProjectCards(projects) {
    const grid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
      
      const card = document.createElement('div');
      card.className = 'project-tile';
      
      card.innerHTML = `
        <div class="card">
          <div class="card-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <div class="card-languages">
              ${project.languages.map(lang => `<i class="fab fa-${lang}" title="${lang}"></i>`).join('')}
            </div>
            <div class="card-links">
              <a href="${project.repoLink}" target="_blank" class="card-link card-link-left">Code</a>
              <a href="${project.previewLink}" target="_blank" class="card-link card-link-right">Preview</a>
            </div>
          </div>
        </div>
      `;
      
    
      grid.appendChild(card);
    });
  }

  
  createProjectCards(projects);


  const tabItems = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.tab-panel');

tabItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items and panels
    tabItems.forEach(item => item.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to the clicked item and the corresponding panel
    item.classList.add('active');
    const tabPanel = document.getElementById(item.dataset.tab);
    tabPanel.classList.add('active');
  });
});


