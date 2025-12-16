const items = document.querySelectorAll(".carousel-item");
const total = items.length;
const visibleCount = 4;
let startIndex = 0; // index of the *first visible* image

function updateCarousel() {
  // Hide all first
  items.forEach((item) => (item.style.display = "none"));

  // Show 4 items in the "window"
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % total;
    items[index].style.display = "block";
  }
}

document.getElementById("next").addEventListener("click", () => {
  // Only shift the window by 1, so first disappears, new last appears
  startIndex = (startIndex + 1) % total;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  // Shift window backwards
  startIndex = (startIndex - 1 + total) % total;
  updateCarousel();
});

// Initial display
updateCarousel();
