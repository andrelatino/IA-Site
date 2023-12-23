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
            // Get the div with id 'grid' to display raw file content
            let gridDiv = document.getElementById('grid');

            // Clean up any existing content in the div
            gridDiv.innerHTML = "";

            let rawFileTextarea = document.createElement('textarea');
            rawFileTextarea.className="file-textarea"
            rawFileTextarea.id="file-textarea"
            rawFileTextarea.style.width = '100%'; // You can adjust width and height as needed
            rawFileTextarea.style.height = '400px'; // This will provide a decent-sized editable area
            rawFileTextarea.placeholder= 'Add your code here...';
            rawFileTextarea.value = data;

            // Append the textarea to the 'grid' div
            gridDiv.appendChild(rawFileTextarea);
        })
        .catch(error => {
            console.error('Error fetching raw file content:', error);
        });
}

githubRawFile();



