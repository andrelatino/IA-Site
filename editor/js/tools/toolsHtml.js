function toolsHtml(){
    var modalHtml = `
      <div id="toolbarModal" class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
              
              <div id="toolbar-header"> 
                <button id="toolbar-drag">
                  <img src="./assets/svg/icons/drag.svg">
                </button>
                <div class='toolbarTitles'>
                  <span>Section Settings: </span><span id="toolbarSectionID"></span>
                </div>
                <button onClick="toolsCloseModal();" class="toolbar-close">
                  <img src="./assets/svg/icons/close.svg">
                </button>
              </div>

              <div id="toolbar-buttons"> 

                <button class="delete-section" onclick="deleteSection()">
                  <img src="./assets/svg/icons/delete.svg">
                  <span class="tooltiptext">Delete</span>
                </button> 

                <button class="export-section" onclick="exportSection()">
                  <img src="./assets/svg/icons/export.svg">
                  <span class="tooltiptext">Export</span>
                </button>

                <button class="duplicate-section" onclick="duplicateSection()">
                  <img src="./assets/svg/icons/duplicate.svg">
                  <span class="tooltiptext">Clone</span>
                </button>

                <button class="image-section" onclick="flipCardOnClick()">
                  <img src="./assets/svg/icons/image.svg">
                  <span class="tooltiptext">Bg</span>
                </button>

                <button class="move-down-section" onclick="moveDownSection()">
                  <img src="./assets/svg/icons/down.svg">
                  <span class="tooltiptext">Down</span>
                </button>

                <button class="move-up-section" onclick="moveUpSection()">
                  <img src="./assets/svg/icons/up.svg">
                  <span class="tooltiptext">Up</span>
                </button>

                <button onclick="cssEditorShow();">
                  <img src="./assets/svg/icons/edit.svg">
                  <span class="tooltiptext">Css</span>
                </button>

                <button>
                  <img src="./assets/svg/icons/tools.svg">
                  <span class="tooltiptext">Tools</span>
                </button>

              </div>
        </div>
      
        <div class="flip-card-back">
          <div id="toolbar-header"> 
                <button id="toolbar-drag" onclick="flipCardOnClick()">
                  <img src="./assets/svg/icons/rotate.svg">
                </button>
                <div class='toolbarTitles'>Select Background</div>
                <button onClick="toolsCloseModal();" class="toolbar-close">
                  <img src="./assets/svg/icons/close.svg">
                </button>
          </div>
          <div class="flip-card-back-buttons"> 

                <button class="delete-section">
                  <img src="./assets/svg/icons/bg-color.svg">
                  <span class="tooltiptext">Background Color</span>
                </button> 

                <button class="export-section">
                  <img src="./assets/svg/icons/bg-image.svg">
                  <span class="tooltiptext">Background Image</span>
                </button>

                <button class="duplicate-section">
                  <img src="./assets/svg/icons/bg-video.svg">
                  <span class="tooltiptext">Background Video</span>
                </button>

                <button class="edit-background">
                  <img src="./assets/svg/icons/edit.svg">
                  <span class="tooltiptext">Edit Background</span>
                </button>
        </div>
        </div>
      </div>
    </div>
        
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}
toolsHtml();

// Define a function to toggle the class on click
function flipCardOnClick() {
  const flipCardInner = document.querySelector('.flip-card-inner');
    // Toggle the class to rotate or reset
    if (flipCardInner.style.transform === 'rotateY(180deg)') {
      flipCardInner.style.transform = 'rotateY(0deg)';
    } else {
      flipCardInner.style.transform = 'rotateY(180deg)';
    }
  }

// Call the function to enable the flip effect on click
// flipCardOnClick();