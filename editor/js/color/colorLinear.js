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

//LINEAR
document.querySelectorAll('#linear-coloris').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#linear-coloris-input',
      });
      document.addEventListener('coloris:pick', event => {
        linearPickerColor();
      });
  });
});

function linearThumbShow() {
  //THUMB
  document.getElementById('solid-color-thumbnail').style.display = 'none';
  document.getElementById('radial-color-thumbnail').style.display = 'none';
  document.getElementById('linear-color-thumbnail').style.display = 'block';
}

function linearPickerColor() {
  //SET COLOR
  const divElement = document.getElementById("linear-coloris");
  const colorValue = window.getComputedStyle(divElement).getPropertyValue("color");
  //THUMB
  const linearColorThumbnail = document.getElementById('linear-color-thumbnail');
  linearColorThumbnail.style.background = colorValue;
  //BG
  const linearGetBgID = document.getElementById('linear-bg-id').textContent;
  const linearColorBG = document.getElementById(linearGetBgID);
  linearColorBG.style.background = colorValue;
}
function linearReadOnlyTrue() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('linear-coloris-input');
  clrColorValue.readOnly = true; 
  coloris.readOnly = true;
}
function linearReadOnlyFalse() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('linear-coloris-input');
  clrColorValue.readOnly = false; 
  coloris.readOnly = false;
}
