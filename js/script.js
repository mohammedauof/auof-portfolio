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

setInterval(rotateTagline, 3000); // Change tagline every 3 seconds

