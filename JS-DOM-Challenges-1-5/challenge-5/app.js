/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let currentIndex = 0;
let timerDuration = 5; // Default timer duration in seconds
let autoPlayInterval;
let timerInterval;
let timer = timerDuration;

const track = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const autoPlayButton = document.getElementById("autoPlayButton");
const carouselNav = document.getElementById("carouselNav");
const timerDisplay = document.getElementById("timerDisplay");

function renderCarousel() {
  track.innerHTML = images
    .map(
      (img) =>
        `<div class='carousel-slide' style='background-image: url(${img.url})'></div>`
    )
    .join("");
  carouselNav.innerHTML = images
    .map(
      (img, index) =>
        `<span class='carousel-indicator' data-index='${index}'></span>`
    )
    .join("");
  updateCarousel();
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  caption.textContent = images[currentIndex].caption;
  document
    .querySelectorAll(".carousel-indicator")
    .forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function startAutoPlay() {
  if (autoPlayInterval) return; // Prevent multiple intervals
  autoPlayButton.textContent = "Stop Auto Play";
  resetTimer();
  autoPlayInterval = setInterval(() => {
    nextSlide();
    resetTimer();
  }, timerDuration * 1000);
}

function stopAutoPlay() {
  if (!autoPlayInterval) return; // Prevent stopping if already stopped
  autoPlayButton.textContent = "Start Auto Play";
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
  clearInterval(timerInterval);
  timerDisplay.textContent = "";
}

function resetTimer() {
  clearInterval(timerInterval);
  timer = timerDuration;
  timerDisplay.textContent = `Next slide in ${timer}s`;
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = `Next slide in ${timer}s`;
    if (timer <= 0) clearInterval(timerInterval);
  }, 1000);
}

function setTimerDuration(duration) {
  timerDuration = duration;
  if (autoPlayInterval) {
    stopAutoPlay();
    startAutoPlay();
  }
}

prevButton.addEventListener("click", () => {
  prevSlide();
  stopAutoPlay();
});
nextButton.addEventListener("click", () => {
  nextSlide();
  stopAutoPlay();
});

autoPlayButton.addEventListener("click", () => {
  if (autoPlayInterval) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
});

carouselNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("carousel-indicator")) {
    currentIndex = parseInt(e.target.dataset.index, 10);
    updateCarousel();
    stopAutoPlay();
  }
});

renderCarousel();
