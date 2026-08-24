// ==========================================================
// Sonrisas Gallardo — configuración editable
// Cambia estos 3 valores con los datos reales del consultorio
// ==========================================================
const CONFIG = {
  whatsappNumber: "525500000000", // [PLACEHOLDER] formato: 52 + 10 dígitos, sin espacios ni +
  whatsappMessage: "Hola, me gustaría agendar una cita en Sonrisas Gallardo.",
  phoneNumber: "+525500000000", // [PLACEHOLDER]
};

// Construye los enlaces de WhatsApp y teléfono en todos los botones marcados
document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
  const text = encodeURIComponent(CONFIG.whatsappMessage);
  el.setAttribute("href", `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("[data-phone-link]").forEach((el) => {
  el.setAttribute("href", `tel:${CONFIG.phoneNumber}`);
});

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Año dinámico en el footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
