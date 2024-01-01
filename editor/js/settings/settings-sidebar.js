function settingsOpenSidebar() {
    var settings = document.getElementById("settings-sidebar");

    if (window.innerWidth < 640) {
        // Estilos para ventanas menores a 640px
        settings.style.visibility = "visible";
        settings.style.transition = "right 0.5s";
        settings.style.right = "0px";
        settings.style.width = "100%";
    } else {
        // Estilos para ventanas mayores o iguales a 640px
        // (Puedes personalizar estos estilos según tus necesidades)
        settings.style.visibility = "visible";
        settings.style.transition = "right 0.5s";
        settings.style.right = "0px";
        settings.style.maxWidth = "500px";
    }
}

function settingsCloseSidebar() {
    var settings = document.getElementById("settings-sidebar");

    if (window.innerWidth < 640) {
        // Estilos para ventanas menores a 640px
        settings.style.transition = "right 0.5s";
        settings.style.right = "-100%";
        settings.style.width = "100%";
    } else {
        // Estilos para ventanas mayores o iguales a 640px
        // (Puedes personalizar estos estilos según tus necesidades)
        settings.style.transition = "right 0.5s";
        settings.style.right = "-500px";
    }
}

var headerValues = [];

function generateHeaderElements(filenames) {
    return filenames.map(filename => {
      if (filename.endsWith('.css')) {
        return `<link rel="stylesheet" href="./${filename}">`;
      } else if (filename.endsWith('.js')) {
        return `<script src="./${filename}"></script>`;
      }
    }).join('\n');
  }
  

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
          const selectElement = document.getElementById('selectOption');
  
          // Clear existing options
          selectElement.innerHTML = '';

          // Filtrar y agregar archivos .css y .js como opciones
          data.forEach(file => {
            if (file.name.endsWith('.css') || file.name.endsWith('.js')) {
              const option = document.createElement('option');
              option.value = file.name;
              option.textContent = file.name;
              selectElement.appendChild(option);
            }
          });

          // Initialize Choices.js after adding all options
          const element = document.querySelector('.js-choice');
          const choices = new Choices(element, {
            removeItemButton: true,
            allowHTML: true
          });

          // Event listener para cambio de selección
          choices.passedElement.element.addEventListener('change', function(event) {
            headerValues = choices.getValue(true);
            console.log('headerValues: ', headerValues);
            
          });

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


function htmlContent() {

const headerScripts = generateHeaderElements(headerValues);

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
<head>
<!-- Header -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google" content="notranslate">
<title>Título de la Página</title>
${headerScripts}
</head>
<body>
<!-- Body -->
<div>
${bodyContent.innerHTML}
</div>
<footer>
<!-- Footer -->
</footer>
</body>
</html>
`;
console.log(html);
return html;
}

htmlContent();


const owner = githubUser;
const repo = githubRepoName;
const path = ''; // Optional, can be a directory or a file
const token = githubApi;

loadFilesFromRepository(owner, repo, path, token);