let clickTimeout;

function openPortfolio() {
  const portfolioWindow = document.getElementById("portfolio-window");
  portfolioWindow.style.display = "block";
  portfolioWindow.classList.add("open-animation");
}

function closePortfolio() {
  const portfolioWindow = document.getElementById("portfolio-window");
  portfolioWindow.style.display = "none";
  portfolioWindow.classList.remove("open-animation");
}

function minimizePortfolio() {
  const portfolioWindow = document.getElementById("portfolio-window");
  portfolioWindow.style.display = "none";
  portfolioWindow.classList.remove("open-animation");
}

function playClickSound() {
  const clickSound = document.getElementById("click-sound");
  clickSound.play();
}

function handleClick(event) {
  if (clickTimeout) {
    clearTimeout(clickTimeout);
    clickTimeout = null;
    playClickSound();
    playClickSound(); // Play sound twice for double click
    if (event.target.classList.contains('desktop-icon')) {
      openPortfolio();
    }
  } else {
    playClickSound();
    clickTimeout = setTimeout(() => {
      clickTimeout = null;
    }, 300); // 300ms timeout to detect double click
  }
}

document.querySelectorAll('a, button, .desktop-icon').forEach(element => {
  element.addEventListener('click', handleClick);
  element.addEventListener('dblclick', (event) => {
    event.preventDefault();
    // No action needed here as double-click is handled in single click with timer
  });
});
