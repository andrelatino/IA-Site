
  function filesModalHtml() {
    // CSS styles
    const filesModalOverlayCss = `
        visibility:hidden;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 9999;
    `;
  
    const filesModalContentCss = `
        visibility:hidden;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        z-index: 999999;
        box-shadow: 1px 1px 16px #8080806e;
        min-height: 250px;
        min-width: 375px;
        background: white;
        padding: 20px;
        border-radius:10px;
    `;

    const filesModalHeaderCss = `
    text-align: center;
    font-size: 30px;
    display: grid;
    padding: 20px;
    gap: 20px;
    `;

    const filesModalButtonCss = `
    height: 50px;
    background: blue;
    color: white;
    border: none;
    border-radius: 5px;
    `;
  
    const filesModalCloseCss = `
        position: absolute;
        right: -25px;
        top: -25px;
        width: 50px;
        padding:10px;
        background: red!important;
        border-radius: 50%;
        height: 50px!important;
    `;
  
    // filesModal HTML content
    const filesModalHTML = `
      <div id="filesModalOverlay" style="${filesModalOverlayCss}">
        <div id="filesModalContent" class="filesModal-content" style="${filesModalContentCss}">
          <div class="sites-filesModal-header" style="${filesModalHeaderCss}"> 
            <p>New file</p>
            <span class="close" style="${filesModalCloseCss}" onclick="filesModalClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-filesModal-content">
            <select id="files-select" name="web_files">
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="js">Js</option>
                <option value="json">Json</option>
                <option value="mp3">Mp3</option>
                <option value="mp4">Mp4</option>
            </select>
            <input id="fileName" type="text" class="sites-inputs" placeholder="Nom">
            <button id="createFileButton" style="${filesModalButtonCss}" onclick="createFile()">Ajouter</button>
          </div>
        </div>
      </div>
    `;
  
    // Create a filesModalDiv element
    const filesModalDiv = document.createElement('div');
    filesModalDiv.innerHTML = filesModalHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(filesModalDiv, footerElement);
  }
  
  function filesModalOpen() {
    const filesModalOverlay = document.getElementById("filesModalOverlay");
    const filesModalContent = document.getElementById("filesModalContent");
    filesModalOverlay.style.visibility = "visible";
    filesModalContent.style.visibility = "visible";
  }
  
  function filesModalClose() {
    const filesModalOverlay = document.getElementById("filesModalOverlay");
    const filesModalContent = document.getElementById("filesModalContent");
    filesModalOverlay.style.visibility = "hidden";
    filesModalContent.style.visibility = "hidden";
  }
  // Create the filesModal when the file loads
  window.onload = filesModalHtml;
