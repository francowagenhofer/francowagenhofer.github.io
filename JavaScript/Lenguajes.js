// Archivo: JavaScript/languages.js
export const translations = {
  es: {
    // Navbar
    "nav.proyectos": "Proyectos",
    "nav.tecnologias": "Tecnologías",
    "nav.sobre": "Sobre mí",
    "nav.contacto": "Contacto",

    // Header
    "header.subtitle":
    "Desarrollador .NET | Aplicaciones web, desktop y manejo de datos",
    "header.cv": "Descargar CV",
    "header.linkedin": "LinkedIn",
    "header.github": "GitHub",

    // Projects
    "projects.title": "Proyectos destacados",
    "projects.featured": "Destacado",
    "projects.viewMore": "Ver más",

    // Projects descriptions
    "projects.movieapp.desc":
      "Catálogo de películas con sistema de reseñas, favoritos, calificaciones y más.",
    "projects.catalogo.desc":
      "Plataforma web para gestionar y filtrar productos con control de accesos.",
    "projects.gestor.desc":
      "Gestión integral de empleados, proyectos y sueldos para PyMEs y mucho más.",

    // Projects buttons
    "projects.movieapp.button": "Ver Repositorio",
    "projects.catalogo.button": "Sitio Web",
    "projects.gestor.button": "Descargar app",

    // Projects - Modal repos/buttons
    "projects.catalogo.repos": "Ver Repositorio",
    "projects.gestor.repos.sqlite": "SQLite",
    "projects.gestor.repos.sqlserver": "SQL Server",

    // Skills
    "skills.title": "Tecnologías & Herramientas",
    "skills.intro": "Lo que manejo y aplico en mis proyectos",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Herramientas",

    // About
    "about.title": "Sobre mí",
    "about.text1":
      "Soy desarrollador .NET con formación en la Tecnicatura Universitaria en Programación (UTN), fortalecida con práctica constante y proyectos reales en C# .NET y SQL Server.",
    "about.text2":
      "Me apasiona el desarrollo de software y busco seguir creciendo profesionalmente, ampliando mis capacidades técnicas y aportando valor en cada desafío.",

    // Contact
    "contact.title": "Contacto",
    "contact.name": "Nombre",
    "contact.namePlaceholder": "Tu nombre",
    "contact.email": "Correo electrónico",
    "contact.emailPlaceholder": "Tu email",
    "contact.phone": "Teléfono (opcional)",
    "contact.phonePlaceholder": "Tu número",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Escribe tu mensaje",
    "contact.send": "Enviar",
    "contact.myData": "Mis datos",
    "contact.downloadCV": "Descargar CV",
    "contact.sending": "Enviando tu mensaje...",
    "contact.success": "¡Gracias por tu mensaje! Me comunicaré contigo pronto.",
    "contact.error": "Error al enviar el mensaje. Intenta nuevamente.",

    // Modals
    "modal.images": "Imagenes",
    "modal.description": "Descripción",
    "modal.technologies": "Tecnologías",
    "modal.methods": "Métodos",

    // Footer
    "footer.text":
      "© 2025 • Franco Wagenhöfer — Vite.js · Neat Gradient · GitHub Pages",
  },

  en: {
    // Navbar
    "nav.proyectos": "Projects",
    "nav.tecnologias": "Technologies",
    "nav.sobre": "About",
    "nav.contacto": "Contact",

    // Header
    "header.subtitle":
      ".NET Developer | Web, desktop applications and data management",
    "header.cv": "Download CV",
    "header.linkedin": "LinkedIn",
    "header.github": "GitHub",

    // Projects
    "projects.title": "Featured Projects",
    "projects.featured": "Featured",
    "projects.viewMore": "View more",

    // Projects buttons
    "projects.movieapp.button": "View Repository",
    "projects.catalogo.button": "Website",
    "projects.gestor.button": "Download app",

    // Projects - Modal repos/buttons
    "projects.catalogo.repos": "View Repository",
    "projects.gestor.repos.sqlite": "SQLite",
    "projects.gestor.repos.sqlserver": "SQL Server",

    // Projects descriptions
    "projects.movieapp.desc":
      "Movie catalog with review system, favorites, ratings and more.",
    "projects.catalogo.desc":
      "Web platform to manage and filter products with access control.",
    "projects.gestor.desc":
      "Comprehensive management of employees, projects and salaries for SMEs.",

    // Projects modal text
    "projects.movieapp.text":
      "<p><strong>ASP.NET MVC web app for complete movie management.</strong> Allows managing a movie catalog with full CRUD, review system with ratings, favorite management and authentication with differentiated roles.</p><p><strong>Project objective:</strong> Develop a comprehensive application that combines data management, secure authentication with ASP.NET Identity, MVC architecture and a modern and responsive interface.</p>",
    "projects.catalogo.text":
      "<p><strong>C# web app with ASP.NET Web Forms for complete product management.</strong> Allows managing a product catalog with full CRUD, filtering system by category and brand, dynamic search, and user management with authentication and differentiated roles.</p><p><strong>Main features:</strong> Grid and card visualization, image management, inline article editing, admin panel with specific permissions and validations on both client and server side.</p><p><strong>Project objective:</strong> Simulate real inventory scenarios by applying layered architecture, design patterns, security through roles and usability best practices. Deployed project and accessible online.</p>",
    "projects.gestor.text":
      "<p><strong>C# .NET app for SME management.</strong> Initially developed as a console app, it evolved to a graphical interface version (WinForms) to meet company needs. Allows managing employee data, projects, salaries and more, with all CRUD functionalities implemented.</p><p><strong>Independent versions:</strong><br>• SQLite: portable, direct executable after download (no installation required).<br>• SQL Server: complete with multiuser, stored procedures, console interface and WinForms.</p>",

    // Projects tech lists
    "projects.movieapp.techList": [
      "<strong>Frontend:</strong> Razor Views, HTML, CSS, Bootstrap",
      "<strong>Backend:</strong> C#, ASP.NET MVC (.NET 9)",
      "<strong>ORM:</strong> Entity Framework Core",
      "<strong>Database:</strong> SQL Server",
      "<strong>Authentication:</strong> ASP.NET Identity",
      "<strong>IDE:</strong> Visual Studio 2022",
    ],
    "projects.movieapp.methodsList": [
      "<strong>Logic:</strong> OOP and MVC architecture",
      "<strong>Management:</strong> CRUD with validations",
      "<strong>Queries:</strong> LINQ and T-SQL",
      "<strong>Security:</strong> Role system (admin/user)",
      "<strong>Features:</strong> Reviews, favorites, dynamic filters",
    ],

    "projects.catalogo.techList": [
      "<strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript",
      "<strong>Backend:</strong> C#, ASP.NET Web Forms",
      "<strong>Database:</strong> SQL Server",
      "<strong>IDE:</strong> Visual Studio",
      "<strong>Host:</strong> Somee",
    ],
    "projects.catalogo.methodsList": [
      "<strong>Logic:</strong> OOP",
      "<strong>Architecture:</strong> Layers (domain, business, UI)",
      "<strong>Management:</strong> CRUD with validations",
      "<strong>Queries:</strong> T-SQL and joins",
      "<strong>Security:</strong> Role system and login",
    ],

    "projects.gestor.techList": [
      "<strong>Frontend:</strong> Windows Forms",
      "<strong>Backend:</strong> C#",
      "<strong>Database:</strong> SQL Server / SQLite",
      "<strong>IDE:</strong> Visual Studio",
    ],
    "projects.gestor.methodsList": [
      "<strong>Logic:</strong> OOP",
      "<strong>Architecture:</strong> Layers (domain, business, UI)",
      "<strong>Management:</strong> CRUD with validations",
      "<strong>Queries:</strong> T-SQL and joins",
    ],

    // Skills
    "skills.title": "Technologies & Tools",
    "skills.intro": "What I work with and apply in my projects",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Tools",

    // About
    "about.title": "About Me",
    "about.text1":
      "I am a .NET developer with training in the University Technician in Programming (UTN), strengthened by constant practice and real projects in C# .NET and SQL Server.",
    "about.text2":
      "I am passionate about software development and seek to continue growing professionally, expanding my technical abilities and adding value in every challenge.",

    // Contact
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "Your email",
    "contact.phone": "Phone (optional)",
    "contact.phonePlaceholder": "Your number",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Write your message",
    "contact.send": "Send",
    "contact.myData": "My Data",
    "contact.downloadCV": "Download CV",
    "contact.sending": "Sending your message...",
    "contact.success": "Thank you for your message! I will contact you soon.",
    "contact.error": "Error sending message. Try again.",

    // Modals
    "modal.images": "Images",
    "modal.description": "Description",
    "modal.technologies": "Technologies",
    "modal.methods": "Methods",

    // Footer
    "footer.text":
      "© 2025 • Franco Wagenhöfer — Vite.js · Neat Gradient · GitHub Pages",
  },
};

export function getTranslation(key, lang) {
  return translations[lang]?.[key] || key;
}

export function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-language", lang);
}

export function getLanguage() {
  return localStorage.getItem("language") || "es";
}
