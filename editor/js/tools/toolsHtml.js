function toolsHtml(){
    var modalHtml = `
      <div id="toolbarModal" class="modal tools-modal"> 
        <div class="tools-content">

            
            <div id="toolbar-header"> 
              <button id="toolbar-drag">
                <img src="./assets/svg/icons/drag.svg">
              </button>
              <div class='toolbarTitles'>
                <span>Section ID: </span><span id="toolbarSectionID"></span>
              </div>
              <button onClick="toolsCloseModal();" class="toolbar-close">
                <img src="./assets/svg/icons/close.svg">
              </button>

            </div>

            <div id="toolbar-buttons"> 

              <button class="delete-section" onclick="deleteSection()">
                <img src="./assets/svg/icons/delete.svg">
              </button> 

              <button class="export-section" onclick="exportSection()">
                <img src="./assets/svg/icons/export.svg">
              </button>

              <button class="duplicate-section" onclick="duplicateSection()">
                <img src="./assets/svg/icons/duplicate.svg">
              </button>

              <button class="move-down-section" onclick="moveDownSection()">
                <img src="./assets/svg/icons/down.svg">
              </button>

              <button class="move-up-section" onclick="moveUpSection()">
                <img src="./assets/svg/icons/up.svg">
              </button>

              <button class="image-section" onclick="sectionImage(); imageAllButton()">
                <img src="./assets/svg/icons/image.svg">
              </button>

            </div>
      </div>
        
    </div>
        
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}
toolsHtml();