function addCustomHTML() {
    var editorDiv = document.getElementById("editor");
    if (editorDiv) {
      var content = `
      <div id="editor-content">
        <div id="editor-header" style="display:none; grid-template-columns: 1fr 1fr 1fr;">
            
        <button id="editor-css"><img src="./assets/svg/icons/drag.svg">Visual</button>
        <button id="editor-css"><img src="./assets/svg/icons/drag.svg">Css</button>
        <button id="editor-css"><img src="./assets/svg/icons/drag.svg">Class</button>
            
        </div>
        <div id="editor-css"> 
                  
            <div id="editor-buttons">
                <button id="editor-drag"><img src="./assets/svg/icons/drag.svg"></button>
                <button id="all-button" onclick="loadALLCss()">ALL</button>
                <button id="xl-button" onclick="loadXLCss()">XL</button>
                <button id="l-button" onclick="loadLCss()">L</button>
                <button id="m-button" onclick="loadMCss()">M</button>
                <button id="s-button" onclick="loadSCss()">S</button>
                <button id="xs-button" onclick="loadXSCss()">XS</button>
                
            </div>
            <div id="editor-css-inputs">
                <p class ="inputCssRules" id="inputCssRules">a#YPsfcED {</span></p> 
                <textarea id="all-textarea" autocomplete="off"></textarea>
                <textarea id="xl-textarea" autocomplete="off"></textarea>
                <textarea id="l-textarea" autocomplete="off"></textarea>
                <textarea id="m-textarea" autocomplete="off"></textarea>
                <textarea id="s-textarea" autocomplete="off"></textarea>
                <textarea id="xs-textarea" autocomplete="off"></textarea>
                <p class="inputCssRules">}</p>
            </div>	
        </div>
        <div id="editor-list">
            <div id ="editor-list-title"> 
              <button class="editor-close" onclick="editorClose();">
                <img src="./assets/svg/icons/close.svg">
              </button>  
            </div>
            <div class="editor-list-content"></div>
        </div>

        <div class="inputs-ids">
            <p class="inputTitleColor" id="elementsTagId"><span id="elementTag">#</span><span id="elementID-text"></span><span>{</span></p> 
            <p class="inputTitleColor" style="display:block;"><span>Size:</span> <span id="buttonID-text">ALL</span> </p>
            <p class="inputTitleColor" style="display:block;"><span>Style:</span> <span id="styleID-text" ></span> </p>
            <p class="inputTitleColor" style="display:block;"><span>Section:</span> <span id="sectionID-text"></span> </p>
            		 
		    </div>
              
      </div>
      `;
      editorDiv.innerHTML = content;
    } else {
      console.error("Editor element not found.");
    }
  }
  addCustomHTML();
  var editor = document.querySelector("#editor");
  var editorDrag = document.querySelector("#editor-drag");
  makeElementDraggable(editor, editorDrag);

//   <button onclick="editorClose();" class="close-button">
//     <img src="./assets/svg/icons/close.svg">
//   </button>


