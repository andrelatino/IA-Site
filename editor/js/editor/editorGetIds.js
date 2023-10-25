function editorGetSectionId(element) {
    while (element && element.tagName !== 'SECTION') {
        element = element.parentNode;
    }
    return element ? element.id : null;
}
function editorGetElementId(element) {
    while (element && !element.id) {
        element = element.parentNode;
    }
    return element ? element.id : null;
}

function editorGetStyleId(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) {
        return null;
    }
    const firstChild = section.firstElementChild;
    return firstChild ? firstChild.id : null;
}

function getElementTypeByIdClick(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return null;

  const dataType = element.getAttribute('data-type');
  const tagName = element.tagName.toLowerCase();

  return dataType ? dataType : tagName;
}

  
document.addEventListener('click', function(event) {   


    var sectionID = editorGetSectionId(event.target);
    var elementID = editorGetElementId(event.target);
    var styleID = editorGetStyleId(sectionID);
    var tagName = getElementTypeByIdClick(elementID)

    var elementId = elementID;
    var elementType = getElementTypeById(elementId);
    console.log("elementType:"+elementType); // Output: "container"

    console.log('Section:', sectionID);
    console.log('Style:', styleID);
    console.log('Element:', elementID);
    console.log('Tag:', tagName);

    const desiredSectionID = sectionID; // Replace with the actual ID you want to target
    const desiredSection = document.getElementById(desiredSectionID);

    if (desiredSection) {
        desiredSection.addEventListener('click', function(event) {

            // Fetch all elements that have the class 'admin-outline' within the desired section
            const elementsWithClass = desiredSection.getElementsByClassName('admin-outline');

            // Iterate over these elements and remove the class
            while(elementsWithClass.length > 0){
                elementsWithClass[0].classList.remove('admin-outline');
            }

            // Also remove 'admin-outline' class from the section itself, if it has the class
            if (desiredSection.classList.contains('admin-outline')) {
                desiredSection.classList.remove('admin-outline');
            }

        });
    } else {
        console.log(`The section with ID "${desiredSectionID}" does not exist in the document.`);
}

    
    
  
    
    var classListInput = document.getElementById('all-textarea');
    
    if (!sectionID) {
      classListInput.disabled = false;
    } else {
    
    classListInput.disabled = false;
    var sectionIDText = document.getElementById('sectionID-text');
    sectionIDText.innerHTML = sectionID;
    sectionIDText.classList.remove('hidden');

    var styleIDText = document.getElementById('styleID-text');
    styleIDText.innerHTML = styleID;
    styleIDText.classList.remove('hidden');

    var elementIDText = document.getElementById('elementID-text');
    elementIDText.innerHTML = elementID || 'Select an element';

    var tagIDText = document.getElementById('elementTag');
    tagIDText.innerHTML = tagName+'' || 'Select an element';
    
    localStorage.setItem('sectionID', sectionID);
    localStorage.setItem('styleID', styleID);
    localStorage.setItem('elementID', elementID);

    const chatgptElementID = document.getElementById('chatgptElementID');
    chatgptElementID.textContent = elementID;

    const AllCssProperties = getCssFromAllElements(elementID, styleIDText.innerHTML);
    console.log(AllCssProperties);
    const AllTextValues = document.getElementById('all-textarea');
    AllTextValues.value = AllCssProperties;

    const XsCssProperties = getCssFromXsElements(elementID, styleIDText.innerHTML);
    console.log(XsCssProperties);
    const XsTextValues = document.getElementById('xs-textarea');
    XsTextValues.value = XsCssProperties;

    const SCssProperties = getCssFromSElements(elementID, styleIDText.innerHTML);
    console.log(SCssProperties);
    const STextValues = document.getElementById('s-textarea');
    STextValues.value = SCssProperties;

    const MCssProperties = getCssFromMElements(elementID, styleIDText.innerHTML);
    console.log(MCssProperties);
    const MTextValues = document.getElementById('m-textarea');
    MTextValues.value = MCssProperties;

    const LCssProperties = getCssFromLElements(elementID, styleIDText.innerHTML);
    console.log(LCssProperties);
    const LTextValues = document.getElementById('l-textarea');
    LTextValues.value = LCssProperties;

    const XlCssProperties = getCssFromXlElements(elementID, styleIDText.innerHTML);
    console.log(XlCssProperties);
    const XlTextValues = document.getElementById('xl-textarea');
    XlTextValues.value = XlCssProperties;
    
    //savePage();
        
    }  
});  


function getCssFromAllElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
 
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  // console.log('All:'+styleTag);
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let AllCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (min-width:0px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      AllCssProperties += `${properties}\n`;
    } else {
      AllCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  console.log (AllCssProperties);
  return AllCssProperties;
}

function getCssFromXsElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let XsCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (max-width:640px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      XsCssProperties += `${properties}\n`;
    } else {
      XsCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  console.log (XsCssProperties);
  return XsCssProperties;
}

function getCssFromSElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let SCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (min-width:641px) and (max-width:768px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      SCssProperties += `${properties}\n`;
    } else {
      SCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  return SCssProperties;
}

function getCssFromMElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let MCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (min-width:769px) and (max-width:1024px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      MCssProperties += `${properties}\n`;
    } else {
      MCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  return MCssProperties;
}

function getCssFromLElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let LCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('screen and (max-width:640px)')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      LCssProperties += `${properties}\n`;
    } else {
      LCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  return LCssProperties;
}

function getCssFromXlElements(elementId, styleId) {
  const styleTag = document.querySelector(`#${styleId}`);
  if (!styleTag) {
    console.log(`Could not find style tag with ID "${styleId}".`);
    return '';
  }
  const cssText = styleTag.textContent;
  const regex = new RegExp(`(@media\\s*[^{]*{)?[^{]*#${elementId}\\s*{([^}]+\\s*(?:;\\s*[^}]+)*)}}`, 'gi');
  const matches = cssText.matchAll(regex);
  let XlCssProperties = '';
  for (const match of matches) {
    if (match[1] && !match[1].includes('min-width:1281px')) {
      continue;
    }
    const properties = match[2]
      .split(';')
      .map(prop => `${prop.trim()};`)
      .filter(prop => prop !== ';')
      .join('\n');
    if (match[1]) {
      XlCssProperties += `${properties}\n`;
    } else {
      XlCssProperties += `Media query: None\n${properties}\n`;
    }
  }
  return XlCssProperties;
}