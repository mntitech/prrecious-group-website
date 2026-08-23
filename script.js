const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("loginForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Employee portal UI is ready. Secure backend authentication will be connected before production use.");
});

document.getElementById("quoteForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Hello PRRECIOUS GROUP,\n\nName: ${form.get("name")}\nPhone: ${form.get("phone")}\nLocation: ${form.get("location")}\nRequirement: ${form.get("message")}`;
  const url = `https://wa.me/919135766693?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});
