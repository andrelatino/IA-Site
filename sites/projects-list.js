  
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
                        <iframe id="${api.id}" src="${urlEncoded}" frameborder="0" loading="lazy" scrolling="no"></iframe>
                    </div>
                </div>
                <div class="sites-cta">     
                    <p class="sites-link">Link enabled : ${hasPages} </p>
                    <p class="sites-created">Created on : ${new Date(api.created_at).toLocaleString('fr-FR')}</p>
                    <p class="sites-updated">Updated on : ${new Date(api.updated_at).toLocaleString('fr-FR')}</p>
                    <p class="sites-ID">ID : ${api.id} </p>
                    <p class="sites-ID">Template : ${api.is_template} </p>
                    <p class="sites-user">User : ${api.owner.login} </p>
                    <p class="sites-name">Name : ${api.name} </p>
                    
                    <p class="sites-type">Type : ${api.description} </p>
                    <div class = "sites-buttons">
                        <button class="sites-domain" id="buttonSettings${api.id}">SETTINGS</button>
                        <button class="sites-edit" id="buttonEdit${api.id}">EDIT</button>
                        <button class="sites-delete" id="buttonDelete${api.id}"><img src="../global/file/delete-white.svg"></button>
                    </div>
                </div>
                
             </div>
             
                   
            `;
        gridDiv.appendChild(itemsDiv);
        
        const buttonEdit = document.getElementById(`buttonEdit${api.id}`);
        const buttonDelete = document.getElementById(`buttonDelete${api.id}`);
        const buttonSettings = document.getElementById(`buttonSettings${api.id}`);

            buttonSettings.addEventListener('click', () => {


                localStorage.setItem('githubRepoName', api.name);
                

                const siteID = document.getElementById('siteID');
                siteID.textContent = api.id;


                const templateIs = document.getElementById('templateIs');
                templateIs.textContent = api.is_template;

     

                if(api.is_template === true ){
                    document.getElementById("checkbox-status").checked = true;
                }else if(api.is_template === false ){
                    document.getElementById("checkbox-status").checked = false;
                }
                


                const siteName = document.getElementById('siteName');
                siteName.textContent = api.name;
                
                

                const apiID = `${api.id}`;
                const apiIDText = document.querySelector('.flip-id');
                apiIDText.textContent = apiID;

                const apiUrl = `${api.name}`;
                const elementsWithApiUrlClass = document.querySelectorAll('.flip-url');
                elementsWithApiUrlClass.forEach(function(element) {
                    element.textContent = apiUrl;
                });

                const showOverlay = document.querySelector('.overlay');

                showOverlay.style.visibility = "visible";
                showOverlay.style.display = "grid";
                openDiv('.card');
            
            });
                
            buttonEdit.addEventListener('click', () => {  

                localStorage.setItem('githubRepoName', api.name);
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
                const showOverlay = document.querySelector('.overlay');
                showOverlay.style.visibility = "visible";
                showOverlay.style.display = "grid";
                const showDeleteBox = document.getElementById('deleteBox');
                showDeleteBox.style.visibility='visible';
                const getApiName = document.getElementById('siteName');
                getApiName.textContent = api.name;
              
            });
            
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

github_get_sites();

function alertCheckboxStatus() {
    var checkbox = document.getElementById("checkbox-status");
    const templateIS = document.getElementById('templateIs');
    
    if (checkbox.checked) {
        templateIS.textContent = true;
    } else {
        templateIS.textContent = false;
    }
  }
  
  // Add an event listener to the checkbox to call the function when it changes
  



