var fileUrl = localStorage.getItem('fileUrl');

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


const encodedValue = getUrlParameter('id');
const decodedValues = JSON.parse(atob(encodedValue));

for (const item of decodedValues) {
    var fileName = item.fileName;
    var fileUrl = item.fileUrl;
   
    console.log('fileName:', fileName);
    console.log('fileUrl:', fileUrl);

}

function githubRawFile() {
    if (!fileUrl) {
        console.error('Repo raw URL is not available in local storage.');
        return;
    }

    fetch(fileUrl)
        .then(response => response.text())
        .then(data => {

            var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
                mode: "javascript",
                lineWrapping: true,
                lineNumbers: true,
                theme: "material",
            });
            
            
            // Set initial CSS content
            editor.setValue(data);
						
						

            

        })
        .catch(error => {
            console.error('Error fetching raw file content:', error);
        });
}

githubRawFile();





