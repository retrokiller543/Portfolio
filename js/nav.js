const hamburger = document.getElementById("ham-container");
const linkContainer = document.getElementById("link-container");
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (linkContainer.style.display === "block") {
    if (linkContainer.classList.contains('fade-in')) {
      linkContainer.classList.remove('fade-in')
    }
    linkContainer.classList.toggle("fade-out");
    linkContainer.style.display = "none";
  } else {
    if (linkContainer.classList.contains('fade-out')) {
      linkContainer.classList.remove('fade-out')
    }
    linkContainer.style.display = "block";
    linkContainer.classList.toggle("fade-in");
  }
}
