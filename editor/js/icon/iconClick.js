
var imageXsQuery =  '(max-width:640px)';
var imageSQuery =  '(min-width:641px) and (max-width:768px)';
var imageMQuery =  '(min-width:769px) and (max-width:1024px)';
var imageLQuery =  '(min-width:1025px) and (max-width:1280px)';
var imageXlQuery =  '(min-width:1281px)';

var imageEmpty = './assets/svg/icons/upload-empty.svg';
var imagePlaceholder = 'Image URL (optional)';

function clickAllIcon() {
    
    const imageID = localStorage.getItem('imageID');
    const clickImage = document.getElementById(imageID);
    const inputElement = document.getElementById('image-all-input');
    const inputValue = inputElement.value;
    const inputPlaceHolder = document.getElementById('image-all-input');
    const thumbBG = document.getElementById('image-all-thumbnail');

    if (inputValue === '') {
        // alert ('input is empty');
        thumbBG.srcset = imageEmpty;
        inputPlaceHolder.setAttribute('placeholder', 'Image URL (mandatory)');
        clickImage.setAttribute("src", );
        
        
    } else {
        // alert ('input is not empty');
        thumbBG.srcset = inputValue;
        clickImage.setAttribute("src", inputValue);
    }

}
