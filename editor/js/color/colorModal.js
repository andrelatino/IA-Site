 
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
        const getCorloId = document.getElementById("color-id").textContent;
        const getColorFromBG = document.getElementById(getCorloId);
        const addColorToThumb = document.getElementById("color-all");

        if (getColorFromBG) {
            var currentColor = getColorFromBG.style.backgroundColor;
            addColorToThumb.style.background = currentColor;
        }
    }
    
       
    function addBackgroundColor(color) {
        const getColorId = document.getElementById("color-id").textContent;
        const addColorToBG = document.getElementById(getColorId);
        addColorToBG.style.background = color;
        
        const addColorToThumb = document.getElementById("color-all");
        addColorToThumb.style.background = color;

    }