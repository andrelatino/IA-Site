 
function colorModal() {
    // alert(pictureID);
    var editorDiv = document.getElementById("color-modal");
  
    if (editorDiv) {
      var content = `
      
      <div id="color-container">
  
            <div id="color-github-buttons">
            
              <button id="color-drag"><img src="./assets/svg/icons/drag.svg"></button>
              
              <button id="color-btn-all" onclick="colorAllButton();">PC</button>
              
              <button onclick="hideColorModal(); closeColorSidebar()" class="color-close">
                <img src="./assets/svg/icons/close.svg">
              </button>
                       
            </div>
            
            
            <div id="color-all"></div>

            <div id = "color-libraries">
              <button id="colorWebSidebar" onclick="openColorSidebar()">
                <span class="tooltiptext-right">Solid</span>	
              </button>
              
              <button id="colorGithubSidebar">
                <span class="tooltiptext-right">Linear</span>
              </button>	

              <button id="colorGithubSidebar">
                <span class="tooltiptext-right">Radial</span>
              </button>	
            </div>  
            
        </div>

            <button onclick="hideColorModal(); closeColorSidebar()" class="color-close">
                <img src="./assets/svg/icons/close.svg">
            </button>
            <div id = "coloris-div">

                <div class="clr-field" style="color: rgb(255, 0, 0);">
                    <button id="botoncito" type="button" aria-labelledby="clr-open-label"></button>
                    <input id="coloris" type="text" class="coloris botoncito" value="rgb(255, 0, 0)">
                </div>
                
            </div>
      </div>  
      `;
      
      editorDiv.innerHTML = content;
      var imageModal = document.querySelector("#color-modal");
      imageModal.className = "mobile-box";

      
  
    } else {
      console.error("Editor element not found.");
    }
  }

  colorModal();
  
    function showColorModal() {
      var divModal = document.getElementById("color-modal");
      divModal.style.display = "grid";
    }
    function hideColorModal() {
      var divModal = document.getElementById("color-modal");
      divModal.style.display = "none";
    }

      
    function getBackgroundColor() {
        const getColorId = document.getElementById("color-id").textContent;  // Assuming 'color-id' is correct
        const getColorFromBG = document.getElementById(getColorId);
        const addColorToThumb = document.getElementById("color-all");

        var divElement = document.querySelector('.clr-field');
        divElement.style.color = 'rgb(255, 0, 0)'; // Change to the desired color
        
    
        if (getColorFromBG) {
            var currentColor = getColorFromBG.style.backgroundColor;
            addColorToThumb.style.backgroundColor = currentColor;
            var divElement = document.querySelector('.clr-field');
            divElement.style.color = currentColor; // Change to the desired color

            var inputElement = document.getElementById('coloris');
            inputElement.value = currentColor; // Change to the desired RGB color value

            console.log(currentColor);
            
        } else {
            // Handle the case where one or more elements are not found
            console.error("One or more elements are not found.");
        }
    }
    
    
       
    function addBackgroundColor(color) {
        const getColorId = document.getElementById("color-id").textContent;
        const addColorToBG = document.getElementById(getColorId);
        addColorToBG.style.background = color;
        
        const addColorToThumb = document.getElementById("color-all");
        addColorToThumb.style.background = color;

    }

 
    document.querySelectorAll('.clr-field').forEach(input => {
        input.addEventListener('click', e => {
            Coloris({
                parent: '.mobile-box',
                theme: 'default',
                themeMode: 'dark',
                alpha: true,
                format: 'rgb',
                wrap: true,
                closeButton: true,
                el: '.botoncito'
            });
    
                document.addEventListener('coloris:pick', event => {
                    const addColor =  document.getElementById('color-all');
                    const getColor = event.detail.color;
                    addColor.style.background = getColor;
                    readOnlyTrue();
                    addBackgroundColor(getColor);
                    console.log('New color', event.detail.color);

                });

        });
    });
    

    
    function readOnlyTrue() {
        const clrColorValue = document.getElementById('clr-color-value');
        const coloris = document.getElementById('coloris');
        clrColorValue.readOnly = true; 
        coloris.readOnly = true;
    }
    
    function readOnlyFalse() {
        const clrColorValue = document.getElementById('clr-color-value');
        const coloris = document.getElementById('coloris');
        clrColorValue.readOnly = false; 
        coloris.readOnly = false;
    }
        var clrClose = document.getElementById("clr-close");
        clrClose.onclick = function() {
            readOnlyTrue(); 
        };
        clrClose.addEventListener("click", handleButtonClick);


        var botoncitoOnclick = document.getElementById("coloris");
        botoncitoOnclick.onclick = function() {
            readOnlyTrue(); 
        };
    
        const clrColorValue = document.getElementById('clr-color-value');
        const coloris = document.getElementById('coloris');
        clrColorValue.readOnly = true; 
        coloris.readOnly = true;

        // let clickCount = 0;
        // const inputElementXX = document.getElementById("clr-color-value");
        
        // inputElementXX.addEventListener("click", () => {
        //   clickCount++;
        //   if (clickCount === 2) {
        //     inputElementXX.removeAttribute("readonly");
        //   }
        // });
    


    