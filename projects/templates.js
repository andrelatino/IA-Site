
async function convertToTemplate() {
    const owner = localStorage.getItem('githubUser');;
    const repoTemplate = localStorage.getItem('githubRepoName');
    const token = localStorage.getItem('githubApi');
    const statusText = document.getElementById('templateIs').textContent;
    const isTemplate = statusText.trim().toLowerCase() === 'true';
    const message = document.getElementById('templateMessage');

    console.log('Iniciando la actualización del repositorio...');
    message.textContent = "1/3 Updating..."; 

    console.log (owner, repoTemplate, token, statusText);

    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoTemplate}?t=${Date.now()}`, { // Adding a cache-busting parameter
            method: 'PATCH',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.baptiste-preview+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ is_template: isTemplate })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Repositorio actualizado con éxito:', data);

        // Update the message after the API request is done
        message.textContent = "2/3 Updated!";

        setTimeout(() => {
            message.textContent = "3/3 Reloading...";
            // Descomentar la siguiente línea para recargar la página
            // location.reload(true);
        }, 2000);

        setTimeout(() => {
            location.reload(true);
        }, 4000);

    } catch (error) {
        message.textContent = "Error updating";
        console.error('Error al convertir el repositorio a plantilla:', error);
    }
}
