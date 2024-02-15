

const loadedScripts = [];

function loadPattern(src) {
  return new Promise((resolve, reject) => {
    // Check if the script is already loaded
    if (loadedScripts.includes(src)) {
      resolve();
      return; // Script already loaded, no need to load it again
    }

    var script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      loadedScripts.push(src); // Add the loaded script URL to the list
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// Function to use the loaded pattern
function usePattern(itemId) {
  const functionName = '_' + itemId;
  if (typeof window[functionName] === 'function') {
    window[functionName](); // Call the function dynamically
  } else {
    console.error('Function not found:', functionName);
  }
}

function patternSidebarOpen() {

  zoomContentStart();
  const sidebar = document.getElementById("pattern-sidebar");
  sidebar.style.bottom = "0px";
  sidebar.style.transition = "bottom 0.5s";

}

function patternSidebarClose() {
  zoomContentEnd();
  const sidebar = document.getElementById("pattern-sidebar");
  sidebar.style.transition = "bottom 0.5s";
  sidebar.style.bottom = "-20vh";

}

function patternsLoad() {
  // Fetch the JSON data
  fetch('../global/patterns/patterns.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const patternSidebarGrid = document.getElementById('pattern-sidebar-grid');

      // Loop through each section template
      data.forEach(section => {
        // Create a new div element for items
        const itemsDiv = document.createElement('div');
        const urlImages = '../global/patterns/images/';
        itemsDiv.className = 'pattern-items';
        itemsDiv.id = section.id;
        itemsDiv.innerHTML = `
          <img src="${urlImages}${section.thumb}" width="300" height="156" loading="lazy">
          <p class="pattern-id"> ${section.tags} </p>
        `;

        // Event listener for itemsDiv
        itemsDiv.addEventListener('click', function() {
          const itemId = this.id;
          // Dynamically load the pattern based on itemId
          const patternSrc = "../global/patterns/sections/" + itemId + ".js";
          loadPattern(patternSrc)
            .then(() => {
              usePattern(itemId);
            })
            .catch((error) => {
              console.error('Error loading pattern:', error);
            });
        });

        // Append the items div to the pattern-sidebar-grid div
        patternSidebarGrid.appendChild(itemsDiv);
      });
    })
    .catch(error => console.error('Error loading section templates:', error));
}

function patternsSearch() {
  const searchTerms = document.getElementById('pattern-search-input').value.trim().toLowerCase().split(' ');
  const patternSidebarGrid = document.getElementById('pattern-sidebar-grid');

  // Fetch the JSON data
  fetch('../global/patterns/patterns.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Filter the data based on the search terms
      const filteredData = data.filter(item => {
        const tags = item.tags.toLowerCase();
        return searchTerms.some(term => tags.includes(term.trim()));
      });

      // Clear the existing content in pattern-sidebar-grid
      patternSidebarGrid.innerHTML = '';

      // Loop through each matching item and display it
      filteredData.forEach(section => {
        const urlImages = '../global/patterns/images/';
        // Create a new div element for items
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'pattern-items';
        itemsDiv.id = section.id;
        itemsDiv.innerHTML = `
          <img src="${urlImages}${section.thumb}" width="300" height="156" loading="lazy">
          <p class="pattern-id">${section.tags}</p>
        `;
        // Event listener for itemsDiv
        itemsDiv.addEventListener('click', function() {
          const itemId = this.id;
          // Dynamically load the pattern based on itemId
          const patternSrc = "../global/patterns/sections/" + itemId + ".js";
          loadPattern(patternSrc)
            .then(() => {
              usePattern(itemId);
            })
            .catch((error) => {
              console.error('Error loading pattern:', error);
            });
        });
        // Append the items div to the pattern-sidebar-grid div
        patternSidebarGrid.appendChild(itemsDiv);
      });
    })
    .catch(error => console.error('Error searching images:', error));
}

// Event listener for the search button
document.getElementById('pattern-search-button').addEventListener('click', function() {
  patternsSearch();
});

// Event listener for the Enter key in the search input field
document.getElementById('pattern-search-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    patternsSearch();
  }
});

// Event listener for closing the sidebar
document.getElementById('pattern-search-close').addEventListener('click', function() {
  patternSidebarClose();
});

document.getElementById('color-solid-close').addEventListener('click', function() {
  zoomContentEnd();
});

patternsLoad(); // Call patternsLoad to load initial patterns when the page loads


function zoomContentStart(){

  const adminScale = document.getElementById("admin");
  adminScale.style.transform = "scale(0.8)";
  adminScale.style.transformOrigin = "top";
  adminScale.style.height = "100vh";
  adminScale.style.overflowX = "scroll";

  const popup = document.getElementById("popup");
  popup.style.visibility = "hidden";

  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  
  // const toolbars = document.getElementsByClassName("toolbar-open"); // Using getElementsByClassName to get a collection of elements
  // for (let i = 0; i < toolbars.length; i++) {
  //   toolbars[i].style.visibility = "hidden";
  // }
  const openEditorBtn = document.querySelector(".open-editor-btn");
  openEditorBtn.style.visibility = "hidden";

  const grid = document.getElementById("grid");
  const elements = grid.querySelectorAll("[contenteditable=true]");
  elements.forEach(element => {
    element.contentEditable = "false";
  }); 

  const links = grid.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
    });
  });

}

function zoomContentEnd(){
  const adminScale = document.getElementById("admin");
  adminScale.style.transform = "scale(1)";
  adminScale.style.transformOrigin = "top";
  adminScale.style.height = "100vh";
  adminScale.style.overflowX = "scroll";

  const popup = document.getElementById("popup");
  popup.style.visibility = "visible";

  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  // // Revert visibility for elements with class "toolbar-open"
  // const toolbars = document.getElementsByClassName("toolbar-open");
  // for (let i = 0; i < toolbars.length; i++) {
  //   toolbars[i].style.visibility = "visible";
  // }

  // Revert visibility for the element with class "open-editor-btn"
  const openEditorBtn = document.querySelector(".open-editor-btn");
  openEditorBtn.style.visibility = "visible";

  // Revert contenteditable attribute for elements inside the div with id "grid"
  const grid = document.getElementById("grid");
  const elements = grid.querySelectorAll("[contenteditable=true]");
  elements.forEach(element => {
    element.contentEditable = "true";
  });

  // Remove click event listeners from links inside the div with id "grid"
  const links = grid.querySelectorAll("a");
  links.forEach(link => {
    link.removeEventListener("click", function(event) {
      event.preventDefault(); // Remove the preventDefault handler
    });
  });


}
function colorContentHide(){
  // const colorModal = document.getElementById('color-modal');
  // colorModal.style.display = 'none';

  // const toolbarModal = document.getElementById('toolbarModal');
  // toolbarModal.style.display = 'none';
}