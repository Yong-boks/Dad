const revealBtn = document.getElementById('revealBtn');
const girlSVG = document.getElementById('girlSVG');
const cloud = document.getElementById('cloud');
let revealed = false;

// Animate girl's shoulders gently
function animateShoulders() {
  const shoulders = document.getElementById("shoulders");
  let t = 0;
  setInterval(() => {
    t += 0.05;
    const y = 4 * Math.sin(t);
    shoulders.setAttribute("transform", `translate(0,${y})`);
  }, 50);
}

revealBtn.addEventListener('click', () => {
  if (revealed) return;
  revealed = true;
  // Fire confetti
  for(let i=0; i<3; ++i) {
    setTimeout(() => {
      confetti({
        particleCount: 85,
        spread: 75 + 30*i,
        origin: { y: 0.2 + 0.1*i }
      });
    }, i*250);
  }
  // Reveal girl and cloud
  setTimeout(() => {
    girlSVG.classList.add('visible');
    setTimeout(() => {
      cloud.classList.add('visible');
    }, 500);
  }, 600);
  // Hide button
  revealBtn.style.display = 'none';
  animateShoulders();
});
