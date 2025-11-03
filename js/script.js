/* Changing taglines */
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


/* Reveal Animation */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => {
  observer.observe(reveal);
});


/* Stats Numbers rise */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let animated = false; // prevents multiple triggers

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 1500; // total animation time in ms
      const stepTime = Math.max(10, duration / target);
      let count = 0;

      const updateCounter = setInterval(() => {
        count++;
        counter.textContent = count + (target === 100 ? "%" : "+");
        if (count >= target) clearInterval(updateCounter);
      }, stepTime);
    });
  };

  // Trigger animation when stats section is visible
  const statsSection = document.querySelector("#stats");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animateCounters();
      animated = true;
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});


// Contact Form Submission Handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully! We'll get back to you soon.";
        status.className = "show success";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Please try again.";
        status.className = "show error";
      }

      // Fade out after 5 seconds
      setTimeout(() => {
        status.className = "";
        status.textContent = "";
      }, 5000);

    } catch (error) {
      status.textContent = "⚠️ Network error. Please check your connection.";
      status.className = "show error";

      setTimeout(() => {
        status.className = "";
        status.textContent = "";
      }, 5000);
    }
  });
});
