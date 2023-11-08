
function convertToTemplate() {
    const owner = githubUser;
    const repo = githubRepoName;
    const token = githubApi;
    const message = document.getElementById('templateMessage');

    fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.baptiste-preview+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ is_template: true })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      templateMessage.textContent = "Template Added";
      console.log('Repositorio actualizado con éxito:', data);
    })
    .catch(error => {
      templateMessage.textContent = "Error adding template";
      console.error('Error al convertir el repositorio a plantilla:', error);
    });
  }
  