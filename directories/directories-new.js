  
  // var githubBaseUrl = localStorage.getItem('githubBaseUrl');
  // var githubRepoUrl = localStorage.getItem('githubRepoUrl');
  // var githubRepoName = localStorage.getItem('githubRepoName');
  // var githubUser = localStorage.getItem('githubUser');
  // var githubApi = localStorage.getItem('githubApi');
  // var githubEmail = localStorage.getItem('githubEmail');

  
  
  
 
  const createPage = async () => {
  const currentTimestampMillis = Date.now();
  console.log(currentTimestampMillis);

  // const githubUser = githubUser;
  const githubRepo = githubRepoName;
  const token = githubApi;
  const inputElement = document.getElementById('pageName');
  const dir = inputElement.value;

  const method = 'PUT';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `token ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'If-None-Match': '' // Include this line to bypass caching
  };
  
  let successCount = 0;
  let failCount = 0;

const createFileOnGithub = async (pageName) => {
    const url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${dir}/${pageName}`;
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

await createFileOnGithub('index-0.json');
await createFileOnGithub('style.css');
await createFileOnGithub('script.js');
await createFileOnGithub('index.html');

console.log(`Total files successfully uploaded: ${successCount}`);
console.log(`Total files failed to upload: ${failCount}`);

};
