// ── FAQ Accordion ──────────────────────────────────────────────

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    item.classList.toggle("active");

    if (!isActive) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// Adjust max-height on window resize to ensure it fits the content
window.addEventListener("resize", () => {
  document
    .querySelectorAll(".faq-item.active .faq-answer")
    .forEach((answer) => {
      answer.style.maxHeight = answer.scrollHeight + "px";
    });

  // Close mobile menu if viewport grows to tablet/desktop
  if (window.innerWidth >= 640) {
    closeMenu();
  }
});

// ── Hamburger / Mobile Nav ──────────────────────────────────────

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const overlay = document.querySelector(".nav-overlay");

function openMenu() {
  hamburger.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  navMenu.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  if (!hamburger) return;
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("open");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  hamburger.classList.contains("open") ? closeMenu() : openMenu();
});

// Tapping the overlay closes the menu
overlay.addEventListener("click", closeMenu);

// Tapping a nav link on mobile closes the menu
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 640) closeMenu();
  });
});

// ── Wrap table for horizontal scroll on mobile ──────────────────

document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector(".table-section table");
  if (table && !table.closest(".table-wrapper")) {
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrapper";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }
});
