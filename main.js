// Beispiel JSON-Daten
const projects = [
  {
    title: "Lern Tracker",
    description: "",
    image: "./images/lern-tracker.png",
    languages: ["html", "css", "javascript"],
    repoLink: "https://github.com/Jan-Dev0/lern-tracker",
    previewLink: "https://jan-dev0.github.io/lern-tracker/",
  },
  {
    title: "Weather App",
    description: "",
    image: "./images/weather-app.png",
    languages: ["html", "css", "javascript"],
    repoLink: "https://github.com/Jan-Dev0/weather-app",
    previewLink: "https://jan-dev0.github.io/weather-app/",
  },
  {
    title: "To-Do List",
    description: "",
    image: "./images/to-do-list.png",
    languages: ["html", "css", "javascript"],
    repoLink: "https://github.com/Jan-Dev0/to-do-list",
    previewLink: "https://jan-dev0.github.io/to-do-list/",
  },
  {
    title: "Time tracking dashboard",
    description: "",
    image: "./images/time-tracking-dashboard.png",
    languages: ["html", "css", "javascript"],
    repoLink: "https://github.com/Jan-Dev0/14-time-tracking-dashboard",
    previewLink: "https://jan-dev0.github.io/14-time-tracking-dashboard/",
  },
  {
    title: "Newsletter sign-up form",
    description: "",
    image: "./images/newsletter-signup.png",
    languages: ["html", "css", "javascript"],
    repoLink: "https://github.com/Jan-Dev0/13-newsletter-sign-up-form",
    previewLink: "https://jan-dev0.github.io/13-newsletter-sign-up-form/",
  },
  {
    title: "Workit landing page",
    description: "",
    image: "./images/workit-landing-page.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/12-workit-landing-page",
    previewLink: "https://jan-dev0.github.io/12-workit-landing-page/",
  },
  {
    title: "Results summary component",
    description: "",
    image: "./images/results-summary-component.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/11-results-summary-component",
    previewLink: "https://jan-dev0.github.io/11-results-summary-component/",
  },

  {
    title: "FAQ accordion",
    description: "",
    image: "./images/faq-accordion.png",
    languages: ["html", "css", "javascript"],
    repoLink: "https://github.com/Jan-Dev0/10-faq-accordion",
    previewLink: "https://jan-dev0.github.io/10-faq-accordion/",
  },
  {
    title: "Article preview component",
    description: "",
    image: "./images/article-preview-component.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/09-article-preview-component",
    previewLink: "https://jan-dev0.github.io/09-article-preview-component/",
  },
  {
    title: "Meet landing page",
    description: "",
    image: "./images/meet-landing-page.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/08-meet-landing-page",
    previewLink: "https://jan-dev0.github.io/08-meet-landing-page/",
  },
  {
    title: "Testimonials grid section",
    description: "",
    image: "./images/testimonials-grid-section.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/07-testimonials-grid-section",
    previewLink: "https://jan-dev0.github.io/07-testimonials-grid-section/",
  },
  {
    title: "Four card feature section",
    description: "",
    image: "./images/four-card-feature-section.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/06-four-card-feature-section",
    previewLink: "https://jan-dev0.github.io/06-four-card-feature-section/",
  },
  {
    title: "Product preview card",
    description: "",
    image: "./images/product-preview-card-component.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/05-product-preview-card",
    previewLink: "https://jan-dev0.github.io/05-product-preview-card/",
  },
  {
    title: "Recipe page",
    description: "",
    image: "./images/recipe-page.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/04-recipe-page",
    previewLink: "https://jan-dev0.github.io/04-recipe-page/",
  },
  {
    title: "Social links profile",
    description: "",
    image: "./images/social-links-profile.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/03-social-links-profile",
    previewLink: "https://jan-dev0.github.io/03-social-links-profile/",
  },
  {
    title: "Blog preview card",
    description: "",
    image: "./images/blog-preview-card.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/02-blog-preview-card",
    previewLink: "https://jan-dev0.github.io/02-blog-preview-card/",
  },
  {
    title: "QR Code Component",
    description: "",
    image: "./images/qr-code-component.png",
    languages: ["html", "css"],
    repoLink: "https://github.com/Jan-Dev0/01-QR-code-component",
    previewLink: "https://jan-dev0.github.io/01-QR-code-component/",
  },
];

 const prevBtn = document.querySelector(".projects__nav-btn--prev");
 const nextBtn = document.querySelector(".projects__nav-btn--next");

const projectsPerPage = 6;
let currentIndex = 0;


function renderProjects() {
  const section = document.querySelector('.projects');
  const grid = document.querySelector(".projects__grid");
  grid.innerHTML = "";
  end = Math.min(currentIndex + projectsPerPage, projects.length);

  for (let i = currentIndex; i < end; i++) {
    const project = projects[i];
    const card = document.createElement("div");
    card.className = "project";

    card.innerHTML = `
        <div class="project__card">
          <div class="project__image-wrapper" >
            <img src="${project.image}" alt="${project.title}" class="project__image">
          </div>

          <div class="project__details">
            <h3 class="project__title">${project.title}</h3>
            <div class="project__languages">
              ${project.languages
                .map(
                  (lang) => `<img class="projects__lang-icon" src="/icons/${lang}.png"title="${lang}"></i>
                `
                )
                .join("")}
            </div>
            <div class="project__links">
              <a href="${project.repoLink}" target="_blank" class="project__link project__link--code">Code</a>
              <a href="${project.previewLink}" target="_blank" class="project__link project__link--preview">Preview</a>
            </div>
          </div>
        </div>
      `;

    grid.appendChild(card);
    setTimeout(() => {
      card.classList.add("show");
    }, 50);
  };
  
section.scrollIntoView({ behavior: 'smooth' }); 


    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + projectsPerPage >= projects.length;
}


prevBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex - projectsPerPage, 0);
  renderProjects();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + projectsPerPage)
  renderProjects();
});




renderProjects();