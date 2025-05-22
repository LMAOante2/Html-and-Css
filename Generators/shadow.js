const box = document.getElementById("shadowBox");
const output = document.getElementById("shadowOutput");

const inputs = {
  hOffset: document.getElementById("hOffset"),
  vOffset: document.getElementById("vOffset"),
  blur: document.getElementById("blur"),
  spread: document.getElementById("spread"),
  color: document.getElementById("color"),
};

function updateShadow() {
  const h = inputs.hOffset.value;
  const v = inputs.vOffset.value;
  const b = inputs.blur.value;
  const s = inputs.spread.value;
  const c = inputs.color.value;

  const boxShadow = `${h}px ${v}px ${b}px ${s}px ${c}`;
  box.style.boxShadow = boxShadow;
  output.textContent = `box-shadow: ${boxShadow};`;
}

Object.values(inputs).forEach(input => input.addEventListener('input', updateShadow));

function copyCSS() {
  navigator.clipboard.writeText(output.textContent);
  alert("CSS copied!");
}

updateShadow();
