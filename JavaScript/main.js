import { NeatGradient } from "@firecms/neat";
import { darkThemeConfig, lightThemeConfig } from "./backgrounds.js";
import { applyThemeColors } from "./colores.js";
import { proyectos } from "./proyectos.js";
import emailjs from "@emailjs/browser";
import "../css/main.css";

emailjs.init("uWi6YuvGoxMA-TSfo");

let currentTheme = "dark";
const gradientCanvas = document.getElementById("gradient");
const toggle = document.getElementById("theme-toggle");
const navbar = document.querySelector(".navbar");

let gradient;
const githubIcons = document.querySelectorAll('[data-icon="github"]');

function updateLogos(theme) {
  const navLogo = document.getElementById("navLogo");
  const footerLogo = document.getElementById("footerLogo");

  const logoSrc =
    theme === "dark"
      ? "Logos/logo_transparente_blanco.webp"
      : "Logos/logo_transparente_negro.webp";

  if (navLogo) navLogo.src = logoSrc;
  if (footerLogo) footerLogo.src = logoSrc;
}

function updateFavicon(theme) {
  const favicon = document.getElementById("favicon");
  if (!favicon) return;

  favicon.href =
    theme === "dark"
      ? "Logos/logo_blanco.webp"
      : "Logos/logo_negro.webp";
}

function updateGithubIcons(theme) {
  const src =
    theme === "dark" ? "Iconos/GitHub_dark.svg" : "Iconos/github.svg";

  githubIcons.forEach((img) => (img.src = src));
}

function applyThemeAssets(theme) {
  applyThemeColors(theme);
  updateGithubIcons(theme);
  updateLogos(theme);
}

function optimizeGradientConfig(config) {
  if (window.innerWidth < 1300) {
    config.resolution = 0.55;
    config.grainIntensity *= 0.5;
    config.speed *= 0.75;
    config.waveAmplitude *= 0.75;
  } else {
    config.resolution = 1;
  }
  return config;
}

function createGradient(theme) {
  const baseConfig = theme === "dark" ? darkThemeConfig : lightThemeConfig;
  const optimizedConfig = optimizeGradientConfig({ ...baseConfig });
  gradient = new NeatGradient({
    ref: gradientCanvas,
    ...optimizedConfig,
  });
}

const savedTheme = localStorage.getItem("theme") || "dark";
currentTheme = savedTheme;
applyThemeAssets(currentTheme);
toggle.checked = currentTheme === "dark";
createGradient(currentTheme);

function toggleTheme() {
  currentTheme = toggle.checked ? "dark" : "light";
  applyThemeAssets(currentTheme);
  gradient.destroy();
  createGradient(currentTheme);
  localStorage.setItem("theme", currentTheme);
}

toggle.addEventListener("change", toggleTheme);

let lastMouseY = window.innerHeight;
function updateNavbar(y) {
  const triggerZone = window.innerHeight * 0.25;
  navbar.classList.toggle("show", y < triggerZone);
}

document.addEventListener("mousemove", (e) => {
  lastMouseY = e.clientY;
  if (!document.body.classList.contains("modal-open")) {
    updateNavbar(lastMouseY);
  }
});

// RENDERIZACION DE PROYECTOS
const container = document.getElementById("projects-container");
const cardTemplate = document.getElementById("project-template");

proyectos.forEach((p) => {
  const cardFragment = cardTemplate.content.cloneNode(true);
  const card = cardFragment.querySelector(".project-card");

  const img = card.querySelector(".card-image");
  if (p.imagenes?.length) {
    img.src = p.imagenes[0];
    img.alt = p.titulo;
    
    // Click en imagen para abrir overlay
    const imageWrapper = card.querySelector(".card-image-wrapper");
    imageWrapper.style.cursor = "pointer";
    imageWrapper.addEventListener("click", (e) => {
      e.preventDefault();
      // Abrir el overlay con navegación usando el arreglo completo
      window.dispatchEvent(
        new CustomEvent("open-overlay", {
          detail: { images: p.imagenes, index: 0 },
        })
      );
    });
  }

  card.querySelector(".card-title").textContent = p.titulo;
  card.querySelector(".card-description").textContent = p.descripcion;

  // badge tipo
  if (p.tipo) {
    const badgeText = card.querySelector(".card-badge-tipo .badge-text");
    if (badgeText) badgeText.textContent = p.tipo;
  }
  
  // badge framework
  if (p.framework) {
    const badgeText = card.querySelector(".card-badge-framework .badge-text");
    if (badgeText) badgeText.textContent = p.framework;
  }

  const icons = card.querySelectorAll(".card-tech img");
  p.iconos.forEach((src, i) => {
    if (icons[i]) icons[i].src = src;
  });

  const dlBtn = card.querySelector(".card-download");
  if (p.boton?.link) {
    dlBtn.textContent = p.boton.texto;
    dlBtn.href = p.boton.link;
  } else {
    dlBtn.style.display = "none";
  }

  const repoBtn = card.querySelector(".open-modal");
  repoBtn.dataset.id = p.id;

  container.appendChild(card);
});

// SCROLL
const reveals = document.querySelectorAll(
  "section, article, .skill-card, .project-card, .contact-container"
);

reveals.forEach((el) => el.classList.add("reveal-item"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.05}s`;
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => observer.observe(el));

const hero = document.querySelector("#home");
const heroItems = [
  hero.querySelector(".blend-title"),
  hero.querySelector(".subtitle"),
  hero.querySelector(".hero-buttons"),
];

heroItems.forEach((el, i) => {
  el.classList.add("hero-reveal");
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// EFECTO CLICK EN BOTONES
const clickables = document.querySelectorAll(`
  button:not(.close-modal):not(.gallery-prev):not(.gallery-next):not(.prev-project):not(.next-project):not(.modal-close-top):not(.back-to-top),
  a.btn,
  a.btn-glow,
  .card-open,
  .card-download,
  .contact-btn-902
`);

clickables.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("btn-click");
    setTimeout(() => btn.classList.remove("btn-click"), 250);
  });
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".close-modal");
  if (!btn) return;
  btn.classList.add("clicked");
  setTimeout(() => btn.classList.remove("clicked"), 200);
  const modal = btn.closest(".project-modal");
  closeModal(modal);
});

// ENVIO DE FORMULARIO
const form = document.getElementById("contactForm");
const alerta = document.getElementById("alertaGracias");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alerta.textContent = "Enviando tu mensaje...";
  alerta.className = "alerta show";

  emailjs.sendForm("service_fz2pgho", "template_l9yc0yb", this).then(
    () => {
      alerta.textContent = "¡Gracias por tu mensaje! Me comunicaré contigo pronto.";
      alerta.className = "alerta success show";
      form.reset();
    },
    (error) => {
      console.error("Error:", error);
      alerta.textContent = "Error al enviar el mensaje. Intenta nuevamente.";
      alerta.className = "alerta error show";
    }
  );

  setTimeout(() => {
    alerta.classList.remove("show");
  }, 6000);
});

// BOTON FOOTER
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function alignBackToTop() {
  const navbar = document.querySelector(".navbar .container");
  const btn = document.getElementById("backToTop");

  if (!navbar || !btn) return;

  const rect = navbar.getBoundingClientRect();
  const offset = window.innerWidth - rect.right;
  btn.style.right = offset + 8 + "px";
}

function alignFooterLogo() {
  const navbarContainer = document.querySelector(".navbar .container");
  const footerLogo = document.getElementById("footerLogo");

  if (!navbarContainer || !footerLogo) return;

  const rect = navbarContainer.getBoundingClientRect();
  const offsetLeft = rect.left;
  footerLogo.style.marginLeft = offsetLeft + "px";
}

window.addEventListener("resize", () => {
  alignBackToTop();
  alignFooterLogo();
});

window.addEventListener("DOMContentLoaded", () => {
  alignBackToTop();
  alignFooterLogo();
});

alignBackToTop();
alignFooterLogo();
