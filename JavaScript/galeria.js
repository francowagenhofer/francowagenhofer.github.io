import { proyectos } from "./proyectos.js";

const navbar = document.querySelector(".navbar");
let currentProjectIndex = 0;

// ======================================================
// MODALES - UN ÚNICO MODAL REUTILIZABLE
// ======================================================

function updateModal(projectIndex) {
  if (projectIndex < 0 || projectIndex >= proyectos.length) return;
  
  currentProjectIndex = projectIndex;
  const proyecto = proyectos[projectIndex];
  const modal = document.getElementById("project-modal");

  if (!modal) return;

  // Actualizar contenido
  modal.querySelector(".modal-title").textContent = proyecto.titulo;
  modal.querySelector(".modal-text").innerHTML = proyecto.modalTexto;
  
  const modalText2 = modal.querySelector(".modal-text2");
  if (modalText2) modalText2.innerHTML = "";

  // Tecnologías
  const techList = modal.querySelector(".tech-list");
  techList.innerHTML = proyecto.techList
    .map((tech) => `<li>${tech}</li>`)
    .join("");

  // Métodos
  const methodsList = modal.querySelector(".methods-list");
  methodsList.innerHTML = proyecto.methodsList
    .map((method) => `<li>${method}</li>`)
    .join("");

  // Links de repositorios
  const linksContainer = modal.querySelector(".modal-links");
  linksContainer.querySelectorAll("a:not(.modal-download)").forEach(a => a.remove());
  
  proyecto.repos.forEach((r) => {
    const link = document.createElement("a");
    link.className = "btn-glow";
    link.href = r.link;
    link.target = "_blank";
    link.textContent = r.label;
    linksContainer.insertBefore(link, linksContainer.querySelector(".modal-download"));
  });

  // Botón descarga/enlace
  const downloadBtn = modal.querySelector(".modal-download");
  downloadBtn.textContent = proyecto.boton.texto;
  downloadBtn.href = proyecto.boton.link;

  // Reiniciar galería
  setupGallery(proyecto.imagenes);
}

// Abrir modal
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".open-modal");
  if (!btn) return;

  const projectIndex = proyectos.findIndex((p) => p.id === btn.dataset.id);
  if (projectIndex === -1) return;

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const content = modal.querySelector(".modal-content");

  content.classList.remove("modal-animate-out");
  content.classList.remove("modal-animate-in");

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  navbar.classList.remove("show");

  void content.offsetWidth;
  content.classList.add("modal-animate-in");

  updateModal(projectIndex);
});

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const content = modal.querySelector(".modal-content");

  content.classList.remove("modal-animate-in");
  content.classList.remove("modal-animate-out");

  void content.offsetWidth;

  content.classList.add("modal-animate-out");

  content.addEventListener(
    "animationend",
    () => {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    },
    { once: true }
  );
}

// Cerrar modal
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".close-modal") || e.target.closest(".modal-close-top");
  if (!btn) return;

  closeModal();
});

// Navegar entre proyectos
document.addEventListener("click", (e) => {
  const nextBtn = e.target.closest(".next-project");
  const prevBtn = e.target.closest(".prev-project");

  if (nextBtn) {
    navigateProject("next");
  }

  if (prevBtn) {
    navigateProject("prev");
  }
});

function navigateProject(direction) {
  let nextIndex = direction === "next" ? currentProjectIndex + 1 : currentProjectIndex - 1;

  // Loop circular
  if (nextIndex < 0) nextIndex = proyectos.length - 1;
  if (nextIndex >= proyectos.length) nextIndex = 0;

  const modal = document.getElementById("project-modal");
  const content = modal.querySelector(".modal-content");

  // Animación de salida rápida (fade)
  content.classList.remove("modal-animate-in");
  content.classList.add("modal-animate-out");

  setTimeout(() => {
    updateModal(nextIndex);
    
    // Animación de entrada rápida (fade)
    content.classList.remove("modal-animate-out");
    void content.offsetWidth;
    content.classList.add("modal-animate-in");
  }, 50);
}

// Cerrar con overlay
window.addEventListener("click", (e) => {
  const modal = document.getElementById("project-modal");
  if (e.target === modal) closeModal();
});

// Cerrar con ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("project-modal");
    if (modal && !modal.classList.contains("hidden")) closeModal();
  }
});

// Navegar con flechas del teclado
window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("project-modal");
  if (!modal || modal.classList.contains("hidden")) return;

  if (e.key === "ArrowRight") navigateProject("next");
  if (e.key === "ArrowLeft") navigateProject("prev");
});

// ======================================================
// GALERÍA REUTILIZABLE
// ======================================================

function setupGallery(images) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const container = modal.querySelector(".modal-gallery-slider");
  const prev = modal.querySelector(".gallery-prev");
  const next = modal.querySelector(".gallery-next");
  const dotsContainer = modal.querySelector(".gallery-dots");

  if (!container || !prev || !next || !dotsContainer) return;

  let index = 0;
  let currentSlide = null;

  // Limpiar slider
  container.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Si no hay imágenes, mostrar mensaje
  if (!images || images.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 20px;">Sin imágenes disponibles</p>';
    return;
  }

  // Remover listeners previos clonando los botones
  const newPrev = prev.cloneNode(true);
  const newNext = next.cloneNode(true);
  prev.replaceWith(newPrev);
  next.replaceWith(newNext);

  // Crear dots
  images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("gallery-dot");

    dot.addEventListener("click", () => {
      if (i === index) return;
      const direction = i > index ? "next" : "prev";
      index = i;
      showSlide(direction);
    });

    dotsContainer.appendChild(dot);
  });

  const updateDots = () => {
    dotsContainer.querySelectorAll(".gallery-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  function createSlide(src) {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

    let el;
    if (isVideo) {
      el = document.createElement("video");
      el.src = src;
      el.controls = true;
    } else {
      el = document.createElement("img");
      el.src = src;
      el.loading = "lazy";

      el.addEventListener("click", () => {
        const overlay = document.getElementById("image-overlay");
        const overlayImage = document.getElementById("overlay-image");
        if (overlay && overlayImage) {
          overlayImage.src = src;
          overlay.classList.remove("hidden");
        }
      });
    }

    slide.appendChild(el);
    return slide;
  }

  function showSlide(direction = "next") {
    if (images.length === 0) return;

    const src = images[index];
    const newSlide = createSlide(src);

    // Limpieza correcta
    if (currentSlide) {
      container.querySelectorAll(".slide").forEach((s) => {
        if (s !== currentSlide) s.remove();
      });
    }

    // Animación entrada
    newSlide.classList.add(direction === "next" ? "from-right" : "from-left");
    container.appendChild(newSlide);

    requestAnimationFrame(() => {
      if (currentSlide) {
        currentSlide.classList.add(direction === "next" ? "to-left" : "to-right");

        currentSlide.addEventListener(
          "transitionend",
          (e) => {
            if (e.propertyName !== "transform") return;
            currentSlide?.remove();
          },
          { once: true }
        );
      }

      newSlide.classList.remove("from-right", "from-left");
      newSlide.classList.add("is-active");
      currentSlide = newSlide;
    });

    updateDots();
  }

  // Controles
  newPrev.type = "button";
  newNext.type = "button";

  newPrev.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index - 1 + images.length) % images.length;
    showSlide("prev");
  });

  newNext.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index + 1) % images.length;
    showSlide("next");
  });

  // Mostrar primera imagen
  showSlide("next");
}

// ======================================================
// OVERLAY (zoom)
// ======================================================

const overlay = document.getElementById("image-overlay");
const overlayImage = document.getElementById("overlay-image");
const closeOverlay = document.getElementById("close-overlay");

if (closeOverlay) {
  closeOverlay.addEventListener("click", () => overlay.classList.add("hidden"));
}

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
}
