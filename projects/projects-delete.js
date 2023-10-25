async function deleteFile(repo) {
  var apiUrl = 'https://api.github.com';
  var repoName = repo;
  var userName = githubUser;
  var token = githubApi;
  var message = document.getElementById('fileMessage');

  const url = `${apiUrl}/repos/${userName}/${repoName}`;
  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28'       
  };

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (response.status === 204) {
      
      message.textContent = 'Site was deleted!';
    } else if (response.status === 403) {
      message.textContent = 'Delete site is forbidden!';
    } else if (response.status === 404) {
      message.textContent = 'Site not found!';
    } else {
      message.textContent = 'Error deleting site!';
      console.error(
        'Failed to delete repository:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    message.textContent = 'Error deleting site!';
  }
}
function deleteCheck() {
  const name = document.getElementById('fileName').innerText;
  const input = document.getElementById('fileInput').value;
  const message = document.getElementById('fileMessage');

  if (input) {
      if (name === input) {
          deleteFile(name);
          message.textContent = 'Deleting project ...';
      } else{
          message.textContent = 'Site name is wrong';
      }
  }else{
      message.textContent = 'Site name is empty!';
  }
}

function modalDeleteClose() {
  const modalOverlay = document.querySelector('.overlay');
  const modalDelete = document.getElementById("deleteBox");
  modalOverlay.style.display = "none";
  modalDelete.style.visibility = "hidden";
}