function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const encodedValue = getUrlParameter('id');
const decodedValues = JSON.parse(atob(encodedValue));

for (const item of decodedValues) {
    var repo = item.repo;
    var base = item.base;
    var user = item.user;
    console.log('repo:', repo);
    console.log('base:', base);
    console.log('user:', user);
    var repoName = item.repo;
    localStorage.setItem('repo', item.repo);  
    
    var pageTitle = document.getElementById('admin-title-text');
    var pageBreadCrumb = document.getElementById('admin-bread-crumb');

}
function loadDirectories() {
    const baseURL = 'https://api.github.com/repos';
    const owner = githubUser;
    const repo = repoName;
    const url = `${baseURL}/${owner}/${repo}/contents`;
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
        pageBreadCrumb.textContent = 'sites / '+repoName;


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
                <p class="directories-txt">Project: ${repoName}</p>
                <p class="directories-txt">Type: ${api.type}</p>
                
            </div>
            `;

            if (api.name.includes("index-")) {

                // var devJsonName = api.name;
                var devJsonRaw = api.download_url;                           
                var devJsonApi = api.url;
                var devJsonSha = api.sha;
            }

            if (api.name !== 'index.html' && api.type === 'file') {
                // Create and append the delete button
                const addButton = document.createElement('a');
                addButton.className = "directories-add";
                addButton.innerHTML = '<button class="directories-edit">Edit File</button>';
                itemsDiv.appendChild(addButton);
                addButton.addEventListener('click', function() {
                    //SET DEFAULT LOCALSTORAGE VALUES
                    localStorage.setItem('codeSha',api.sha);
                    localStorage.setItem('codePath',api.path);
                    localStorage.setItem('codeUrl',api.url);
                    // alert(api.name);
                    const values = 
                    [
                        {
                            
                            "fileUrl":api.download_url,
                            "fileName":repoName,
                            "fileType":api.name,
                            "fileSha":api.sha,
                            "fileToUpdate":api.url,
                            "filePath":api.path,                              
                            
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

                var pageIs = 'home';
                
                const addButton = document.createElement('a');
                addButton.className = "directories-add";
                addButton.innerHTML = '<button class="directories-edit">Edit File</button>';
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
                        "base": `https://${user}.github.io/${repoName}`
                    }];
                    
                    const encoded = btoa(JSON.stringify(values));
                    console.log(values);
                    const targetURL = '../editor?id=' + encoded;
                    window.location.href = targetURL;
                });
    
                itemsDiv.appendChild(addButton);
            }

            if (api.type === 'dir') {
                const dirButton = document.createElement('a');
                dirButton.className = "dir-button";
                dirButton.innerHTML = '<button class="dir-button">Edit Page</button>';
                dirButton.addEventListener('click', function(){
                    // alert(api.name);
                    const values = 
                    [
                        {
                            "repo":repoName,
                            "user":user,
                            "dir":api.name,
                            "base": `https://${user}.github.io/`
                        }
                    ];
                    console.log(values);
                    const encoded = btoa(JSON.stringify(values));
                    const targetURL = '../files?id=' + encoded;
                    window.location.href = targetURL;
                });
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
loadDirectories();