async function deleteFile(repo) {
  
  var apiUrl = 'https://api.github.com';
  var repoName = repo;
  var userName = 'icheff';

  const url = `${apiUrl}/repos/${userName}/${repoName}`;
  const headers = {
    'Authorization': 'Bearer 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',
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28'       
  };

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (response.status === 204) {
      const message = document.getElementById('fileMessage');
      message.textContent = 'Site deleted!';
    } else if (response.status === 403) {
      message.textContent = 'Delete is forbidden!';
    } else if (response.status === 404) {
      message.textContent = 'Site not found!';
    } else {
      console.error(
        'Failed to delete repository:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    message.textContent = 'Error deleting site!';
    console.error('Error deleting repository:', error);
  }
}
function deleteCheck() {
  // alert('deletecheck');
  const name = document.getElementById('fileName').innerText;
  const input = document.getElementById('fileInput').value;
  // // const message = document.getElementById('message');
  // const url = document.getElementById('fileUrl').innerText;
  // const sha = document.getElementById('fileSha').innerText;
  const message = document.getElementById('fileMessage');

  if (input) {  // Non-empty strings are considered truthy in JavaScript
      if (name === input) {
        
          deleteFile(name);
          message.textContent = 'Deleting project ...';
      } else{
         
          message.textContent = 'Project name is WRONG';
      }
  }else{
    
      message.textContent = 'Project name is EMPTY';
  }
}