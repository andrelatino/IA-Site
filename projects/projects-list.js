  
function github_get_sites() {
    fetch(`${githubRepoUrl}?sort=committer-date`, {
        headers: {
            'Authorization': `Bearer ${githubApi}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'If-None-Match': '' // Include this line to bypass caching           
        }
    })
    .then(response => {
        console.log('project list : ', response);
        return response.json();
    })
    .then(data => {
        var getTotal = data.length;
        if (getTotal === undefined) {
            var showTotal = 0;  
        }else{
            var showTotal = getTotal;
        }

        addSubtitle = document.getElementById('grid');
        addSubtitle.className = 'sites-grid';
        addSubtitle.innerHTML= `
        <div class='sites-subtitle'>
            <p> Total : ${showTotal}</p>
            <button id="addNewSite" onclick="modalNewOpen();" class="sites-add" ><img class="addIcon" src="../global/file/add.svg"></button>
        </div>`;
        const gridDiv = document.getElementById('grid');
        for (const api of data) {

            var hasPages = api.has_pages;

            var urlEncoded = `https://${githubUser}.github.io/${api.name}`;
            
            
            if (hasPages===true){
                hasPages = `<a href='https://${githubUser}.github.io/${api.name}'>${api.name}</a>`;
            }else{
                hasPages = "Non";
            }


            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'sites-items';
            itemsDiv.innerHTML = `

            
             <div class="sites-content">
                <div id="iframe-box">
                    <div class="thumbnail">
                        <iframe src="${urlEncoded}" frameborder="0" loading="lazy" scrolling="no"></iframe>
                    </div>
                </div>
                <div class="sites-cta">     
                    <h2 class="sites-title">${api.name}</h2>
                    <p class="sites-created">Created on : ${new Date(api.created_at).toLocaleString('fr-FR')}</p>
                    <p class="sites-updated">Updated on : ${new Date(api.updated_at).toLocaleString('fr-FR')}</p>
                    <p class="sites-ID">Site ID : ${api.id} </p>
                    <p class="sites-user">User : ${api.owner.login} </p>
                    <p class="sites-link">Site Link : ${hasPages} </p>
                    <p class="sites-type">Type : ${api.description} </p>
                    <div class = "sites-buttons">
                        <button class="sites-domain" id="site-domain" onclick="modalDomainOpen()">Custom Domain</button>
                        <button class="sites-edit" id="buttonEdit${api.id}">Open project</button>
                        <button class="sites-delete" id="buttonDelete${api.id}"><img src="../global/file/delete-white.svg"></button>
                    </div>   
                </div>
                
             </div>
             
                   
            `;
        gridDiv.appendChild(itemsDiv);
        const buttonEdit = document.getElementById(`buttonEdit${api.id}`);
        const buttonDelete = document.getElementById(`buttonDelete${api.id}`);
                
            buttonEdit.addEventListener('click', () => {  
                
                localStorage.setItem ('Type', api.description);
                
                const values = 
                [
                    {
                        "user":api.owner.login,
                        "repo":api.name,
                        "base": `https://${githubUser}.github.io/`

                    }
                ];

                console.log(values);
                const encoded = btoa(JSON.stringify(values));      
                const targetURL = '../directories?id=' + encoded;
              
                window.location.href = targetURL;

                localStorage.setItem("repoName", api.name);
                localStorage.setItem('repo', api.name);
                
            });
            buttonDelete.addEventListener('click', () => {
                const showOverlay =document.querySelector('.overlay');
                showOverlay.style.visibility = "visible";
                showOverlay.style.display = "grid";
                const showDeleteBox = document.getElementById('deleteBox');
                showDeleteBox.style.visibility='visible';
                const getApiName = document.getElementById('fileName');
                getApiName.textContent = api.name;
              
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

github_get_sites();