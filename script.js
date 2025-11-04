// Système de traduction
const translations = {
  en: {
    // Navigation
    navPortfolio: "Portfolio",
    navAbout: "About",
    navCV: "CV",
    
    // Header
    headerTitle: "Michelena Peyo",
    headerSubtitle: "Computer Science Student – BUT Informatique",
    
    // About section
    aboutTitle: "About Me",
    aboutText: "I am a second-year Bachelor student in Computer Science (BUT2).",
    viewCV: "📄 View My CV",
    
    // CV section
    download: "Download",
    profile: "Profile",
    profileText: "BUT Informatique student focused on algorithms, data structures, and modern web development. I enjoy solving complex problems and turning ideas into products.",
    experience: "Experience",
    education: "Education",
    technicalProficiency: "Technical Proficiency",
    projects: "Projects",
    coreSkills: "Core Skills",
    languages: "Languages",
    interests: "Interests",
    frenchNative: "French (native)",
    englishB2: "English (B2)",
    spanishA2: "Spanish (A2)",
    sports: "Sports: basketball and football (club and occasional practice)",
    videoGames: "Video games with friends online",
    
    // Profile card
    computerScienceStudent: "Computer Science Student",
    profileDescription: "Hi! I'm a computer science student who loves web development and programming in general. I enjoy learning new technologies and make somes projects.",
    
    // Experience
    seasonalWorker: "Seasonal worker – EARL LAMAYSOUETTE",
    internFlashcompo: "Intern – Flashcompo",
    webDesignMarketing: "Web design & digital marketing",
    internDescription: "Discovered teamwork and business environment; assisted on tasks.",
    retailMember: "Retail team member – Carrefour",
    customerService: "Customer service & operations",
    duringSchoolYear: "During school year",
    
    // Education
    butInfo: "BUT Informatique",
    butInfoDescription: "French diploma of higher education in Computer Science (programming, algorithms, databases, web).",
    generalBaccalaureate: "General Baccalaureate",
    specialization: "Specialization: computer science and programming.",
    
    // Projects
    portfolioWebsite: "Portfolio Website",
    portfolioDescription: "Responsive portfolio with dark mode, animations and interactive elements",
    soundRise: "Creation of a fictional web application to allow people to share and discover music",
    soundRiseDescription: "SoundRise is a fictional web app that connects music lovers and creators. Users can upload, share, and discover tracks in a community-driven space. Designed as a school project, it highlights my skills in web design, UX, and feature planning.",
    dataAnalysis: "Data Analysis with Python",
    dataAnalysisDescription: "A Python-based tool to analyze website traffic data using SQL and visualize it with Matplotlib.",
    cdPlayer: "CD Player with Qt and C++",
    cdPlayerDescription: "A desktop application simulating a CD player, built using the Qt framework and C++. It supports audio playback, track navigation, and real-time progress display.",
    viewDescription: "View Description of Project",
    viewProject: "View Project",
    
    // Modal
    cvPreview: "CV Preview",
    close: "Close",
    
    // Page title
    pageTitle: "Portfolio - Computer Science Student"
  },
  fr: {
    // Navigation
    navPortfolio: "Portfolio",
    navAbout: "À propos",
    navCV: "CV",
    
    // Header
    headerTitle: "Michelena Peyo",
    headerSubtitle: "Étudiant en Informatique – BUT Informatique",
    
    // About section
    aboutTitle: "À propos de moi",
    aboutText: "Je suis étudiant en deuxième année de Bachelor en Informatique (BUT2).",
    viewCV: "📄 Voir mon CV",
    
    // CV section
    download: "Télécharger",
    profile: "Profil",
    profileText: "Étudiant en BUT Informatique axé sur les algorithmes, les structures de données et le développement web moderne. J'aime résoudre des problèmes complexes et transformer des idées en produits.",
    experience: "Expérience",
    education: "Formation",
    technicalProficiency: "Compétences Techniques",
    projects: "Projets",
    coreSkills: "Compétences Principales",
    languages: "Langues",
    interests: "Centres d'intérêt",
    frenchNative: "Français (natif)",
    englishB2: "Anglais (B2)",
    spanishA2: "Espagnol (A2)",
    sports: "Sports : basketball et football (club et pratique occasionnelle)",
    videoGames: "Jeux vidéo entre amis en ligne",
    
    // Profile card
    computerScienceStudent: "Étudiant en Informatique",
    profileDescription: "Salut ! Je suis un étudiant en informatique qui adore le développement web et la programmation en général. J'aime apprendre de nouvelles technologies et réaliser des projets.",
    
    // Experience
    seasonalWorker: "Travailleur saisonnier – EARL LAMAYSOUETTE",
    internFlashcompo: "Stagiaire – Flashcompo",
    webDesignMarketing: "Web design & marketing digital",
    internDescription: "Découverte du travail en équipe et de l'environnement professionnel ; assistance sur diverses tâches.",
    retailMember: "Caissier – Carrefour",
    customerService: "Service client & opérations",
    duringSchoolYear: "Pendant l'année scolaire",
    
    // Education
    butInfo: "BUT Informatique",
    butInfoDescription: "Diplôme universitaire français en Informatique (programmation, algorithmes, bases de données, web).",
    generalBaccalaureate: "Baccalauréat Général",
    specialization: "Spécialisation : informatique et programmation.",
    
    // Projects
    portfolioWebsite: "Site Web Portfolio",
    portfolioDescription: "Portfolio responsive avec mode sombre, animations et éléments interactifs",
    soundRise: "Création d'une application web fictive pour permettre aux gens de partager et découvrir de la musique",
    soundRiseDescription: "SoundRise est une application web fictive qui connecte les amateurs de musique et les créateurs. Les utilisateurs peuvent télécharger, partager et découvrir des morceaux dans un espace communautaire. Conçu comme un projet scolaire, il met en valeur mes compétences en design web, UX et planification de fonctionnalités.",
    dataAnalysis: "Analyse de données avec Python",
    dataAnalysisDescription: "Un outil basé sur Python pour analyser les données de trafic de site web en utilisant SQL et les visualiser avec Matplotlib.",
    cdPlayer: "Lecteur CD avec Qt et C++",
    cdPlayerDescription: "Une application de bureau simulant un lecteur CD, construite avec le framework Qt et C++. Elle prend en charge la lecture audio, la navigation entre pistes et l'affichage de la progression en temps réel.",
    viewDescription: "Voir la description du projet",
    viewProject: "Voir le projet",
    
    // Modal
    cvPreview: "Aperçu du CV",
    close: "Fermer",
    
    // Page title
    pageTitle: "Portfolio - Étudiant en Informatique"
  }
};

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Fonction pour définir la langue
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const htmlLang = document.getElementById('htmlLang') || document.documentElement;
  htmlLang.lang = lang;
  updatePageContent(lang);
  updateLangIcon(lang);
}

// Fonction pour mettre à jour le contenu de la page
function updatePageContent(lang) {
  const t = translations[lang];
  
  // Mettre à jour le titre de la page
  if (t.pageTitle) {
    document.title = t.pageTitle;
  }
  
  // Mettre à jour tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });
  
  // Mettre à jour les attributs title et placeholder
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (t[key]) {
      element.title = t[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      element.placeholder = t[key];
    }
  });
}

// Fonction pour mettre à jour l'icône de langue
function updateLangIcon(lang) {
  const langIcon = document.getElementById('langIcon');
  if (langIcon) {
    langIcon.textContent = lang === 'fr' ? 'En' : '🇫🇷';
  }
}

// Gestion du mode sombre
function initDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeIcon = document.getElementById('darkModeIcon');
  
  if (darkModeToggle && darkModeIcon) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      darkModeIcon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Restaurer le mode sombre si sauvegardé
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkModeIcon.textContent = '☀️';
    }
  }
}

// Gestion du scroll smooth
function initSmoothScroll() {
  document.querySelectorAll('[data-scroll-to]').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('data-scroll-to'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialiser tout au chargement
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser la langue
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  updateLangIcon(currentLang);
  
  // Ajouter l'écouteur d'événement pour le bouton de langue
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === 'en' ? 'fr' : 'en';
      setLanguage(newLang);
      updateLangIcon(newLang);
    });
  }
  
  // Initialiser le mode sombre
  initDarkMode();
  
  // Initialiser le scroll smooth
  initSmoothScroll();
});
