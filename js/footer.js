document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".footer-toggle");

  toggles.forEach((btn) => {
    btn.addEventListener("click", function () {
      // hvis vi er på desktop, skal der ikke ske noget
      if (window.matchMedia("(min-width: 900px)").matches) return;

      const section = btn.parentElement;
      const content = section.querySelector(".footer-content");

      // luk hvis åben, åbn hvis lukket
      if (section.classList.contains("open")) {
        section.classList.remove("open");
      } else {
        section.classList.add("open");
      }
    });
  });
});
