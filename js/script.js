const taglines = [
  "Cybersecurity Enthusiast",
  "Frontend Developer in Progress",
  "Loves Clean UI & Ethical Hacking",
  "Building Secure and Beautiful Web Experiences"
];

let taglineIndex = 0;
const taglineElement = document.getElementById("changing-tagline");

function rotateTagline() {
  taglineIndex = (taglineIndex + 1) % taglines.length;
  taglineElement.textContent = taglines[taglineIndex];
}

setInterval(rotateTagline, 2000); // Change tagline every 2 seconds


/* Back To Top Button */
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};


backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* Hamburger on Mobile */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  } else {
    console.log("hamburger or navLinks not found");
  }
});

