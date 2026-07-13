const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent document click from firing
  navLinks.classList.toggle("active");
});

// Close when clicking anywhere outside
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("active") && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
