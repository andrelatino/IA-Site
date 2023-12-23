
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }


    const encodedValue = getUrlParameter('id');
    const decodedValues = JSON.parse(atob(encodedValue));

    for (const item of decodedValues) {
        
        var repoName = item.repo;
        var dirName = item.dir;
        var repo = item.repo;
        var base = item.base;
        var user = item.user;

        console.log('repo:', repo);
        console.log('base:', base);
        console.log('user:', user);
        console.log('dir:', dirName);

        var pageTitle = document.getElementById('admin-title-text');
        var pageBreadCrumb = document.getElementById('admin-bread-crumb');
 
    }

    function loadFiles() {
        const baseURL = 'https://api.github.com/repos';
        const owner = githubUser;
        const repo = repoName;
        const url = `${baseURL}/${owner}/${repo}/contents/${dirName}`;
    
        const headers = new Headers({
            'Authorization': `Bearer ${githubApi}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'If-None-Match': '' // Include this line to bypass caching           
        });
    
        fetch(url, { headers })
        .then(response => response.json())
        .then(data => {

            pageTitle.textContent = repoName;
            pageBreadCrumb.textContent = 'sites / '+repoName+' / '+dirName;

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

                if (api.type === 'file') {
                    // Create and append the delete button
                    const deleteButton = createDeleteButton();
                    deleteButton.addEventListener('click', function() {
                        deleteItem(api.sha,api.path,repoName);    
                    });
                    itemsDiv.appendChild(deleteButton);
                }
                


                if (api.name.includes("index-")) {

                    // var devJsonName = api.name;
                    var devJsonRaw = api.download_url;                           
                    var devJsonApi = api.url;
                    var devJsonSha = api.sha;
                    
                }
                
                var pageIs;

                if (dirName === "header") {
                   pageIs = "header";
                } else if (dirName === "footer") {
                   pageIs = "footer";
                } else if (dirName === "sidebar") {
                   pageIs = "sidebar";
                } else {
                   pageIs = "page";
                }

                console.log(pageIs);

                if (api.name !== 'index.html' && api.type === 'file') {
                    // Create and append the delete button
                    const addButton = document.createElement('a');
                    addButton.className = "directories-add";
                    addButton.innerHTML = '<button class="files-edit">Edit File</button>';
                    itemsDiv.appendChild(addButton);
                    addButton.addEventListener('click', function() {
                        // alert(api.name);
                        const values = 
                        [
                            {
                                
                                "fileUrl":api.download_url,
                                "fileName":repoName,
                                
                                
                            }
                        ];
                        console.log(values);
                        const encoded = btoa(JSON.stringify(values));
                        const targetURL = '../code?id=' + encoded;
                        window.location.href = targetURL;
                    });
    
                    const deleteButton = createDeleteButton();
                    deleteButton.addEventListener('click', function() {
                        deleteItem(api.sha,api.path,repoName);    
                    });
                    itemsDiv.appendChild(deleteButton);
                }

                if (api.name === 'index.html' && api.type === 'file') {

                    const addButton = document.createElement('a');
                    addButton.className = "directories-add";
                    addButton.innerHTML = '<button class="files-edit">Edit file</button>';
                    addButton.addEventListener('click', function() {
                        // alert(api.name);
                        const values = 
                    [{
                        "pageIs": pageIs,      
                        "indexHtmlRaw": api.download_url,                            
                        "indexHtmlApi": api.url,
                        "indexHtmlSha": api.sha,
                        "indexHtmlPath": api.path,
                        "repoName": repoName,  
                        "devJsonRaw": devJsonRaw,                            
                        "devJsonApi": devJsonApi,
                        "devJsonSha": devJsonSha,
                        "dir": dirName,
                        "base": `https://${user}.github.io/${repoName}/${dirName}/`

                    }];
                        const encoded = btoa(JSON.stringify(values));
                        const targetURL = '../editor?id=' + encoded;
                        window.location.href = targetURL;
                        console.log(values);
                    });
        
                    itemsDiv.appendChild(addButton);
                }


                

        }
    
           
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
    }   
    
    loadFiles();