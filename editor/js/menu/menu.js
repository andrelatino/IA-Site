function editorMenu() {
    /** NAV BOTTOM */
    var overlay = document.createElement('div'); // Create an overlay
    overlay.className = 'overlay'; // Add a class for styling
    overlay.id = 'overlay'; // Add a class for styling
    overlay.style.display = 'none'; // Initially hide the overlay
    document.body.appendChild(overlay); // Append the overlay to the body
  
    var openBtn = document.createElement('button');
    openBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
    openBtn.className = 'nav-style open-editor-btn';
    document.body.appendChild(openBtn);
  
    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<img id="menu" src="../global/file/add-white.svg">';
    closeBtn.className = 'nav-style close-editor-btn';
    document.body.appendChild(closeBtn);
  
    var popup = document.createElement('div');
    popup.innerHTML = `
      <div id="popup">

        <button class="navigation" onclick="patternSection1">
            <img class="editor-icons" src="./assets/svg/icons/pages.svg">
            <span class="editor-items">Add Page</span>
        </button>

        <button class="navigation" onclick="patternSection1()">
            <img class="editor-icons" src="./assets/svg/icons/sections.svg">
            <span class="editor-items">Add Section</span>
        </button>
        
        <button class="navigation" onclick="pageJsonSave()">
            <img class="editor-icons" src="./assets/svg/icons/save.svg">
            <span class="editor-items">Save Page</span>
        </button>

        <button class="navigation" onclick="pagePublish()">
            <img class="editor-icons" src="./assets/svg/icons/publish2.svg">
            <span class="editor-items">Publish Online</span>
        </button>

      </div>
    `;
    popup.style.display = 'none';
    document.body.appendChild(popup);
  
    openBtn.addEventListener('click', function() {
      popup.style.display = 'block';
      overlay.style.display = 'block'; // Show the overlay
      openBtn.style.display = 'none';
      closeBtn.style.display = 'grid';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
      overlay.style.display = 'none'; // Hide the overlay
      openBtn.style.display = 'grid';
      closeBtn.style.display = 'none';
    });
  }
  
  // Call the editorMenu function to generate the sidebar menu
  editorMenu();