const revealBtn = document.getElementById('revealBtn');
const girlSVG = document.getElementById('girlSVG');
const cloud = document.getElementById('cloud');
let revealed = false;

function animateConfettiBurst() {
  // Fire bursts from different origins to fill the screen
  let duration = 1.4 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 35, spread: 360, ticks: 60, zIndex: 9999, particleCount: 80 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(function() {
    let timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    // Confetti from random points at the top/left/right/bottom
    confetti(Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.05, 0.2) }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount: 30,
      origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.8, 0.95) }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount: 35,
      origin: { x: 0, y: randomInRange(0.2, 0.8) }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount: 35,
      origin: { x: 1, y: randomInRange(0.2, 0.8) }
    }));
  }, 200);
}

revealBtn.addEventListener('click', () => {
  if (revealed) return;
  revealed = true;
  // Full screen confetti burst
  animateConfettiBurst();
  // Reveal anime girl and cloud
  setTimeout(() => {
    girlSVG.classList.add('visible');
    setTimeout(() => {
      cloud.classList.add('visible');
    }, 500);
  }, 1200);
  // Hide button
  revealBtn.style.display = 'none';
});
