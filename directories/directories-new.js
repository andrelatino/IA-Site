const createContent = async () => {
  showPreloader();
  const dirMessage = document.getElementById('dir-message');
  dirMessage.textContent = "Adding page...!"

  const selectElement = document.getElementById('selectDirOrFile');
  const selectedOption = selectElement.value;
  const inputElement = document.getElementById('pageName');
  const pageName = inputElement.value;

  const githubRepo = githubRepoName;
  const token = githubApi;

  const method = 'PUT';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `token ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'If-None-Match': '' // Include this line to bypass caching
  };

  let successCount = 0;
  let failCount = 0;

  const createFileOnGithub = async (addFiles) => {
    
    let url;

    if (selectedOption === 'Page') {
      url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${pageName}/${addFiles}`;
      console.log('Page:'+url);
    } else if (selectedOption === 'File') {
      url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${addFiles}`;
      console.log('File:'+url);
    }

    const content = btoa('');

    const body = JSON.stringify({
      message: `Add new file ${pageName}`,
      committer: {
        name: githubUser,
        email: githubEmail
      },
      content: content
    });

    try {
      const response = await fetch(url, { method: 'PUT', headers: {'Authorization': `token ${token}`}, body });
      const data = await response.json();

      if (response.ok) {
        
        const dirMessage = document.getElementById('dir-message');
        dirMessage.textContent = "Page Added!"
        console.log(`File ${pageName} updated successfully:`, data);
        successCount++;
      } else {
        console.error(`Error updating file ${pageName}:`, data);
        failCount++;
      }
    } catch (error) {
      console.error(`An error occurred while creating ${pageName}:`, error);
      failCount++;
    }
  };

  if (selectedOption === 'File') { 
    await createFileOnGithub(pageName);
  } 
  else if (selectedOption === 'Page') {
    await createFileOnGithub('index.html');
  }
  
  
  showSuccess();
  console.log(`Total files successfully uploaded: ${successCount}`);
  console.log(`Total files failed to upload: ${failCount}`);
};


// Function to handle the change event of the select element
const handleSelectChange = () => {
  const selectElement = document.getElementById('selectDirOrFile');
  const selectedOption = selectElement.value;

  if (selectedOption === 'File') {
    const buttonTextIs = document.getElementById('createNewButton');
    buttonTextIs.textContent = 'Add New File';
    console.log('Selected option: File');
  } else if (selectedOption === 'Page') {
    const buttonTextIs = document.getElementById('createNewButton');
    buttonTextIs.textContent = 'Add New Page';
    console.log('Selected option: Page');
  }
};

// Add an event listener to the select element
const selectElement = document.getElementById('selectDirOrFile');
selectElement.addEventListener('change', handleSelectChange);
