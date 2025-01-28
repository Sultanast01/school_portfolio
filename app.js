// Mobile Navbar Toggle
const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// Add active class on click to nav-items
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");

    navLinks.classList.toggle("nav-active");
  });
});

// Filter Projects
const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");

projectsTabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    projectsTabBtns.forEach((btn) =>
      btn.classList.remove("projects-tab-btn-active")
    );

    this.classList.add("projects-tab-btn-active");

    projectsItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// Form Submission with Formspree
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  fetch("https://formspree.io/f/xpwqdzzz", { // Replace with your actual Formspree API URL
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => response.json())
  .then(data => {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset(); // Clear the form after submission
  })
  .catch(error => console.error("Error:", error));
});