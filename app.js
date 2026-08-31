/**
 * Adaptive Dynamic Portfolio Controller - Nicolás Di Renzo
 * Analista Funcional & Desarrollador
 */

const projectsData = {
  "portfolio-tracker": {
    orientation: "landscape",
    badge: "Fintech & Gestión Patrimonial",
    title: "Portfolio Tracker & Inversiones",
    tagline: "Plataforma web para el seguimiento integral de carteras multiactivo, cotizaciones en vivo y control patrimonial.",
    image: "assets/projects/portfolio_tracker.png",
    problem: "Los inversores sufren sesgos y dispersión de datos al gestionar activos en múltiples monedas y mantener su diversificación meta.",
    functionalSpec: [
      "Seguimiento centralizado de acciones, CEDEARs, bonos y criptoactivos con cotizaciones en vivo mediante integración de APIs.",
      "Gráficos visuales de distribución por categoría y cálculo de rendimiento anualizado.",
      "Consolidación de tenencias multimoneda con cálculo en tiempo real de valuación total en USD y ARS.",
      "Autenticación multi-usuario y persistencia en la nube con Firebase."
    ],
    stack: ["Fintech", "APIs Financieras", "Firebase Auth / Cloud", "Gestión Patrimonial"],
    links: {}
  },

  "bar-vision": {
    orientation: "landscape",
    badge: "Visión Artificial & Analítica",
    title: "Bar Vision AI",
    tagline: "Plataforma de Visión Artificial para análisis operativo y de atención en bares y salones.",
    image: "assets/projects/bar_vision.png",
    problem: "Los locales gastronómicos sufren pérdidas y demoras por falta de visibilidad del estado de atención de las mesas y tiempos de espera de los clientes en salón.",
    functionalSpec: [
      "Inferencia de visión computacional con YOLOv11 y ByteTrack a 30 FPS sobre cámaras estándar sin biometría.",
      "Delimitación espacial de mesas por polígonos (Point-in-Polygon) y máquina de estados.",
      "Detección automática de gestos de llamada de comensales y clasificación de mozos por tiempo en barra.",
      "Telemetría en tiempo real transmitida por WebSockets a dashboard web."
    ],
    stack: ["Visión Artificial", "YOLOv11", "FastAPI", "WebSockets", "ByteTrack"],
    links: {}
  },

  "spendtrack-mobile": {
    orientation: "portrait",
    badge: "Mobile App (Google Play)",
    title: "SpendTrack - Gestor de Gastos Mobile",
    tagline: "Aplicación móvil para control de finanzas personales, presupuestos por categoría y escaneo OCR de tickets.",
    image: "assets/projects/spendtrack_mobile.jpg",
    problem: "La mayoría de las personas abandonan el registro de gastos por fricción de carga manual y falta de control sobre gastos fijos vs variables.",
    functionalSpec: [
      "Dashboard mensual con Total Gastado, Sueldo y Saldo Disponible en tiempo real.",
      "Estructuración de Gastos Fijos (Alquiler, Tarjetas, Servicios) vs Variables.",
      "Integración de OCR (ML Kit Text Recognition) para escaneo rápido de tickets con la cámara.",
      "Monetización y flexibilidad publicitaria mediante Google AdMob.",
      "Presupuestos por categoría, soporte Dark/Light mode y funcionamiento 100% offline-first."
    ],
    stack: ["React Native", "ML Kit OCR", "Google AdMob", "Google Play", "AsyncStorage"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.controlgastos.appstock&pcampaignid=web_share",
      playstoreText: "Probá la aplicación ↗"
    }
  },

  "turnos": {
    orientation: "portrait",
    badge: "SaaS & Gestión de Reservas",
    title: "Turnos Express (Pestañas & Uñas)",
    tagline: "Plataforma web mobile-first de reserva táctil de turnos para estudios de estética y manicuría.",
    image: "assets/projects/turnos_mobile.png",
    problem: "Los profesionales de estética pierden horas coordinando agendas por WhatsApp y sufren cancelaciones de último momento por falta de confirmaciones.",
    functionalSpec: [
      "Flujo de reserva en 3 pasos con catálogo visual de servicios y precios transparentes.",
      "Selector táctil de fechas y horarios con bloqueo de concurrencia en tiempo real en Firestore.",
      "Panel protegido para el negocio con control de ocupación, métricas de visitas y avisos por WhatsApp.",
      "Cero fricción de registro para el cliente final."
    ],
    stack: ["SaaS", "Firebase Firestore", "Reservas en Tiempo Real", "Mobile-First"],
    links: {}
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modalBackdrop = document.getElementById("project-modal");
  const modalCard = document.querySelector(".modal-card");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContainer = document.getElementById("modal-dynamic-body");
  const modalBadge = document.getElementById("modal-badge");
  const modalTitle = document.getElementById("modal-title");
  const cards = document.querySelectorAll(".card-item");

  function renderModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalCard.setAttribute("data-current-project", projectId);

    const specsHtml = data.functionalSpec.map(s => `<li>${s}</li>`).join("");
    const tagsHtml = data.stack.map(t => `<span class="tag-pill">${t}</span>`).join("");
    
    const playstoreLabel = data.links.playstoreText || "Probá la aplicación ↗";
    const playstoreBtn = data.links.playstore 
      ? `<a href="${data.links.playstore}" target="_blank" class="link-btn btn-pill" style="background: var(--accent); color:#000; font-weight:700;">${playstoreLabel}</a>` 
      : "";

    const footerActionsHtml = playstoreBtn 
      ? `<div class="modal-footer-actions">${playstoreBtn}</div>` 
      : "";

    if (data.orientation === "portrait") {
      modalContainer.innerHTML = `
        <div class="modal-layout-portrait">
          <div class="modal-media-pane">
            <img src="${data.image}" alt="${data.title}">
          </div>
          <div class="modal-content-pane">
            <p class="modal-tagline-text">${data.tagline}</p>
            
            <div class="modal-info-block">
              <h4>🎯 Problema que Resuelve</h4>
              <p>${data.problem}</p>
            </div>

            <div class="modal-info-block">
              <h4>📋 Análisis Funcional & Características</h4>
              <ul>${specsHtml}</ul>
            </div>

            <div class="modal-info-block">
              <h4>🛠️ Capacidades & Enfoque</h4>
              <div class="card-tags" style="margin-top: 4px;">${tagsHtml}</div>
            </div>

            ${footerActionsHtml}
          </div>
        </div>
      `;
    } else {
      modalContainer.innerHTML = `
        <div class="modal-layout-landscape">
          <div class="modal-media-pane">
            <img src="${data.image}" alt="${data.title}">
          </div>
          <p class="modal-tagline-text">${data.tagline}</p>
          
          <div class="modal-landscape-grid">
            <div class="modal-landscape-left">
              <div class="modal-info-block">
                <h4>🎯 Problema que Resuelve</h4>
                <p>${data.problem}</p>
              </div>

              <div class="modal-info-block">
                <h4>🛠️ Capacidades & Enfoque</h4>
                <div class="card-tags" style="margin-top: 4px;">${tagsHtml}</div>
              </div>

              ${footerActionsHtml}
            </div>

            <div class="modal-landscape-right">
              <div class="modal-info-block" style="height: 100%;">
                <h4>📋 Análisis Funcional & Características</h4>
                <ul>${specsHtml}</ul>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const pid = card.getAttribute("data-project");
      renderModal(pid);
    });
  });

  modalCloseBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeModal();
    }
  });
});
