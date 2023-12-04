function solidDefaultColor(){
    //GET COLOR
    const getDefaultColor = document.getElementById('color-current-bg').textContent;
    //THUMB
    const solidColorThumb = document.getElementById('solid-color-thumbnail');
    solidColorThumb.style.backgroundColor = getDefaultColor;
    //Button
    const solidColorButton = document.getElementById('solid-color-btn');
    solidColorButton.style.textDecoration = 'underline';
    solidColorButton.style.textUnderlinePosition = 'under';
    //PICKER 
    const solidColorPickerDiv = document.getElementById("solid-coloris");
    solidColorPickerDiv.style.color = getDefaultColor; 

    const solidColorInput = document.getElementById("solid-coloris-input");
    solidColorInput.value = getDefaultColor;

}

function radialDefaultColor(){
     //GET COLOR
     const getDefaultColor = document.getElementById('color-current-bg').textContent;
     //THUMB
     const radialColorThumb = document.getElementById('radial-color-thumbnail');
     radialColorThumb.style.backgroundColor = getDefaultColor;
     //Button
     const radialColorButton = document.getElementById('radial-color-btn');
     radialColorButton.style.textDecoration = 'underline';
     radialColorButton.style.textUnderlinePosition = 'under';
     //PICKER 
     const radialColorPickerDiv = document.getElementById("radial-coloris");
     radialColorPickerDiv.style.color = getDefaultColor; 

     const radialColorInput = document.getElementById("radial-coloris-input");
     radialColorInput.value = getDefaultColor;
}

function linearDefaultColor(){
     //GET COLOR
     const getDefaultColor = document.getElementById('color-current-bg').textContent;
     //THUMB
     const linearColorThumb = document.getElementById('linear-color-thumbnail');
     linearColorThumb.style.backgroundColor = getDefaultColor;
     //Button
     const linearColorButton = document.getElementById('linear-color-btn');
     linearColorButton.style.textDecoration = 'underline';
     linearColorButton.style.textUnderlinePosition = 'under';
     //PICKER 
     const linearColorPickerDiv = document.getElementById("linear-coloris");
     linearColorPickerDiv.style.color = getDefaultColor; 

     const linearColorInput = document.getElementById("linear-coloris-input");
     linearColorInput.value =  getDefaultColor;
}