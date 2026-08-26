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

// Employee Dashboard demo
// Real authentication and attendance storage will be connected to a secure backend.

const login = document.getElementById("login");
const msg = document.getElementById("msg");

const employeeDashboard =
  document.getElementById("employeeDashboard");

const employeeName =
  document.getElementById("employeeName");

const employeeIdDisplay =
  document.getElementById("employeeId");

const todayDate =
  document.getElementById("todayDate");

const attendanceStatus =
  document.getElementById("attendanceStatus");

const punchIn =
  document.getElementById("punchIn");

const punchOut =
  document.getElementById("punchOut");

const employeeLocation =
  document.getElementById("employeeLocation");

const attendanceList =
  document.getElementById("attendanceList");

const employeeLogout =
  document.getElementById("employeeLogout");

let punchInTime = null;


// LOGIN
const employeeLoginBtn =
  document.getElementById("employeeLoginBtn");

if (employeeLoginBtn && employeeDashboard) {

  employeeLoginBtn.addEventListener("click", function () {

    const employeeId =
      document.getElementById("eid").value.trim();

    const pin =
      document.getElementById("pin").value.trim();

    if (!employeeId || !pin) {

      msg.textContent =
        "Please enter your Employee ID and PIN.";

      return;
    }

    employeeName.textContent =
      "Employee";

    employeeIdDisplay.textContent =
      employeeId;

    todayDate.textContent =
      new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });

    employeeDashboard.hidden = false;

    msg.textContent = "";

    document.getElementById("eid").value = "";
    document.getElementById("pin").value = "";

    setTimeout(function () {

      employeeDashboard.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 100);

  });

}


// PUNCH IN
if (punchIn) {

  punchIn.addEventListener("click", function () {

    punchInTime = new Date();

    attendanceStatus.textContent =
      "Punched in at " +
      punchInTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      });

    punchIn.disabled = true;
    punchOut.disabled = false;


    if (!navigator.geolocation) {

      employeeLocation.textContent =
        "Location is not supported by this browser.";

      return;
    }


    employeeLocation.textContent =
      "📍 Getting current site location...";


    navigator.geolocation.getCurrentPosition(

      function (position) {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        const mapUrl =
          `https://www.google.com/maps?q=${latitude},${longitude}`;

        employeeLocation.innerHTML =
          `📍 Location captured. ` +
          `<a href="${mapUrl}" target="_blank" rel="noopener">` +
          `View on Google Maps</a>`;

      },

      function () {

        employeeLocation.textContent =
          "Unable to get location. Please allow location access.";

      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }

    );

  });

}


// PUNCH OUT
if (punchOut) {

  punchOut.addEventListener("click", function () {

    const punchOutTime = new Date();

    attendanceStatus.textContent =
      "Punched out at " +
      punchOutTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      });

    punchOut.disabled = true;


    if (!attendanceList) {
      return;
    }


    const record =
      document.createElement("div");

    record.className =
      "attendance-record";


    record.innerHTML = `

      <div>
        <span>Date</span>
        <strong>
          ${new Date().toLocaleDateString("en-IN")}
        </strong>
      </div>

      <div>
        <span>Punch In</span>
        <strong>
          ${punchInTime
            ? punchInTime.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit"
              })
            : "—"}
        </strong>
      </div>

      <div>
        <span>Punch Out</span>
        <strong>
          ${punchOutTime.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </strong>
      </div>

    `;


    const empty =
      attendanceList.querySelector(".empty-history");

    if (empty) {
      empty.remove();
    }

    attendanceList.prepend(record);

  });

}


// LOGOUT
if (employeeLogout) {

  employeeLogout.addEventListener("click", function () {

    employeeDashboard.hidden = true;

    punchIn.disabled = false;
    punchOut.disabled = true;

    punchInTime = null;

    attendanceStatus.textContent =
      "Not punched in";

    employeeLocation.textContent =
      "📍 Site location will appear here.";

    document
      .getElementById("portal")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

}

// Update footer year automatically
const year = document.querySelector("footer small");

if (year) {
  year.textContent =
    `© ${new Date().getFullYear()} PRRECIOUS GROUP. All rights reserved.`;
}
