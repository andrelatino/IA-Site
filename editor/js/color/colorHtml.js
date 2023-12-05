 
function colorHtml() {
    // alert(pictureID);
    var editorDiv = document.getElementById("color-modal");
  
    if (editorDiv) {
      var content = `
      
      <div id="color-modal-box">
            
            <div id="solid-color-thumbnail" data-type="solid-color">
                <div id = "solid-color-picker">
                    <div id="solid-coloris" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="solid-coloris-btn"></button>
                        <input id="solid-coloris-input" type="text" data-coloris class="coloris solid-coloris" value="rgb(255, 0, 0) ">
                    </div> 
                </div>
            </div>

            <div id="radial-color-thumbnail" data-type="radial-color">
                <div id = "radial-color-picker">
                    <div id="radial-coloris" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="radial-coloris-btn"></button>
                        <input id="radial-coloris-input" type="text" data-coloris class="coloris radial-coloris" value="rgb(255, 0, 0) ">
                    </div> 
                </div>

                <div id = "radial-color-picker2">
                    <div id="radial-coloris2" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="radial-coloris-btn2"></button>
                        <input id="radial-coloris-input2" type="text" data-coloris class="coloris radial-coloris" value="rgb(255, 0, 0) ">
                    </div> 
                </div>
            </div>

            <div id="linear-color-thumbnail" data-type="linear-color">
                <div id = "linear-color-picker">
                    <div id="linear-coloris" class="clr-field" style="color: rgb(255, 0, 0);">
                        <button id="linear-coloris-btn"></button>
                        <input id="linear-coloris-input" type="text" data-coloris class="coloris linear-coloris" value="rgb(255, 0, 0) ">
                    </div> 
                </div>
            </div>

            <div id = "color-modal-buttons">
              <button id="solid-color-btn" onclick="solidColorBgIsSelected(); solidColorThumbIsSelected(); solidColorButton()">Solid</button>
              <button id="radial-color-btn" onclick="radialColorBgIsSelected(); radialColorThumbIsSelected(); radialColorButton()">Radial</button>	
              <button id="linear-color-btn" onclick="linearColorBgIsSelected(); linearColorThumbIsSelected(); linearColorButton()">Linear</button> 
              <p id="solid-bg-id"></p>
              <p id="radial-bg-id"></p>
              <p id="linear-bg-id"></p>        	    	     	
            </div>
            <button onclick="hideColorModal(); closeColorSidebar()" class="color-close"><img src="./assets/svg/icons/close.svg"></button>          
      </div>
      
      
      `;
      
      editorDiv.innerHTML = content;
      var imageModal = document.querySelector("#color-modal");
      imageModal.className = "mobile-box";

    } else {
      console.error("Editor element not found.");
    }
  }

  colorHtml();

  function showColorModal() {
    var divModal = document.getElementById("color-modal");
    divModal.style.display = "grid";
  }
  function hideColorModal() {
    var divModal = document.getElementById("color-modal");
    divModal.style.display = "none";
  }
  

//SOLID
document.querySelectorAll('#solid-coloris').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#solid-coloris-input',
      });
      document.addEventListener('coloris:pick', event => {
        solidPickerColor();
      });
  });
});

function solidThumbShow() {
  //THUMB
  document.getElementById('solid-color-thumbnail').style.display = 'block';
  document.getElementById('radial-color-thumbnail').style.display = 'none';
  document.getElementById('linear-color-thumbnail').style.display = 'none';
}

function solidPickerColor() {
  //SET COLOR
  const divElement = document.getElementById("solid-coloris");
  const colorValue = window.getComputedStyle(divElement).getPropertyValue("color");
  //THUMB
  const solidColorThumbnail = document.getElementById('solid-color-thumbnail');
  solidColorThumbnail.style.background = colorValue;
  //BG
  const solidGetBgID = document.getElementById('solid-bg-id').textContent;
  const solidColorBG = document.getElementById(solidGetBgID);
  solidColorBG.style.background = colorValue;
}
function solidReadOnlyTrue() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('solid-coloris-input');
  clrColorValue.readOnly = true; 
  coloris.readOnly = true;
}
function solidReadOnlyFalse() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('solid-coloris-input');
  clrColorValue.readOnly = false; 
  coloris.readOnly = false;
}

//RADIAL

document.querySelectorAll('#radial-coloris').forEach(input => {
  input.addEventListener('click', e => {
      Coloris({
      parent: '.mobile-box',
      theme: 'default',
      themeMode: 'dark',
      alpha: true,
      format: 'rgb',
      wrap: false,
      closeButton: true,
      el: '#radial-coloris-input'
      });
      document.addEventListener('coloris:pick', event => {
        radialPickerColor();
      });
  });
});

function radialThumbShow() {
  document.getElementById('solid-color-thumbnail').style.display = 'none';
  document.getElementById('radial-color-thumbnail').style.display = 'block';
  document.getElementById('linear-color-thumbnail').style.display = 'none';
}

function radialPickerColor() {
  //SET COLOR
  const divElement = document.getElementById("radial-coloris");
  const colorValue = window.getComputedStyle(divElement).getPropertyValue("color");
  //THUMB
  const radialColorThumbnail = document.getElementById('radial-color-thumbnail');
  radialColorThumbnail.style.background = colorValue;
  //BG
  const radialGetBgID = document.getElementById('radial-bg-id').textContent;
  const radialColorBG = document.getElementById(radialGetBgID);
  radialColorBG.style.background = colorValue;
}
function radialReadOnlyTrue() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('radial-coloris-input');
  clrColorValue.readOnly = true; 
  coloris.readOnly = true;
}
function radialReadOnlyFalse() {
  const clrColorValue = document.getElementById('clr-color-value');
  const coloris = document.getElementById('radial-coloris-input');
  clrColorValue.readOnly = false; 
  coloris.readOnly = false;
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