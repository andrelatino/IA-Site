
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
window.onload = function() {
    const encodedValue = getUrlParameter('id');
    const decodedValues = JSON.parse(atob(encodedValue));
    for (const item of decodedValues) {
        
        var devJsonRaw = item.devJsonRaw;
        // var pageTitleRepo = item.repoName;
        // var pageTitlePath = item.indexHtmlPath;
        // var fullTitlePage = pageTitleRepo+'/'+pageTitlePath;
        importPageFromURL(devJsonRaw);
        // console.log(decodedValues);
        var base = item.base;
        var createUrl = base;
        var titleText = document.getElementById('site-title');
        titleText.innerHTML = `<a href='${createUrl}'>${createUrl}</a>`;
        // console.log(fullTitlePage);
        // console.log(createUrl);
    }
};


// function importPageFromURL(url) {
//     console.log('import JSON URL');
//     fetch(url)
//       .then(response => response.json())
//       .then(sectionData => {
//         var sectionsHtml = sectionData.pageHtml;
//         var container = document.createElement('div'); // Create a temporary container
//         container.innerHTML = sectionsHtml;
//         var sections = container.querySelectorAll('section'); // Retrieve all sections from the container
//         // Loop through each section
//         Array.from(sections).forEach(function (section) {
//           var sectionHtml = section.innerHTML;
//           var newSectionId = generateRandomID(7);
//           var newSection = document.createElement('section');
//           newSection.id = newSectionId;
//           newSection.innerHTML = sectionHtml;
  
//           // Generate new IDs for the section and its child elements
//           var oldIds = new Set();
//           newSection.querySelectorAll('[id]').forEach(function (element) {
//             oldIds.add(element.id);
//           });
//           var newIds = new Map();
//           oldIds.forEach(function (oldId) {
//             var newId = generateRandomID(7);
//             newIds.set(oldId, newId);
//           });
  
//           // Update the IDs in the section and its child elements
//           newSection.querySelectorAll('[id]').forEach(function (element) {
//             var oldId = element.id;
//             var newId = newIds.get(oldId) || generateRandomID(7);
//             element.id = newId;
//           });
//           newSectionId = newIds.get(newSectionId) || newSectionId;
  
//           // Update the CSS styles with the new IDs
//           var style = newSection.querySelector('style');
//           if (style) {
//             var oldCssText = style.textContent;
//             var newCssText = oldCssText;
//             newIds.forEach(function (newId, oldId) {
//               newCssText = newCssText.replace(new RegExp(oldId, 'g'), newId);
//             });
//             style.textContent = newCssText;
//           }
  
//           // Add the new section to the "grid" div
//           var grid = document.getElementById('grid');
//           if (grid) {
//             grid.appendChild(newSection);
//           }
  
//           // Add custom HTML code at the end of the new section
//           var customHtml = sectionButtons();
//           addCustomHTMLToImportedSection(newSectionId, customHtml);
//           // savePage();
//         });
//       })
//       .catch(error => {
//         console.error('Error importing page:', error);
//       });
// }

// function importPageFromURL(url) {
//   console.log('import JSON URL');
//   fetch(url)
//     .then(response => response.json())
//     .then(sectionData => {
//       var sectionsHtml = sectionData.pageHtml;
//       var container = document.createElement('div'); // Create a temporary container
//       container.innerHTML = sectionsHtml;

//       // Add the entire HTML content to the "grid" div
//       var grid = document.getElementById('grid');
//       if (grid) {
//         grid.appendChild(container);
//       }
//     })
//     .catch(error => {
//       console.error('Error importing page:', error);
//     });
// }

function importPageFromURL(url) {
  console.log('import JSON URL');
  fetch(url)
    .then(response => response.json())
    .then(sectionData => {
      var sectionsHtml = sectionData.pageHtml;

      // Insert the HTML content directly into the "grid" div
      var grid = document.getElementById('grid');
      if (grid) {
        grid.innerHTML = sectionsHtml;
      }
    })
    .catch(error => {
      console.error('Error importing page:', error);
    });
}


function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
}
function addCustomHTMLToImportedSection(sectionId, html) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.insertAdjacentHTML('beforeend', html.trim());
    }
}
function sectionButtons() {
    return `
    <div class="admin-buttons">
        <div class="section-toolbar">
          <button class="delete-section" onclick="sectionDelete(this);">
            <img src="./assets/svg/icons/delete.svg"><span class="icon-text">Delete</span>
          </button>
          <button class="duplicate-section" onclick="sectionDuplicate(this);">
            <img src="./assets/svg/icons/duplicate.svg"><span class="icon-text">Duplicate</span>
          </button>
          <button class="move-up-section" onclick="sectionMoveUp(this);">
            <img src="./assets/svg/icons/up.svg"><span class="icon-text">Move Up</span>
          </button>
          <button class="move-down-section" onclick="sectionMoveDown(this);">
            <img src="./assets/svg/icons/down.svg"><span class="icon-text">Move Down</span>
          </button>
          <button class="export-section" onclick="sectionExport(this);">
            <img src="./assets/svg/icons/export.svg"><span class="icon-text">Export</span>
          </button>
          <button class="replace-section" onclick="sectionReplace(this);">
            <img src="./assets/svg/icons/import.svg"><span class="icon-text">Replace</span>
          </button>
          <button class="image-section" onclick="sectionImage(this); imageAllButton();">
            <img src="./assets/svg/icons/image.svg"><span class="icon-text">Replace</span>
          </button>
          <button class="responsive-section" onclick="showSectionModal(this);">
            <img src="./assets/svg/icons/resize4.svg"><span class="icon-text">Responsive</span>
          </button>
      </div>
    </div> 
    `;
}