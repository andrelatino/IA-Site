
 pageJsonSha = '';
 pageJsonUrl = '';
 

// Function to get URL parameter value by name
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }


    const encodedValue = getUrlParameter('id');
    const decodedValues = JSON.parse(atob(encodedValue));

    for (const item of decodedValues) {
        var repoName = item.repo;
        var dirName = item.dir;
        console.log('repo:', repoName);
        console.log('dir:', dirName);
 
    }

    function github_get_files() {
        const baseURL = 'https://api.github.com/repos';
        const owner = 'icheff';
        const repo = repoName;
        const url = `${baseURL}/${owner}/${repo}/contents/${dirName}`;
    
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
            let getTotal = data.length;
            let showTotal = getTotal === undefined ? 0 : getTotal;
    
            const addSubtitle = document.getElementById('grid');
            addSubtitle.className = 'files-grid';
            addSubtitle.innerHTML= `
            <div class='files-subtitle'>
                <p> Total : ${showTotal}</p>
                <a class="files-add" onclick="filesModalOpen();"><img class="addIcon" src="../global/file/add.svg"></a>
            </div>`;
    
            const gridDiv = document.getElementById('grid');
            for (const api of data) { 

                

                console.log('api.name:', api.name);
                

   
                const itemsDiv = document.createElement('div');
                itemsDiv.className = 'files-items';
                itemsDiv.innerHTML = `
                <div class="files-content"> 
                    <h2 class="files-txt">${api.name}</h2>
                    <p class="files-txt">Directory: ${dirName}</p>
                    <p class="files-txt">Project: ${repoName}</p>
               
                </div>
                <div class="files-cta">
                    <button id = "code-${api.name}" style="display:none;" class="files-code" data-sha="${api.sha}" data-name="${api.name}" data-url="${api.url}">See Code</button>
                    <button id = "editor-${api.name}"  style="display:none;" class="files-edit" data-sha="${api.sha}" data-name="${api.name}" data-url="${api.url}">Open Editor</button>
                    <button id = "padlock-${api.name}" style="display:none;" class="files-padlock" data-sha="${api.sha}" data-name="${api.name}" data-url="${api.url}"><img src="../global/file/padlock-black.svg"></button>
                    <button id = "delete-${api.name}" style="display:none;" class="files-delete" data-sha="${api.sha}" data-name="${api.name}" data-url="${api.url}"><img src="../global/file/delete-white.svg"></button>
                </div>`;
    
                gridDiv.appendChild(itemsDiv);


                if (api.name.includes("backup-")) {
                    const codeButton = document.getElementById(`code-${api.name}`);
                    if (codeButton) {
                        codeButton.style.display = 'block';
                    }
                    const padlockButton = document.getElementById(`padlock-${api.name}`);
                    if (padlockButton) {
                        padlockButton.style.display = 'block';
                    }
                    
                    var pageName = api.name;
                    var pageUrl = api.download_url;
                    var pageDelete = api.url;          
                    var pageSha = api.sha;
                }

                else if (api.name.includes("index.html")) {                    
                    const padlockButton = document.getElementById(`padlock-${api.name}`);
                    if (padlockButton) {
                        padlockButton.style.display = 'block';
                    }
                    const editButton = document.getElementById(`editor-${api.name}`);
                    if (editButton) {
                        editButton.style.display = 'block';
                    }
                } else {
                    const deleteButton = document.getElementById(`delete-${api.name}`);
                    if (deleteButton) {
                        deleteButton.style.display = 'block';
                    }
                    const codeButton = document.getElementById(`code-${api.name}`);
                    if (codeButton) {
                        codeButton.style.display = 'block';
                    }
                    console.log('show everything');
                }

        }
    
            // Event delegation
            gridDiv.addEventListener("click", function(event) {
                const sha = event.target.getAttribute("data-sha") || event.target.parentElement.getAttribute("data-sha");
                const name = event.target.getAttribute("data-name") || event.target.parentElement.getAttribute("data-name");
                const url = event.target.getAttribute("data-url") || event.target.parentElement.getAttribute("data-url");
                
                if (event.target && event.target.matches(".files-edit")) {

                    const values = 
                    [
                        {
                            "repoName":repoName,
                            "dirName":dirName,
                            "pageUrl":pageUrl,
                            "pageDelete":pageDelete,
                            "pageSha":pageSha,
                            "pageName":pageName,
                            "indexUrl":url,
                            "indexSha":sha,
                            "indexName":name,
                        }
                    ];
                    console.log(values);
                    const encoded = btoa(JSON.stringify(values));
                    const targetURL = '../editor?id=' + encoded;
                    
                    window.location.href = targetURL;

                }
                else if (event.target && (event.target.matches(".files-delete") || event.target.parentElement.matches(".files-delete"))) {
                    
                        const showDeleteBox = document.getElementById('deleteBox');
                        showDeleteBox.style.visibility='visible';

                        const getFileName = document.getElementById('fileName');
                        getFileName.textContent = name;
                        
                        const getFileUrl = document.getElementById('fileUrl');
                        getFileUrl.textContent = url;

                        const getFileSha = document.getElementById('fileSha');
                        getFileSha.textContent = sha;

                        

                } else if (event.target && event.target.matches(".files-code")) {
                
                    const values = 
                    [
                        {
                        
                            "fileUrl":pageUrl,
                            "fileDelete":pageDelete,
                            "fileSha":pageSha,
                            "fileName":pageName,
                            
                        }
                    ];
                    console.log(values);
                    const encoded = btoa(JSON.stringify(values));
                    const targetURL = '../code?id=' + encoded;
                    
                    window.location.href = targetURL;

                }
            });
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
    }   
    
    github_get_files();