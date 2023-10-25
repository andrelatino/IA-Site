function loadXSCss() {
    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'XS (Min 640px)';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    const regex = new RegExp(`@media screen and \\(max-width:640px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('xs-textarea');
        textarea.value = formattedProperties;
        console.log('XS CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
    }
}

function loadSCss() {
    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'S (Min 641px & Max 768px)';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    
    const regex = new RegExp(`@media screen and \\(min-width:641px\\) and \\(max-width:768px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('s-textarea');
        textarea.value = formattedProperties;
        console.log('S CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
    }
}

function loadMCss() {
    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'M (Min 769px & Max 1024px)';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    
    const regex = new RegExp(`@media screen and \\(min-width:769px\\) and \\(max-width:1024px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('m-textarea');
        textarea.value = formattedProperties;
        console.log('M CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
    }
}
function loadLCss() {
    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'L (Min 1025px & Max 1280px)';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    
    const regex = new RegExp(`@media screen and \\(min-width:1025px\\) and \\(max-width:1280px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('l-textarea');
        textarea.value = formattedProperties;
        console.log('L CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
    }
}

function loadXLCss() {
    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'XL (Min 1281px)';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    const regex = new RegExp(`@media screen and \\(min-width:1281px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('xl-textarea');
        textarea.value = formattedProperties;
        console.log('XL CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
    }
}

function loadALLCss() {
    const buttonID = document.getElementById('buttonID-text')
    buttonID.textContent = 'ALL (Min 0px)';
    const styleID = document.getElementById('styleID-text');
    const styleValue = styleID.textContent;
    const styleElement = document.getElementById(styleValue);
    const elementID = document.getElementById('elementID-text');
    const elementValue = elementID.textContent;
    const cssText = styleElement.textContent;
    const regex = new RegExp(`@media screen and \\(min-width:0px\\){#${elementValue}\\s*{([^}]+)}}`);
    const matches = cssText.match(regex);
    if (matches) {
        const ruleContent = matches[1];
        const properties = ruleContent.split(';');
        const formattedProperties = properties
            .filter(Boolean)
            .map(property => property.trim() + ';')
            .join('\n');
        const textarea = document.getElementById('all-textarea');
        textarea.value = formattedProperties;
        console.log('ALL CSS Start ------');
        console.log(formattedProperties);
        console.log('-------------------');
    } else {
        console.log(`No CSS rule found for #${elementValue}`);
    }
}