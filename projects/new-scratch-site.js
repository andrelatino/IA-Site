
// Función para crear un repositorio
function createScratchSite() {

        // Token de Acceso Personal de GitHub
    const token = githubApi; // Reemplaza con tu token
    const owner = githubUser
    // const name = 'newRepo'; // Elige un nombre para tu repositorio
    const desc = 'IA Site - IA Academy'; // Descripción del repositorio
    const url = `https://api.github.com/user/repos`;
    // const message = document.getElementById('message');
    // const templateRepo = document.getElementById('templateSelector').value;
    const repo = document.getElementById('newRepoNameInput').value;
    // Datos para la creación del repositorio
    const data = {
        name: repo,
        description: desc,
        auto_init: true // Crea un archivo README.md inicial
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Repositorio creado:', data);
        createScratchPage(owner, repo, token)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function createScratchPage(owner, repo, token) {
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      body: JSON.stringify({
        owner: owner,
        repo: repo,
        source: {
          branch: 'main',
          path: '/'
        }
      })
    };
  
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pages`;
  
    fetch(apiUrl, requestOptions)
    .then(response => {
      console.log(response);
      if (response.status === 201) {
        const message = document.getElementById('message');
        setTimeout(() => {
            message.textContent = '2/3 Page created!';
            return response.json();
        }, 2000); 

        setTimeout(() => {
            message.textContent = '2/3 Page created!';
            return response.json();
        }, 4000);

        setTimeout(function() {
          message.textContent = '3/3 Reloading...';
        }, 6000);
  
        setTimeout(function() {
          location.reload(true);
        }, 8000);
        
      } else {
        const message = document.getElementById('message');
        message.textContent = 'URL Creation failed!';
        throw new Error('Failed to create project!');
      }
    })
    .then(data => {
      console.log('GitHub Pages creation response:', data);
    })
    .catch(error => {
      console.error('Error creating GitHub Pages:', error);
      const message = document.getElementById('message');
      message.textContent = 'URL Creation failed!';
    });
}