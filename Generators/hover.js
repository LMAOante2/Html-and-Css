const hoverBox = document.getElementById('hoverBox');
const hoverCSS = document.getElementById('hoverCSS');

const hoverBg = document.getElementById('hoverBg');
const hoverScale = document.getElementById('hoverScale');
const growCheck = document.getElementById('growCheck');
const liftCheck = document.getElementById('liftCheck');

// New inputs for box-shadow (glow)
const glowH = document.getElementById('glowH');
const glowV = document.getElementById('glowV');
const glowBlur = document.getElementById('glowBlur');
const glowColor = document.getElementById('glowColor');

function updateHoverEffect() {
  const bg = hoverBg.value;
  const scale = hoverScale.value / 100;
  const grow = growCheck.checked;
  const lift = liftCheck.checked;

  const glow = `${glowH.value}px ${glowV.value}px ${glowBlur.value}px ${glowColor.value}`;

  let transform = '';
  if (grow) transform += ` scale(${scale})`;
  if (lift) transform += ` translateY(-5px)`;

  hoverBox.style.transition = 'all 0.3s ease';

  hoverBox.onmouseenter = () => {
    hoverBox.style.backgroundColor = bg;
    hoverBox.style.transform = transform.trim();
    hoverBox.style.boxShadow = glow;
  };

  hoverBox.onmouseleave = () => {
    hoverBox.style.backgroundColor = '';
    hoverBox.style.transform = 'scale(1) translateY(0)';
    hoverBox.style.boxShadow = '';
  };

  hoverCSS.textContent =
`.your-element:hover {
  background-color: ${bg};
  transform:${transform ? ' ' + transform.trim() : ' none'};
  box-shadow: ${glow};
}`;
}

function copyHoverCSS() {
  navigator.clipboard.writeText(hoverCSS.textContent);
  alert("Hover CSS copied!");
}

[
  hoverBg, hoverScale, growCheck, liftCheck,
  glowH, glowV, glowBlur, glowColor
].forEach(input =>
  input.addEventListener('input', updateHoverEffect)
);

updateHoverEffect();
