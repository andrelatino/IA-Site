

  function modalNewHtml() {
    const modalHTML = `
      <div id="modalNewOverlay">
        <div id="modalContent" class="modal-content">
          <div class="sites-modal-header"> 
            <p class="new-title">New Site</p>
            <span id="modalNewClose" onclick="modalNewClose()"><img src="../global/file/close-white.svg"></span>
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
                <option value="energia.fr">energia.fr</option>
                <option value="skeleton">skeleton</option>
                <option value="starter">starter</option>
            </select>

            <button id="cloneRepoBtn">Create Site</button>
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