const preview = document.getElementById('preview');
const cssOutput = document.getElementById('cssOutput');
const copyBtn = document.getElementById('copyBtn');

// Get all controls
const controls = {
  bgColor: document.getElementById('bgColor'),
  textColor: document.getElementById('textColor'),
  fontSize: document.getElementById('fontSize'),
  fontFamily: document.getElementById('fontFamily'),
  padding: document.getElementById('padding'),
  borderRadius: document.getElementById('borderRadius'),
  border: document.getElementById('border'),
  boxShadow: document.getElementById('boxShadow'),
  hoverBg: document.getElementById('hoverBg'),
  transition: document.getElementById('transition')
};

function updateStyles() {
  const styles = {
    backgroundColor: controls.bgColor.value,
    color: controls.textColor.value,
    fontSize: `${controls.fontSize.value}px`,
    fontFamily: controls.fontFamily.value,
    padding: `${controls.padding.value}px`,
    borderRadius: `${controls.borderRadius.value}px`,
    border: controls.border.value,
    boxShadow: controls.boxShadow.value,
    transition: `all ${controls.transition.value}ms ease`
  };

  // Apply styles to preview
  Object.assign(preview.style, styles);

  // Set hover style
  const hoverColor = controls.hoverBg.value;
  preview.onmouseenter = () => preview.style.backgroundColor = hoverColor;
  preview.onmouseleave = () => preview.style.backgroundColor = controls.bgColor.value;

  // Output generated CSS
  let cssCode = '';
  for (const [key, value] of Object.entries(styles)) {
    if (value) {
      cssCode += `${camelToKebab(key)}: ${value};\n`;
    }
  }
  cssOutput.textContent = cssCode;
}

function camelToKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// Add event listeners to all inputs
Object.values(controls).forEach(control =>
  control.addEventListener('input', updateStyles)
);

// Copy button
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cssOutput.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy CSS", 1500);
});

// Initial styles
updateStyles();
