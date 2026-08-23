// Mobile navigation
const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}


// WhatsApp quote form
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("location").value.trim();
    const service = document.getElementById("service").value;
    const details = document.getElementById("details").value.trim();

    const message =
      `Hello PRRECIOUS GROUP,%0A%0A` +
      `I would like to request an electrical work quotation.%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Location: ${location}%0A` +
      `Service: ${service}%0A` +
      `Project Details: ${details || "Not provided"}`;

    window.open(
      `https://wa.me/919135766693?text=${message}`,
      "_blank"
    );
  });
}


// Employee / Founder portal demo
// IMPORTANT: This is only a front-end demo.
// Real authentication must be connected to a secure backend.

const login = document.getElementById("login");
const msg = document.getElementById("msg");

if (login) {
  login.addEventListener("submit", function (event) {
    event.preventDefault();

    const employeeId = document.getElementById("eid").value.trim();
    const pin = document.getElementById("pin").value.trim();

    if (!employeeId || !pin) {
      msg.textContent = "Please enter your Employee ID and PIN.";
      return;
    }

    msg.textContent =
      "Portal demo only. Secure employee authentication will be connected in the production version.";
  });
}


// Update footer year automatically
const year = document.querySelector("footer small");

if (year) {
  year.textContent =
    `© ${new Date().getFullYear()} PRRECIOUS GROUP. All rights reserved.`;
}
