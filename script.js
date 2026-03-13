// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Accordion groups
const accordionGroups = document.querySelectorAll(".accordion-group");

accordionGroups.forEach((group) => {
  const items = group.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const button = item.querySelector(".accordion-toggle");

    if (!button) return;

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
