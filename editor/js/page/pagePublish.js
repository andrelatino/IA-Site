// function setupGridHeight() {
//   // const gridWrapper = document.querySelector('#grid-wrapper');
//   const grid = document.querySelector('#grid');
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       if (mutation.type === 'childList') {
//         const sections = grid.querySelectorAll('section');
//         let newHeight = `${0 / 0.7 * sections.length}px`; // Adjust for scaling
//         const minHeight = 0; // Minimum 100 pixels from the bottom

//         // Ensure there is at least 100px from the bottom
//         if (parseInt(newHeight) < minHeight) {
//           newHeight = `${minHeight}px`;
//         }

//         grid.style.height = newHeight;
//         localStorage.setItem('gridHeight', newHeight);
//       }
//     }
//   });

//   // Retrieve height from local storage on page load
//   const savedHeight = localStorage.getItem('gridHeight');
//   if (savedHeight) {
//     grid.style.height = savedHeight;
//   }

//   observer.observe(grid, { childList: true });
// }
// document.addEventListener('DOMContentLoaded', setupGridHeight);

if (pageIs === 'home' || pageIs === 'page') {
    var pageClass = 'page';
}else if (pageIs === 'sidebar'){
    var pageClass = 'sidebar';
}else if (pageIs === 'header'){
  var pageClass = 'header';
}else if (pageIs === 'footer'){
  var pageClass = 'footer';
} else {
  console.log('pageIs is undefined');  
}

if (pageIs === 'home') {
  var newSrcCss = './style.css';
  var newSrcJS = './script.js';
  var customCss = '';
  var customJs = '';
}else{
  var newSrcCss = '../style.css';
  var newSrcJS = '../script.js';
  var customCss = '<link rel="stylesheet" href="./style.css">';
  var customJs = '<script src="./script.js" async></script>';
}
console.log(newSrcCss + newSrcJS);

function encodeUTF8ToBase64(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode('0x' + p1);
  }));
}

function pagePublish() {
  const accessToken = githubApi;
  var apiUrl = indexHtmlApi;

  fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/vnd.github.v3+json'
      }
  })
  .then(response => response.json())
  .then(fileData => {
      const newContent = htmlContent();
      const encodedContent = encodeUTF8ToBase64(newContent);
      console.log(encodedContent);
      const updateData = {
          message: "Page published",
          content: encodedContent,
          sha: fileData.sha
      };
      fetch(apiUrl, {
          method: 'PUT',
          headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateData)
      })
      .then(updateResponse => {
          if (updateResponse.status === 200) {
              // const title = document.getElementById('title');
              // title.style.display = 'none';
              // const publish = document.getElementById('publish');
              // publish.style.display = 'none';
              // const message = document.getElementById('message');
              // message.textContent = 'Your page is currently being published in the background. Any changes you have made will be available within the next 1 to 3 minutes';
               console.log("Page published!");
          } else {
              // const message = document.getElementById('message');
              // message.textContent = 'Error, try again!';
              console.log("Failed to update file.");
              console.error(updateResponse.statusText);
          }
      })
      .catch(error => {
          // const message = document.getElementById('message');
          // message.textContent = 'Error, try again!';
          console.error("An error occurred while updating the file:", error);
      });
  })
  .catch(error => {
      // const message = document.getElementById('message');
      // message.textContent = 'Error, try again!';
      console.error("An error occurred while getting file data:", error);
  });
}

function htmlContent() {
    console.log(newSrcCss + newSrcJS);
    const clonedGrid = grid.cloneNode(true);
    const deleteButtons = clonedGrid.querySelectorAll('.toolbar-open');
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].remove();
    }
    const contentItems = clonedGrid.querySelectorAll('[contenteditable="true"]');
    for (let i = 0; i < contentItems.length; i++) {
      contentItems[i].removeAttribute('contenteditable');
    }
    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="google" content="notranslate">
        <title></title>
        ${customCss}
        <link rel="stylesheet" href="${newSrcCss}">
      </head>
      <body class="notranslate">
        <div class="${pageClass}">      
          ${clonedGrid.innerHTML}
        </div>
        <footer>
          ${customJs}
          <script src="${newSrcJS}" async></script>
        </footer>
      </body>
      </html>
    `;
    console.log(html);
    return html;
}