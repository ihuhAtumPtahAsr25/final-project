// main.js
const sections = [
  "hero",
  "trustedby",
  "features",
  "values",
  "pricing",
  "qualitywork",
  "testimonials",
  "cta",
  "footer"
];

sections.forEach(section => {
  fetch(`${section}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById(section).innerHTML = html;
    })
    .catch(error => console.error(`Error loading ${section}:`, error));
});




