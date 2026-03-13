// Smooth fallback for older browsers and room for future enhancements.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(el => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 80){
      el.classList.add("active");
    }

  });

});
const accordionGroups = document.querySelectorAll(".accordion-group");

accordionGroups.forEach((group) => {
  const items = group.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const button = item.querySelector(".accordion-toggle");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((other) => {
        other.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
