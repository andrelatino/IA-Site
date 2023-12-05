function solidDefaultColor(){
    //GET COLOR
    const getDefaultColor = document.getElementById('color-current-bg').textContent;
    //THUMB
    const solidColorThumb = document.getElementById('solid-color-thumbnail');
    solidColorThumb.style.background = getDefaultColor;
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
    const radialGetBgId = document.getElementById('radial-bg-id');
    const radialBgId = radialGetBgId.textContent;

    

    const divElement = document.getElementById(radialBgId);
    const styleAttribute = divElement.getAttribute('style'); // Get the style attribute
    const matches = styleAttribute.match(/background:(.*?);/); // Extract the background property value
    
    console.log('styleAttribute: '+styleAttribute);
    console.log('radialBgId: '+radialBgId);
    console.log('matches: '+matches);

    if (matches && matches.length >= 2) {
        const radialBgColorIs = matches[1].trim(); // Get the background property value
        const radialColorThumb = document.getElementById('radial-color-thumbnail');
        radialColorThumb.style.background = radialBgColorIs;

        // Use regular expressions to extract the colors
        const regex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/g;
        const colors = radialBgColorIs.match(regex);

        if (colors && colors.length >= 2) {
            const radialFirstColorIs = colors[0]; // The first color
            const radialSecondColorIs = colors[1]; // The second color

            const radialColorPicker1 = document.getElementById("radial-coloris1");
            radialColorPicker1.style.color = radialFirstColorIs;
            const radialColorPicker2 = document.getElementById("radial-coloris2");
            radialColorPicker2.style.color = radialSecondColorIs;

            const radialColorInput1 = document.getElementById("radial-coloris-input1");
            radialColorInput1.setAttribute("value", radialFirstColorIs);
            const radialColorInput2 = document.getElementById("radial-coloris-input2");
            radialColorInput2.setAttribute("value", radialSecondColorIs);


            console.log('First Color:', radialFirstColorIs);
            console.log('Second Color:', radialSecondColorIs);
        } else {
        console.log('Radial gradient does not contain two colors.');
        }

        console.log('radialBgId: '+radialBgId);
        console.log('radialBgColorIs: '+radialBgColorIs);

    }

    const solidColorButton = document.getElementById('solid-color-btn');
    solidColorButton.style.textDecoration = 'none';
    solidColorButton.style.textUnderlinePosition = 'none';
    const radialColorButton = document.getElementById('radial-color-btn');
    radialColorButton.style.textDecoration = 'underline';
    radialColorButton.style.textUnderlinePosition = 'under';
    const linearColorButton = document.getElementById('linear-color-btn');
    linearColorButton.style.textDecoration = 'none';
    linearColorButton.style.textUnderlinePosition = 'none';
}

function linearDefaultColor(){

    const linearGetBgId = document.getElementById('linear-bg-id');
    const linearBgId = linearGetBgId.textContent;

    const divElement = document.getElementById(linearBgId);
    const styleAttribute = divElement.getAttribute('style'); // Get the style attribute
    const matches = styleAttribute.match(/background:(.*?);/); // Extract the background property value

    if (matches && matches.length >= 2) {
        const linearBgColorIs = matches[1].trim(); // Get the background property value
        const linearColorThumb = document.getElementById('linear-color-thumbnail');
        linearColorThumb.style.background = linearBgColorIs;

        console.log('linearBgId: '+linearBgId);
        console.log('linearBgColorIs: '+linearBgColorIs);

    }

    const solidColorButton = document.getElementById('solid-color-btn');
    solidColorButton.style.textDecoration = 'none';
    solidColorButton.style.textUnderlinePosition = 'none';
    const radialColorButton = document.getElementById('radial-color-btn');
    radialColorButton.style.textDecoration = 'none';
    radialColorButton.style.textUnderlinePosition = 'none';
    const linearColorButton = document.getElementById('linear-color-btn');
    linearColorButton.style.textDecoration = 'underline';
    linearColorButton.style.textUnderlinePosition = 'under';
}