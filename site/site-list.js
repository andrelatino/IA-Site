const pat = githubApi; // Replace with your PAT
const siteID = localStorage.getItem('githubRepoId');
var pageTitleLS = localStorage.getItem('githubRepoName');
var pageTitleTxt = document.getElementById('admin-title-text');
pageTitleTxt.textContent = pageTitleLS;

if (siteID) {
    const apiUrl = `https://api.github.com/repositories/${siteID}/contents`;
    const headers = new Headers({
        'Authorization': `Bearer ${pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'If-None-Match': '', // Include this line to bypass caching
    });

    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(data => {

          //FILTER DATA
          const filteredData = data.filter(api => api.name !== "README.md"); // Filter out README.md
          getTotal = filteredData.length;
          if (getTotal === undefined) {
              var showTotal = 0;  
          } else {
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
          
          //SHOW DATA
          for (const api of filteredData) {
              const itemsDiv = document.createElement('div');
              itemsDiv.className = 'directories-items';
              itemsDiv.innerHTML = `
              <div class="directories-content"> 
                  <h2 class="directories-txt">${api.name}</h2>
                  <p class="directories-txt">Project: ${githubRepoName}</p>
                  <p class="directories-txt">Type: ${api.type}</p>
              </div>
              `;
              gridDiv.appendChild(itemsDiv);
          } 
      })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
}
