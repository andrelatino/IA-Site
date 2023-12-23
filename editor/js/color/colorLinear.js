// function linearColorBgIsSelected() {
//   const getColorID = document.getElementById('color-id').textContent;
//   const parentDiv = document.getElementById(getColorID);
//   if (parentDiv) {
//     const linearColorDiv = parentDiv.querySelector('[data-type="linear-color"]');
//     if (linearColorDiv) {
//       linearColorDiv.classList.remove("div-hidden");
//       linearColorDiv.classList.add("div-visible");
//     }
//     const childDivs = parentDiv.querySelectorAll('div[data-type]');
//     childDivs.forEach(function(childDiv) {
//       if (childDiv !== linearColorDiv) {
//         childDiv.classList.remove("div-visible");
//         childDiv.classList.add("div-hidden");
//       }
//     });
//   }
// }

// function linearColorThumbIsSelected() {
//   const parentDiv = document.getElementById('color-modal-box');
//   if (parentDiv) {
//     const linearColorDiv = parentDiv.querySelector('[data-type="linear-color"]');
//     if (linearColorDiv) {
//       linearColorDiv.classList.remove("div-hidden");
//       linearColorDiv.classList.add("div-visible");
//     }
//     const childDivs = parentDiv.querySelectorAll('div[data-type]');
//     childDivs.forEach(function(childDiv) {
//       if (childDiv !== linearColorDiv) {
//         childDiv.classList.remove("div-visible");
//         childDiv.classList.add("div-hidden");
//       }
//     });
//   }
// }

// document.querySelectorAll('#linear-coloris1').forEach(input => {
//   input.addEventListener('click', e => {
//       Coloris({
//       parent: '.mobile-box',
//       theme: 'default',
//       themeMode: 'dark',
//       alpha: true,
//       format: 'rgb',
//       wrap: false,
//       closeButton: true,
//       el: '#linear-coloris-input1'
//       });
//       document.addEventListener('coloris:pick', event => {
//           linearPickerColors(); 
//       });
//   });
// });

// document.querySelectorAll('#linear-coloris2').forEach(input => {
//   input.addEventListener('click', e => {
//       Coloris({
//       parent: '.mobile-box',
//       theme: 'default',
//       themeMode: 'dark',
//       alpha: true,
//       format: 'rgb',
//       wrap: false,
//       closeButton: true,
//       el: '#linear-coloris-input2'
//       });
//       document.addEventListener('coloris:pick', event => {
//         linearPickerColors(); 
//       });
//   });
// });

// function linearThumbShow() {
//   document.getElementById('solid-color-thumbnail').style.display = 'none';
//   document.getElementById('radial-color-thumbnail').style.display = 'none';
//   document.getElementById('linear-color-thumbnail').style.display = 'block';
// }

// var linearGradientCSS;
// var fullDegrees;

// function linearPickerColors(degree) {
//   //SET COLOR
//   const linearColorDiv1 = document.getElementById("linear-coloris1");
//   const linearColorDiv2 = document.getElementById("linear-coloris2");

//   const linearColor1 = window.getComputedStyle(linearColorDiv1).getPropertyValue("color");
//   const linearColor2 = window.getComputedStyle(linearColorDiv2).getPropertyValue("color");
//   //THUMB
//   const linearGradientCSS = createLinearGradient(linearColor1, linearColor2);

//   const linearColorThumbnail = document.getElementById('linear-color-thumbnail');
//   linearColorThumbnail.style.background = linearGradientCSS;

//   const linearGetBgId = document.getElementById('linear-bg-id');
//   const linearBgId = linearGetBgId.textContent;
//   const linearColorBg = document.getElementById(linearBgId);
//   linearColorBg.style.background = linearGradientCSS;

//   console.log('linearGradientCSS: ' + linearGradientCSS);

// }


// function createLinearGradient(color1, color2) {
//   return `linear-gradient(${fullDegrees},${color1},${color2})`; 
// }


// const rangeInput = document.getElementById("linear-range");
// const marker = document.getElementById("marker");
// const linearColorThumbnail = document.getElementById('linear-color-thumbnail');
// const linearColorBg = document.getElementById('JBDjqqQ');


// let timeoutId;

// rangeInput.addEventListener("input", function() {
//   const degrees = this.value;
//   marker.textContent = degrees;
//   var fullDegrees = degrees+'deg';
//   console.log('fullDegrees: '+fullDegrees);

//   clearTimeout(timeoutId);

//   // Espera un breve retraso antes de actualizar el fondo
//   timeoutId = setTimeout(() => {

//     const currentBackground = linearColorThumbnail.style.background;
//     const updatedBackground = currentBackground.replace(/linear-gradient\(\d+deg/, `linear-gradient(${fullDegrees}`);
//     linearColorThumbnail.style.background = updatedBackground;
    
    
//   }, 300); // 300 milisegundos (ajusta este valor según sea necesario)
// });




// Funciones para mostrar y ocultar elementos relacionados con el color lineal
function linearColorBgIsSelected() {
  const getColorID = document.getElementById('color-id').textContent;
  const parentDiv = document.getElementById(getColorID);
  toggleVisibility(parentDiv, '[data-type="linear-color"]');
}

function linearColorThumbIsSelected() {
  const parentDiv = document.getElementById('color-modal-box');
  toggleVisibility(parentDiv, '[data-type="linear-color"]');
}

function toggleVisibility(parentDiv, selector) {
  if (parentDiv) {
    const targetDiv = parentDiv.querySelector(selector);
    if (targetDiv) {
      targetDiv.classList.remove("div-hidden");
      targetDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== targetDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

// Manejadores de eventos para los selectores de color
document.querySelectorAll('#linear-coloris1').forEach(input => {
  input.addEventListener('click', e => colorPickerHandler('#linear-coloris-input1'));
});

document.querySelectorAll('#linear-coloris2').forEach(input => {
  input.addEventListener('click', e => colorPickerHandler('#linear-coloris-input2'));
});

function colorPickerHandler(elementId) {
  Coloris({
    parent: '.mobile-box',
    theme: 'default',
    themeMode: 'dark',
    alpha: true,
    format: 'rgb',
    wrap: false,
    closeButton: true,
    el: elementId
  });
  document.addEventListener('coloris:pick', event => {
    linearPickerColors(); 
  });
}

// Función para mostrar el thumbnail del color lineal
function linearThumbShow() {
  document.getElementById('solid-color-thumbnail').style.display = 'none';
  document.getElementById('radial-color-thumbnail').style.display = 'none';
  document.getElementById('linear-color-thumbnail').style.display = 'block';
}

// Variables para manejar el gradiente lineal y el ángulo
var fullDegrees = '0deg'; // Ángulo inicial

// Función para establecer los colores del picker
function linearPickerColors() {
  const linearColorDiv1 = document.getElementById("linear-coloris1");
  const linearColorDiv2 = document.getElementById("linear-coloris2");

  const linearColor1 = window.getComputedStyle(linearColorDiv1).getPropertyValue("color");
  const linearColor2 = window.getComputedStyle(linearColorDiv2).getPropertyValue("color");

  const linearGradientCSS = createLinearGradient(linearColor1, linearColor2);

  updateBackground('linear-color-thumbnail', linearGradientCSS);
  updateBackground(getLinearBgId(), linearGradientCSS);

  console.log('linearGradientCSS: ' + linearGradientCSS);
}

function createLinearGradient(color1, color2) {
  return `linear-gradient(${fullDegrees},${color1},${color2})`; 
}

function getLinearBgId() {
  const linearGetBgId = document.getElementById('linear-bg-id');
  return linearGetBgId.textContent;
}

function updateBackground(elementId, style) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.background = style;
  }
}

// Control deslizante para ajustar el ángulo del gradiente
const rangeInput = document.getElementById("linear-range");
const marker = document.getElementById("marker");

let timeoutId;
rangeInput.addEventListener("input", function() {
  fullDegrees = this.value + 'deg';
  marker.textContent = this.value + '°'; // Actualizado para mostrar el símbolo de grados

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    linearPickerColors(); // Actualiza los colores con el nuevo ángulo
  }, 300);
});
