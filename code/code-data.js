// Initialize the CodeMirror editor
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineWrapping: true,
    lineNumbers: true,
    theme: "material",
});

// Load data into the editor
codeLoadData();

async function codeLoadData() {
    const codeUrl = localStorage.getItem('codeUrl');
    const url = codeUrl;
    const apiKey = githubApi; // Replace with your GitHub API key

    const headers = new Headers({
        'Authorization': `token ${apiKey}`
    });

    const requestOptions = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (response.ok) {
            // UPDATE LOCAL STORAGE VALUES
            const contenidoBase64 = data.content;
            localStorage.setItem('codeEncoded', contenidoBase64);

            const contenidoDecodificado = atob(contenidoBase64);
            localStorage.setItem('codeDecoded', contenidoDecodificado);

            localStorage.setItem('codeSha', data.sha);

            // Set the editor's content
            editor.setValue(contenidoDecodificado);

            console.log('Contenido del fichero:');
            console.log(contenidoDecodificado);
        } else {
            console.error('Error al cargar el fichero desde la API de GitHub');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

// Update data from the editor
// function codeUpdateData(editorData) {
//     showPreloader();
//     const url = localStorage.getItem('codeUrl');
//     const sha = localStorage.getItem('codeSha');
//     const token = githubApi;
//     const data = editorData;

//     const updateData = {
//         message: 'Update',
//         content: btoa(data), // Encode the content in base64
//         sha: sha, // SHA of the file previously obtained
//     };

//     return fetch(url, {
//         method: 'PUT',
//         headers: {
//             Authorization: `token ${token}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//     })
//         .then(response => {
//             if (response.ok) {
//                 console.log(response);
//                 showSuccess();
//             } else {
//                 showFailure();
//                 throw new Error(`Error al actualizar el archivo: ${response.statusText}`);
//             }
//         })
//         .catch(error => {
//             showFailure();
//             throw new Error(`Error al actualizar el archivo: ${error.message}`);
//         });
// }

function codeUpdateData(editorData) {
    showPreloader();
    const url = localStorage.getItem('codeUrl');
    const sha = localStorage.getItem('codeSha');
    const token = githubApi;
    const data = editorData;

    const updateData = {
        message: 'Update',
        content: btoa(data), // Encode the content in base64
        sha: sha, // SHA of the file previously obtained
    };

    return fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Convertir la respuesta en JSON
        } else {
            showFailure();
            throw new Error(`Error al actualizar el archivo: ${response.statusText}`);
        }
    })
    .then(jsonResponse => {
        const newSha = jsonResponse.content.sha; // Extraer el nuevo SHA de la respuesta
        console.log('Nuevo SHA:', newSha); // Registrar el nuevo SHA en la consola
        localStorage.setItem('codeSha', newSha);
        showSuccess();
    })
    .catch(error => {
        showFailure();
        throw new Error(`Error al actualizar el archivo: ${error.message}`);
    });
}


document.getElementById('editor-save').addEventListener('click', function () {
    const editorValue = editor.getValue();
    console.log('editorValue: ' + editorValue);
    codeUpdateData(editorValue);
});
