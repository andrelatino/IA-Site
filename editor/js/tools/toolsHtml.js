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

              <button class="image-section" onclick="sectionImage(); imageAllButton()">
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

              <button onclick="editorShow();">
                <img src="./assets/svg/icons/edit.svg">
                <span class="tooltiptext">Css</span>
              </button>

              

            </div>
      </div>
        
    </div>
        
    `;  
    // add the modal to the document body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}
toolsHtml();