const createFile = async () => {

  const encodedValue = getUrlParameter('id');
    const decodedValues = JSON.parse(atob(encodedValue));

    for (const item of decodedValues) {
        var repoName = item.repo;
        var repoDir = item.dir;
        console.log('repo:', repoName);
        console.log('dir:', repoDir);
 
    }

  const githubUser = 'icheff';
  const githubRepo = repoName;
  const githubDir = repoDir;
  const fileNameLowerCase = document.getElementById('fileName');
  const fileSelectValue = document.getElementById('files-select').value;  // Get the value from the select element
  const fileName = fileSelectValue;


  const url = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${githubDir}/${fileName}`;
  const method = 'PUT';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  const content = btoa('');

  const body = JSON.stringify({
    message: 'Add new file',
    committer: {
      name: 'Icheff',
      email: 'icheff.com@gmail.com'
    },
    content: content
  });

  const response = await fetch(url, { method, headers, body });
  const data = await response.json();

  if (response.ok) {
    console.log('File updated successfully:', data);
  } else {
    console.error('Error updating file:', data);
  }
};

  
//   createFile();
  