// === DARK / LIGHT MODE TOGGLE ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerText = "Light";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.innerText = isDark ? "Light" : "Dark";
});

// === LANGUAGE TOGGLE ===
const langToggle = document.getElementById("langToggle");
let isUrdu = localStorage.getItem("lang") === "ur";

function updateLanguage() {
  const urduEls = document.querySelectorAll(".lang-ur");
  const engEls = document.querySelectorAll(".lang-en");

  urduEls.forEach(el => el.style.display = isUrdu ? "block" : "none");
  engEls.forEach(el => el.style.display = isUrdu ? "none" : "block");

  langToggle.innerText = isUrdu ? "English" : "اردو";
  localStorage.setItem("lang", isUrdu ? "ur" : "en");
}

langToggle.addEventListener("click", () => {
  isUrdu = !isUrdu;
  updateLanguage();
});

updateLanguage();

// === SPRAY LOADER ON PAGE LOAD ===
window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `
    <div class="spray-loader">
      <img src="logo.png" alt="Loading..." class="loader-icon">
      <div class="spray-mist"></div>
    </div>`;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => loader.remove(), 1000);
  }, 1500);

  // Hide original loader if any
  const defaultLoader = document.getElementById("loader");
  if (defaultLoader) defaultLoader.style.display = "none";
});

// === CHATBOT ICONS ===
function createChatBots() {
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/923042919343";
  whatsappBtn.className = "chatbot whatsapp";
  whatsappBtn.target = "_blank";
  whatsappBtn.title = "Chat on WhatsApp";
  whatsappBtn.innerHTML = "💬";
  document.body.appendChild(whatsappBtn);

  const instaBtn = document.createElement("a");
  instaBtn.href = "https://instagram.com/yourprofile";
  instaBtn.className = "chatbot instagram";
  instaBtn.target = "_blank";
  instaBtn.title = "Message on Instagram";
  instaBtn.innerHTML = "📷";
  document.body.appendChild(instaBtn);
}

window.addEventListener("DOMContentLoaded", createChatBots);

// === HAMBURGER TOGGLE ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
  });
}

// === AUTO CLOSE NAV ON RESIZE ===
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navLinks.classList.contains("nav-open")) {
    navLinks.classList.remove("nav-open");
    hamburger.classList.remove("is-active");
  }
});


