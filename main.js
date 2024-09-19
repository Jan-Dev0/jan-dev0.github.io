
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
    // Weitere Projekte hier
  ];

  // Funktion zum Erzeugen der Karten
  function createProjectCards(projects) {
    const grid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
      // Erstelle die einzelnen Karten-Elemente
      const card = document.createElement('div');
      card.className = 'project-tile';
      
      card.innerHTML = `
        <div class="card">
          <div class="card-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${project.description}</p>
            <div class="card-languages">
              ${project.languages.map(lang => `<i class="fab fa-${lang}" title="${lang}"></i>`).join('')}
            </div>
            <div class="card-links">
              <a href="${project.repoLink}" target="_blank" class="card-link card-link-left">Code</a>
              <a href="${project.previewLink}" target="_blank" class="card-link card-link-right">Vorschau</a>
            </div>
          </div>
        </div>
      `;
      
      // Füge die Karte zum Grid hinzu
      grid.appendChild(card);
    });
  }

  // Rufe die Funktion auf, um die Karten zu erstellen
  createProjectCards(projects);

