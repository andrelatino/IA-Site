
  function directoriesModalHtml() {
    // CSS styles
    const directoriesModalOverlayCss = `
        visibility:hidden;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 9999;
    `;
  
    const directoriesModalContentCss = `
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

    const directoriesModalHeaderCss = `
    text-align: center;
    font-size: 30px;
    display: grid;
    padding: 20px;
    gap: 20px;
    `;

    const directoriesModalButtonCss = `
    height: 50px;
    background: blue;
    color: white;
    border: none;
    border-radius: 5px;
    `;
  
    const directoriesModalCloseCss = `
        position: absolute;
        right: -25px;
        top: -25px;
        width: 50px;
        padding:10px;
        background: red!important;
        border-radius: 50%;
        height: 50px!important;
    `;
  
    // directoriesModal HTML content
    const directoriesModalHTML = `
      <div id="directoriesModalOverlay" style="${directoriesModalOverlayCss}">
        <div id="directoriesModalContent" class="directoriesModal-content" style="${directoriesModalContentCss}">
          <div class="sites-directoriesModal-header" style="${directoriesModalHeaderCss}"> 
            <p>New Directory</p>
            <span class="close" style="${directoriesModalCloseCss}" onclick="directoriesModalClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-directoriesModal-content">
            <input id="pageName" type="text" class="sites-inputs" placeholder="Nom">
            <button id="createFileButton" style="${directoriesModalButtonCss}" onclick="createPage()">Add</button>
          </div>
        </div>
      </div>
    `;
  
    // Create a directoriesModalDiv element
    const directoriesModalDiv = document.createElement('div');
    directoriesModalDiv.innerHTML = directoriesModalHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(directoriesModalDiv, footerElement);
  }
  
  function directoriesModalOpen() {
    const directoriesModalOverlay = document.getElementById("directoriesModalOverlay");
    const directoriesModalContent = document.getElementById("directoriesModalContent");
    directoriesModalOverlay.style.visibility = "visible";
    directoriesModalContent.style.visibility = "visible";
  }
  
  function directoriesModalClose() {
    const directoriesModalOverlay = document.getElementById("directoriesModalOverlay");
    const directoriesModalContent = document.getElementById("directoriesModalContent");
    directoriesModalOverlay.style.visibility = "hidden";
    directoriesModalContent.style.visibility = "hidden";
  }
  // Create the directoriesModal when the page loads
  window.onload = directoriesModalHtml;
