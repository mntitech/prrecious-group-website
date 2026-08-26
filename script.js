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


// WhatsApp quote form + location
const quoteForm = document.getElementById("quoteForm");
const getLocationBtn = document.getElementById("getLocation");
const locationInput = document.getElementById("location");
const locationStatus = document.getElementById("locationStatus");

let mapLocation = "";


// Get customer's current GPS location
if (getLocationBtn) {
  getLocationBtn.addEventListener("click", function () {

    if (!navigator.geolocation) {
      locationStatus.textContent =
        "Location is not supported by this browser.";
      return;
    }

    locationStatus.textContent =
      "Getting your location...";

    navigator.geolocation.getCurrentPosition(

      function (position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        mapLocation =
          `https://www.google.com/maps?q=${latitude},${longitude}`;

        locationInput.value =
          `Google Maps Location`;

        locationStatus.innerHTML =
          `📍 Location captured successfully. ` +
          `<a href="${mapLocation}" target="_blank" rel="noopener">View on Google Maps</a>`;

      },

      function () {

        locationStatus.textContent =
          "Unable to get your location. Please enter the site location manually.";

      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }

    );
  });
}


// Send quote to PRRECIOUS GROUP WhatsApp
if (quoteForm) {

  quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const location =
      document.getElementById("location").value.trim();

    const service =
      document.getElementById("service").value;

    const details =
      document.getElementById("details").value.trim();


    const finalLocation =
      mapLocation ||
      location ||
      "Not provided";


    const message =
      `Hello PRRECIOUS GROUP,%0A%0A` +
      `I would like to request an electrical work quotation.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Location: ${encodeURIComponent(finalLocation)}%0A` +
      `Service: ${encodeURIComponent(service)}%0A` +
      `Project Details: ${encodeURIComponent(details || "Not provided")}`;


    window.open(
      `https://wa.me/919036341334?text=${message}`,
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
