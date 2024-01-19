
//START CHOICE

function generateScriptTags(filenames) {
  return filenames.map(filename => {
      if (filename.endsWith('.css')) {
          return `<link rel="stylesheet" href="./${filename}">`;
      } else if (filename.endsWith('.js')) {
          return `<script src="./${filename}"></script>`;
      }
  }).join('\n'); // Remove the filter condition
}

function checkDefaultValues() {
  setTimeout(function() {
      var headerSelect = document.getElementById("selectHeader");
      // var bodySelect = document.getElementById("selectBody");
      var footerSelect = document.getElementById("selectFooter");

      console.log("Valores predeterminados del Header:", getSelectedValues(headerSelect));
      // console.log("Valores predeterminados del Body:", getSelectedValues(bodySelect));
      console.log("Valores predeterminados del Footer:", getSelectedValues(footerSelect));
  }, 1000); // Ajusta el tiempo según sea necesario
}

function getSelectedValues(selectElement) {
  var result = [];
  var options = selectElement && selectElement.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
          result.push(opt.value || opt.text);
      }
  }
  return result;
}

// Llama a la función para ejecutarla después de que se hayan cargado los valores
// checkDefaultValues(); // Llámalo después de que se hayan agregado los valores dinámicamente


var headerValues = [];
var bodyValues = [];   // Added for body
var footerValues = []; // Added for footer

var defaultHeaderOptions = [{ value: 'style.css', label: 'style.css', selected: true },];
var defaultBodyOptions = [{ value: 'script.js', label: 'script.js', selected: true},];
var defaultFooterOptions = [{ value: 'style.css', label: 'style.css', selected: true},];

checkDefaultValues();

async function loadFilesFromRepository(owner, repo, path, token) {
  try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });

      if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {

              

              const selectHeader = document.getElementById('selectHeader');
              // const selectBody = document.getElementById('selectBody');
              const selectFooter = document.getElementById('selectFooter');

              selectHeader.innerHTML = '';
              // selectBody.innerHTML = '';
              selectFooter.innerHTML = '';

              const fileNames = new Set();
              data.forEach(file => {

                console.log(file.name);
                


                  if ((file.name.endsWith('.css') || file.name.endsWith('.js')) && !fileNames.has(file.name)) {
                      fileNames.add(file.name);


                      
                      ['selectHeader', 'selectFooter'].forEach(selectId => {
                          const select = document.getElementById(selectId);
                          const option = document.createElement('option');
                          option.value = file.name;
                          option.textContent = file.name;
                          select.appendChild(option);
                      });
                  }
              });

              initializeChoices('#selectHeader', defaultHeaderOptions, headerValues);
              // initializeChoices('#selectBody', defaultBodyOptions, bodyValues);
              initializeChoices('#selectFooter', defaultFooterOptions, footerValues);


          } else {
              console.error('Invalid response data');
          }
      } else {
          console.error(`Failed to fetch repository contents: ${response.status}`);
      }
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

function initializeChoices(selectId, defaultOptions, selectedValuesArray) {
  const choices = new Choices(selectId, {
    removeItemButton: true,
    allowHTML: true,
    duplicateItemsAllowed: false,
    choices: defaultOptions
    
  });

  choices.passedElement.element.addEventListener('change', function() {
    
    selectedValuesArray.splice(0, selectedValuesArray.length, ...choices.getValue(true));
    console.log(`Selected Values for ${selectId}: `, selectedValuesArray);
  });

  return choices;
}



function htmlContent() {
  const headerScripts = generateScriptTags(headerValues);
  // const bodyScripts = generateScriptTags(bodyValues);
  const footerScripts = generateScriptTags(footerValues);

  console.log('headerScripts: '+headerScripts)
  // console.log('bodyScripts: '+bodyScripts)
  console.log('footerScripts: '+footerScripts)

  // Rest of your code for bodyContent generation

  // console.log(newSrcCss + newSrcJS);
const bodyContent = grid.cloneNode(true);
const deleteButtons = bodyContent.querySelectorAll('.toolbar-open');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].remove();
}
const contentItems = bodyContent.querySelectorAll('[contenteditable="true"]');
for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].removeAttribute('contenteditable');
}

// Add code to remove div elements with class 'div-hidden'
const hiddenDivs = bodyContent.querySelectorAll('.div-hidden');
for (let i = 0; i < hiddenDivs.length; i++) {
    hiddenDivs[i].remove();
}

const html = `
<!DOCTYPE html>
<html lang="fr">
<!-- Header -->
<head>
<meta charset="UTF-8">
<meta name="google" content="notranslate">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<div id="header"></div>
<link rel="stylesheet" type="text/css" href="./global/styles.css">
<script async src="./header.js"></script>
<script async src="./global/GTM.js"></script>
<style> 
html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;-webkit-font-smoothing:antialiased;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}ul{list-style:none;}button,input,select{margin:0;}html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}img,video{height:auto;max-width:100%;}iframe{border:0;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;}a{text-decoration:none;}a:hover{text-decoration:underline;}
}
</style>
${headerScripts}
</head>
<!-- Body -->
<body>
${bodyContent.innerHTML}
${bodyScripts}
</body>
<!-- Footer -->
<footer>
<div id="footer"></div>
<script async src="./global/scripts.js"></script>
<script async src="./sidebar.js"></script>
<script async src="./footer.js"></script>
${footerScripts}
</footer>
</html>
`;
console.log(html);
return html;
}

// htmlContent();

// Define these variables with appropriate values
const owner = githubUser;
const repo = githubRepoName;
const path = ''; // Optional, can be a directory or a file
const token = githubApi;

loadFilesFromRepository(owner, repo, path, token);

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
  