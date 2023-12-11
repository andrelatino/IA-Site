// async function createRepo() {

//   var selectElement = document.getElementById("projectOptions");
//   var selectedValue = selectElement.value;
  
//   const message = document.getElementById('message');
//   message.textContent = 'Creating project...';

//   var token = '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';
//   var user = 'icheff';
//   const apiUrl = 'https://api.github.com';
//   const inputName = document.getElementById('inputNameValue');
//   const inputNameValue = inputName.value.toLowerCase();
//   const inputDescription = document.getElementById('inputNameValue');
//   const inputNameDescription = inputDescription.value;

//   const url = `${apiUrl}/user/repos`;
//   const headers = {
//     Authorization: `token ${token}`,
//     'Content-Type': 'application/json',
//     'Accept': 'application/vnd.github.v3+json',
//     'X-GitHub-Api-Version': '2022-11-28',
//     'If-None-Match': '' // Include this line to bypass caching
//   };

//   const body = JSON.stringify({
//     name: inputNameValue,
//     description: selectedValue,
//     homepage: 'https://github.com',
//     private: false,
//     is_template: false,
//   });

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers,
//       body,
//     });

//     if (response.ok) {
//       console.log('response.ok: '+response.ok);
//       // Add default files
//       const defaultFiles = ['index-0.json','index.html'];
//       for (let file of defaultFiles) {
//         const fileUrl = `${apiUrl}/repos/${user}/${inputNameValue}/contents/${file}`;
//         const fileContent = ''; // can replace with any default content
//         const fileBody = JSON.stringify({
//           message: `Add default file ${file}`,
//           content: btoa(fileContent)
//         });

//         const fileResponse = await fetch(fileUrl, {
//           method: 'PUT',
//           headers,
//           body: fileBody,
//         });

//         if (fileResponse.ok) {
//           console.log('fileResponse.ok: '+fileResponse.ok);
          
//           console.log(`${file} created!`);

//           setTimeout(() => {
//             // Give some time for the main branch to be fully created
//             createPage(user, inputNameValue, token);
//           }, 5000); // Wait for 5 seconds (adjust as needed)

//         } else {
//           console.error(`Error creating file ${file}:`, fileResponse);
//         }
//       }
//     } else {
//       const message = document.getElementById('message');
//       message.textContent = 'Project creation failed!';
//       console.error(
//         'Failed to create repository:',
//         response.status,
//         response.statusText
//       );
//     }
//   } catch (error) {
//     console.error('Error creating repository:', error);
//   }
// }

// function createPage(owner, repo, token) {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//       'X-GitHub-Api-Version': '2022-11-28'
//     },
//     body: JSON.stringify({
//       owner: owner,
//       repo: repo,
//       source: {
//         branch: 'main',
//         path: '/'
//       }
//     })
//   };

//   const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pages`;

//   fetch(apiUrl, requestOptions)
//   .then(response => {
//     console.log(response);
//     if (response.status === 201) {
//       const message = document.getElementById('message');
//       message.textContent = 'Project created succesfully! ';
//       return response.json();
//     }else if (response.status === 409) {
//       const message = document.getElementById('message');
//       message.textContent = 'Project created succesfully! ';
//       return response.json();
//     } else {
//       const message = document.getElementById('message');
//       message.textContent = 'Project creation failed!';
//       throw new Error('Failed to create project!');
//     }
//   })
//   .then(data => {
//     console.log('GitHub Pages creation response:', data);
//   })
//   .catch(error => {
//     console.error('Error creating GitHub Pages:', error);
//     const message = document.getElementById('message');
//     message.textContent = 'Project creation failed!';
//   });
// }
