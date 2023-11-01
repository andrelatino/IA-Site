let initialRatio = null;

function initialize() {
    const widthInput = document.getElementById("widthInput");
    const heightInput = document.getElementById("heightInput");

    const initialWidth = parseFloat(widthInput.value.replace(",", "."));
    const initialHeight = parseFloat(heightInput.value.replace(",", "."));

    if (!isNaN(initialWidth) && !isNaN(initialHeight) && initialWidth > 0 && initialHeight > 0) {
        initialRatio = initialWidth / initialHeight;
    }
    
    updateValues();
}

function updateValues() {
    const widthInput = document.getElementById("widthInput");
    const heightInput = document.getElementById("heightInput");
    const widthRatioDisplay = document.getElementById("widthRatioDisplay");
    const heightRatioDisplay = document.getElementById("heightRatioDisplay");

    const width = parseFloat(widthInput.value.replace(",", "."));
    const height = parseFloat(heightInput.value.replace(",", "."));

    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
        const widthRatio = width / height;
        const heightRatio = height / width;

        widthRatioDisplay.textContent = `Width Ratio: ${Math.round(widthRatio)}`;
        heightRatioDisplay.textContent = `Height Ratio: ${Math.round(heightRatio)}`;

        if (initialRatio !== null) {
            if (document.activeElement === widthInput) {
                heightInput.value = Math.round(width / initialRatio);
            } else if (document.activeElement === heightInput) {
                widthInput.value = Math.round(height * initialRatio);
            }
        }
    } else {
        widthRatioDisplay.textContent = "Width Ratio: 0";
        heightRatioDisplay.textContent = "Height Ratio: 0";
        initialRatio = null;
    }
}

const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
widthInput.addEventListener("input", updateValues);
heightInput.addEventListener("input", updateValues);

initialize();
