const animBox = document.getElementById('animBox');
const animationType = document.getElementById('animationType');
const duration = document.getElementById('duration');
const animCSS = document.getElementById('animCSS');
const playBtn = document.getElementById('playBtn');
const copyBtn = document.getElementById('copyBtn');

const keyframes = {
  bounce: `
@keyframes bounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-30px); }
}`,
  spin: `
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}`,
  grow: `
@keyframes grow {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.3); }
}`,
  shrink: `
@keyframes shrink {
0%, 100% { transform: scale(1.3); }
50% { transform: scale(1); }
}`,
  breathe: `
@keyframes breathe {
0%, 100% { transform: scale(1); opacity: 0.8; }
50% { transform: scale(1.1); opacity: 1; }
}`
};

function updateCSSCode() {
  const type = animationType.value;
  const time = duration.value;

  animCSS.textContent =
`${keyframes[type]}

.your-element {
animation: ${type} ${time}s infinite;
}`;
}

function playAnimation() {
  const type = animationType.value;
  const time = duration.value;

  // Remove animation
  animBox.style.animation = 'none';

  // Trigger reflow
  void animBox.offsetWidth;

  // Apply animation once (infinite removed for demo play)
  animBox.style.animation = `${type} ${time}s infinite ease-in-out`;
}

function copyAnimCSS() {
  navigator.clipboard.writeText(animCSS.textContent);
  alert("CSS copied!");
}

animationType.addEventListener('change', updateCSSCode);
duration.addEventListener('input', updateCSSCode);
playBtn.addEventListener('click', playAnimation);
copyBtn.addEventListener('click', copyAnimCSS);

updateCSSCode();