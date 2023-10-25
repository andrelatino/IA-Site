

  function modalNewHtml() {
    // CSS styles
    const modalNewOverlayCss = `
        visibility:hidden;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 9999;
    `;
  
    const modalContentCss = `
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
  
    const modalNewCloseCss = `
        position: absolute;
        right: -25px;
        top: -25px;
        width: 50px;
        padding:10px;
        background: red!important;
        border-radius: 50%;
        height: 50px!important;
    `;
  
    // Modal HTML content
    const modalHTML = `
      <div id="modalNewOverlay" style="${modalNewOverlayCss}">
        <div id="modalContent" class="modal-content" style="${modalContentCss}">
          <div class="sites-modal-header"> 
            <p class="title">New Site</p>
            <span class="close" style="${modalNewCloseCss}" onclick="modalNewClose()"><img src="../global/file/close-white.svg"></span>
          </div>
          <div class="sites-modal-content">
            
            <select id="projectOptions">
                <option value="Site">Site</option>
            </select>
            <p class="help">Enter your site name</p>
            <input type="text" id="newRepoNameInput" placeholder="mywebsite.com">
            <p class="help">Choose a template</p>
            <select id="templateSelector">
                <option disabled selected value> -- select an option -- </option>
                <option value="skeleton">skeleton</option>
                <option value="starter">starter</option>
            </select>

            <button id="cloneRepoBtn">CREATE NEW SITE</button>
            <span id="message"></span>
          </div>
        </div>
      </div>
    `;

    // Create a modalDiv element
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    var footerElement = document.getElementsByTagName("footer")[0];
    footerElement.parentNode.insertBefore(modalDiv, footerElement);
  }
   // Create the modal when the page loads
   window.onload = modalNewHtml();

  function modalNewOpen() {
    const modalNewOverlay = document.getElementById("modalNewOverlay");
    const modalContent = document.getElementById("modalContent");
    modalNewOverlay.style.visibility = "visible";
    modalContent.style.visibility = "visible";
  }
  function modalNewClose() {
    const modalNewOverlay = document.getElementById("modalNewOverlay");
    const modalContent = document.getElementById("modalContent");
    modalNewOverlay.style.visibility = "hidden";
    modalContent.style.visibility = "hidden";
  }