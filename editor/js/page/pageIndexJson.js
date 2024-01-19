var githubApi = localStorage.getItem('githubApi');
var pageUrl = localStorage.getItem('pageUrl');

if (pageUrl) {
    pageLoadData();
} else {
    console.log('create index.json');
}

// Optimiza la obtención de elementos del DOM y la reutilización de funciones
const getDomElement = id => document.getElementById(id);
const updateLocalStorage = (key, value) => localStorage.setItem(key, value);

//LOAD DATA
async function pageLoadData() {
    const url = pageUrl;
    const apiKey = githubApi;

    const headers = new Headers({
        'Authorization': `token ${apiKey}`
    });

    const requestOptions = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('Error al cargar el fichero desde la API de GitHub');
        }

        const data = await response.json();
        processGitHubResponse(data);
    } catch (error) {
        console.error('Error de red:', error);
    }
}

function processGitHubResponse(data) {
    const contenidoBase64 = data.content;
    updateLocalStorage('pageEncoded', contenidoBase64);
    const contenidoDecodificado = atob(contenidoBase64);
    updateLocalStorage('pageDecoded', contenidoDecodificado);
    updateLocalStorage('pageSha', data.sha);

    const decodedContent = decodeURIComponent(escape(contenidoDecodificado));
    const gridElement = getDomElement('grid');
    if (gridElement) {
        gridElement.innerHTML = encodeTextNodes(decodedContent);
    }

    console.log('Contenido del fichero:', decodedContent);
}

//UPDATE DATA
async function pageUpdateData(content) {
    showPreloader();
    const url = localStorage.getItem('pageUrl');
    const sha = localStorage.getItem('pageSha');
    const token = githubApi;

    const updateData = {
        message: 'Update',
        content: btoa(content),
        sha: sha,
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `token ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        if (!response.ok) {
            showFailure();
            throw new Error(`Error al actualizar el archivo: ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        updateLocalStorage('pageSha', jsonResponse.content.sha);
        showSuccess();
    } catch (error) {
        showFailure();
        console.error('Error al actualizar el archivo:', error);
    }
}

// Simplificación de la creación y guardado de datos
function pageCreateJson() {
    const gridContent = getDomElement('grid').innerHTML;
    return gridContent.trim();
}

function pageSaveData() {
    const newJsonContent = pageCreateJson();
    pageUpdateData(newJsonContent);
}

//------------------------------------------------
// START: ENCODING
//------------------------------------------------

// Unifica las funciones de codificación
function encodeToUnicodeEscape(str) {
    if (str.trim() === '') {
        return ''; // Return an empty string if input is empty or whitespace
    }
    
    return str.replace(/[\u007F-\uFFFF]/g, char => "\\u" + ("0000" + char.charCodeAt(0).toString(16)).slice(-4));
}


function encodeTextNodes(content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const walk = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
        node.nodeValue = encodeToUnicodeEscape(node.nodeValue);
    }
    return tempDiv.innerHTML;
}

function decodeTextNodes(element) {
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walk.nextNode()) {
        const rawText = node.nodeValue;
        const decodedText = decodeDoubleEscapedUnicode(rawText);
        if (rawText !== decodedText) {  // Only update if there was a change
            node.nodeValue = decodedText;
            console.log(decodedText);
        }
    }
}

const observer = new MutationObserver(mutations => {
    const gridDiv = getDomElement("grid");
    if (!gridDiv) return; // Asegúrate de que el elemento 'grid' exista

    observer.disconnect();  // Desconecta el observador inicial
    decodeTextNodes(gridDiv);  // Decodifica los nodos de texto existentes

    const childObserver = new MutationObserver(mutations => {
        decodeTextNodes(gridDiv);
    });
    childObserver.observe(gridDiv, { childList: true, subtree: true });
});

observer.observe(document.body, { childList: true, subtree: true });


function decodeDoubleEscapedUnicode(str) {
    const singleEscaped = str.replace(/\\\\u([a-fA-F0-9]{4})/g, "\\u$1");
    return singleEscaped.replace(/\\u([a-fA-F0-9]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}
//------------------------------------------------
// END: ENCODING
//------------------------------------------------
