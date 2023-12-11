function linearColorBgIsSelected() {
  const getColorID = document.getElementById('color-id').textContent;
  const parentDiv = document.getElementById(getColorID);
  if (parentDiv) {
    const linearColorDiv = parentDiv.querySelector('[data-type="linear-color"]');
    if (linearColorDiv) {
      linearColorDiv.classList.remove("div-hidden");
      linearColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== linearColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

function linearColorThumbIsSelected() {
  const parentDiv = document.getElementById('color-modal-box');
  if (parentDiv) {
    const linearColorDiv = parentDiv.querySelector('[data-type="linear-color"]');
    if (linearColorDiv) {
      linearColorDiv.classList.remove("div-hidden");
      linearColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== linearColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

document.querySelectorAll('#linear-coloris1').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#linear-coloris-input1'
      });
      document.addEventListener('coloris:pick', event => {
          linearPickerColors(); 
      });
  });
});

document.querySelectorAll('#linear-coloris2').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#linear-coloris-input2'
      });
      document.addEventListener('coloris:pick', event => {
        linearPickerColors(); 
      });
  });
});

function linearThumbShow() {
  document.getElementById('solid-color-thumbnail').style.display = 'none';
  document.getElementById('radial-color-thumbnail').style.display = 'none';
  document.getElementById('linear-color-thumbnail').style.display = 'block';
}

var linearGradientCSS;
var fullDegrees = '0deg';

function linearPickerColors(degree) {
  //SET COLOR
  const linearColorDiv1 = document.getElementById("linear-coloris1");
  const linearColorDiv2 = document.getElementById("linear-coloris2");

  const linearColor1 = window.getComputedStyle(linearColorDiv1).getPropertyValue("color");
  const linearColor2 = window.getComputedStyle(linearColorDiv2).getPropertyValue("color");
  //THUMB
  const linearGradientCSS = createLinearGradient(linearColor1, linearColor2);

  const linearColorThumbnail = document.getElementById('linear-color-thumbnail');
  linearColorThumbnail.style.background = linearGradientCSS;

  const linearGetBgId = document.getElementById('linear-bg-id');
  const linearBgId = linearGetBgId.textContent;
  const linearColorBg = document.getElementById(linearBgId);
  linearColorBg.style.background = linearGradientCSS;

  console.log('linearGradientCSS: ' + linearGradientCSS);

}


function createLinearGradient(color1, color2) {
  return `linear-gradient(0deg,${color1},${color2})`; 
}



const rangeInput = document.getElementById("linear-range");
const marker = document.getElementById("marker");
const linearColorThumbnail = document.getElementById('linear-color-thumbnail');
const linearColorBg = document.getElementById('JBDjqqQ');


let timeoutId;

rangeInput.addEventListener("input", function() {
  const degrees = this.value;
  marker.textContent = degrees;
  var fullDegrees = degrees+'deg';
  console.log('fullDegrees: '+fullDegrees);

  clearTimeout(timeoutId);

  // Espera un breve retraso antes de actualizar el fondo
  timeoutId = setTimeout(() => {

    const currentBackground = linearColorThumbnail.style.background;
    const updatedBackground = currentBackground.replace(/linear-gradient\(\d+deg/, `linear-gradient(${fullDegrees}`);
    linearColorThumbnail.style.background = updatedBackground;
    
    
  }, 300); // 300 milisegundos (ajusta este valor según sea necesario)
});


