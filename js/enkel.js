// mere salg popup
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// increase and descrese buttons
var increaseBtn = document.getElementById("increase");
var decreaseBtn = document.getElementById("decrease");
var quantityValue = document.getElementById("quantityValue");

var quantity = 0;

increaseBtn.addEventListener("click", function () {
  quantity++;
  quantityValue.textContent = quantity;
});

decreaseBtn.addEventListener("click", function () {
  if (quantity > 0) {
    quantity--;
    quantityValue.textContent = quantity;
  }
});

var sizeButtons = document.querySelectorAll(".button2");

for (var i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener("click", function () {
    for (var j = 0; j < sizeButtons.length; j++) {
      sizeButtons[j].classList.remove("active");
    }

    this.classList.add("active");
  });

  // carousel

  const items = document.querySelectorAll(".carousel-item");
  const total = items.length;
  const visibleCount = 4;
  let startIndex = 0; // index of the **first visible** image

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
}
