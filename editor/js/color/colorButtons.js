function solidColorButton(){
    const solidGetBgId = document.getElementById('solid-bg-id').textContent;
    const solidBgId = document.getElementById(solidGetBgId);
    const solidBgColor = solidBgId.style.backgroundColor;
    console.log(solidBgColor);

    const solidColorThumb = document.getElementById('solid-color-thumbnail');
    solidColorThumb.style.backgroundColor = solidBgColor;

    const solidColorPicker = document.getElementById("solid-coloris");
    solidColorPicker.style.color = solidBgColor;

    const solidColorInput = document.getElementById("solid-coloris-input");
    solidColorInput.value = solidBgColor;
}

function radialColorButton(){
    const radialGetBgId = document.getElementById('radial-bg-id').textContent;
    const radialBgId = document.getElementById(radialGetBgId);
    const radialBgColor = radialBgId.style.backgroundColor;
    console.log(radialBgColor);

    const radialColorThumb = document.getElementById('radial-color-thumbnail');
    radialColorThumb.style.backgroundColor = radialBgColor;

    const radialColorPicker = document.getElementById("radial-coloris");
    radialColorPicker.style.color = radialBgColor;

    const radialColorInput = document.getElementById("radial-coloris-input");
    radialColorInput.value = radialBgColor;
}

function linearColorButton(){
    const linearGetBgId = document.getElementById('linear-bg-id').textContent;
    const linearBgId = document.getElementById(linearGetBgId);
    const linearBgColor = linearBgId.style.backgroundColor;
    console.log(linearBgColor);

    const linearColorThumb = document.getElementById('linear-color-thumbnail');
    linearColorThumb.style.backgroundColor = linearBgColor;

    const linearColorPicker = document.getElementById("linear-coloris");
    linearColorPicker.style.color = linearBgColor;

    const linearColorInput = document.getElementById("linear-coloris-input");
    linearColorInput.value = linearBgColor;
}