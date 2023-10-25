
var imageXsQuery =  '(max-width:640px)';
var imageSQuery =  '(min-width:641px) and (max-width:768px)';
var imageMQuery =  '(min-width:769px) and (max-width:1024px)';
var imageLQuery =  '(min-width:1025px) and (max-width:1280px)';
var imageXlQuery =  '(min-width:1281px)';

var imageEmpty = './assets/svg/icons/upload-empty.svg';
var imagePlaceholder = 'Image URL (optional)';

function updateXsImage() {

    const mediaQuery = imageXsQuery;
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-xs-input').value;
    const inputPlaceHolder = document.getElementById('image-xs-input');
    const thumbBG = document.getElementById('image-xs-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }
    //savePage();
}
function updateSImage() {

    const mediaQuery = imageSQuery;
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-s-input').value;
    const inputPlaceHolder = document.getElementById('image-s-input');
    const thumbBG = document.getElementById('image-s-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }
    //savePage();
}
function updateMImage() {

    const mediaQuery = imageMQuery;
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-m-input').value;
    const inputPlaceHolder = document.getElementById('image-m-input');
    const thumbBG = document.getElementById('image-m-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }
    //savePage();
}
function updateLImage() {

    const mediaQuery = imageLQuery;
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-l-input').value;
    const inputPlaceHolder = document.getElementById('image-l-input');
    const thumbBG = document.getElementById('image-l-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }
    //savePage();
}
function updateXlImage() {

    const mediaQuery = imageXlQuery;
    const pictureID = localStorage.getItem('pictureID');
    const pictureElement = document.getElementById(pictureID);
    const inputValue = document.getElementById('image-xl-input').value;
    const inputPlaceHolder = document.getElementById('image-xl-input');
    const thumbBG = document.getElementById('image-xl-thumbnail');

    if (inputValue.trim() === '') {
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', imagePlaceholder);
        
    }else{
        thumbBG.srcset = inputValue;
    }
    
    if (pictureElement) {
        const sourceElements = pictureElement.getElementsByTagName('source');

        for (let i = 0; i < sourceElements.length; i++) {
            if (sourceElements[i].getAttribute('media') === mediaQuery) {
                sourceElements[i].setAttribute('srcset', inputValue);
                break;
            }
        }
    } else {
        console.error(`No picture element found with the id ${pictureID}`);
    }
    //savePage();
}
function updateAllImage() {
    
    const imageID = localStorage.getItem('imageID');
    const updateImage = document.getElementById(imageID);
    const inputElement = document.getElementById('image-all-input');
    const inputValue = inputElement.value;
    const inputPlaceHolder = document.getElementById('image-all-input');
    const thumbBG = document.getElementById('image-all-thumbnail');

    if (inputValue === '') {
        // alert ('input is empty');
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', 'Image URL (mandatory)');
        updateImage.setAttribute("src", '');
        
        
    } else {
        // alert ('input is not empty');
        thumbBG.srcset = inputValue;
        updateImage.setAttribute("src", inputValue);
    }

    //savePage();
}
