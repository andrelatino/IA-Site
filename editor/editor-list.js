// // Function to get URL parameter value by name
// function getUrlParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
// }

// window.onload = function() {
//     const encodedValue = getUrlParameter('id');
//     const decodedValues = JSON.parse(atob(encodedValue));

//     for (const item of decodedValues) {
//       // var repoName = item.repoName;
//       // var dirName = item.dirName;
//       // var indexName = item.indexName;
//       // var indexSha = item.indexSha;
//       // var indexUrl = item.indexUrl;
//       // var pageName = item.pageName;
//       // var pageSha = item.pageSha;
//       var pageUrl = item.pageUrl;

//       importPageFromURL(pageUrl);

//     }
// };

// function generateRandomID(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
//     return result;
//   }
//   function importPageFromURL(url) {
//     fetch(url)
//       .then(response => response.json())
//       .then(sectionData => {
//         var sectionsHtml = sectionData.pageHtml;
  
//         var container = document.createElement('div'); // Create a temporary container
//         container.innerHTML = sectionsHtml;
  
//         var sections = container.querySelectorAll('section'); // Retrieve all sections from the container
  
//         // Loop through each section
//         Array.from(sections).forEach(function(section) {
//           var sectionHtml = section.innerHTML;
//           var newSectionId = generateRandomID(7);
//           var newSection = document.createElement('section');
//           newSection.id = newSectionId;
//           newSection.innerHTML = sectionHtml;
  
//           // Generate new IDs for the section and its child elements
//           var oldIds = new Set();
//           newSection.querySelectorAll('[id]').forEach(function(element) {
//             oldIds.add(element.id);
//           });
//           var newIds = new Map();
//           oldIds.forEach(function(oldId) {
//             var newId = generateRandomID(7);
//             newIds.set(oldId, newId);
//           });
  
//           // Update the IDs in the section and its child elements
//           newSection.querySelectorAll('[id]').forEach(function(element) {
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
//             newIds.forEach(function(newId, oldId) {
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
//         //   //savePage();
//         });
//       })
//       .catch(error => {
//         console.error("There was an error fetching the JSON from the URL:", error);
//       });
//   }
// //   const pageJson = localStorage.getItem('pageJsonUrl');
// //   alert(pageJson);