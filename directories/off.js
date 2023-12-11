
// Function to get URL parameter value by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


    const encodedValue = getUrlParameter('id');
    const decodedValues = JSON.parse(atob(encodedValue));

    for (const item of decodedValues) {
        const repo = item.repo;
        console.log('repo:', repo);
        var repoFromUrl = item.repo;
        localStorage.setItem('repo', item.repo);  
    }
// var adminTitle = document.getElementById('admin-title-text');
// var newTitleText = repoName; // Replace "Your updated title" with the desired new title text
// adminTitle.textContent = newTitleText;

function github_get_site() {

    // Define the base URL and parameters
    const baseURL = 'https://api.github.com/repos';
    const owner = 'icheff';
    const repo = repoFromUrl;
    const url = `${baseURL}/${owner}/${repo}/contents`;
    const headers = new Headers({
    'Authorization': 'Bearer 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',
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'If-None-Match': '' // Include this line to bypass caching   
    });
    fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getTotal = data.length;

        if (getTotal === undefined) {
            var showTotal = 0;  
        }else{
            var showTotal = getTotal;
        }
        addSubtitle = document.getElementById('grid');
        addSubtitle.className = 'directories-grid';
        addSubtitle.innerHTML= `
        <div class='directories-subtitle'>
            <p> Total : ${showTotal}</p>
            <a class="directories-add" onclick="directoriesModalOpen();"><img class="addIcon" src="../global/file/add.svg"></a>
        </div>`;
        const gridDiv = document.getElementById('grid');
        for (const api of data) {
            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'directories-items';
            itemsDiv.innerHTML = `
            <div class="directories-content"> 
                <h2 class="directories-txt">${api.name}</h2>
                <p class="directories-txt">Project: ${repoFromUrl}</p>
                <p class="directories-txt">Type: ${api.type}</p>   
            </div>
            `;
    
            if (api.name === 'index.html' && api.type === 'file') {
                const addButton = document.createElement('a');
                addButton.className = "directories-add";
                addButton.innerHTML = '<button class="directories-edit">Open file</button>';
                addButton.addEventListener('click', directoriesModalOpen);
                itemsDiv.appendChild(addButton);
            }

            if (api.type === 'dir') {
                const dirButton = document.createElement('a');
                dirButton.className = "dir-button";
                dirButton.innerHTML = '<button class="dir-button">Open directory</button>';
                dirButton.addEventListener('click', directoriesModalOpen);
                itemsDiv.appendChild(dirButton);
            }
    
            gridDiv.appendChild(itemsDiv);
        }
        
    })
    .catch(error => {
        // Handle errors
        console.error(error);
    });

}
github_get_site();