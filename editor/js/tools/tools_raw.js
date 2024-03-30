

function editorParameters(mode){
    editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: mode,
    lineWrapping: true,
    lineNumbers: true,
    theme: "material",
  });
}

function addHtmlToSectionEditor(sectionId) {
  const section = document.getElementById(sectionId);
  const rawHtmlElements = section.querySelectorAll('[data-type="raw-html"]');
  if (rawHtmlElements.length > 0) {
    const htmlContent = rawHtmlElements[0].innerHTML;
    editor.setValue(htmlContent);
  }
}

function updateSectionFromEditor() {
  
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  const rawHtmlElement = section.querySelector('[data-type="raw-html"]');
  if (rawHtmlElement) {
    const newHtmlContent = editor.getValue();
    rawHtmlElement.innerHTML = newHtmlContent;
    pageSaveData();
  }
}


function htmlEditorOpen(){
  editorParameters('htmlmixed');
  document.getElementById("editorHtml").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  addHtmlToSectionEditor(getSectionID);
}


function htmlEditorClose(){
  document.getElementById("editorHtml").style.visibility = "hidden";
}


function beautifyHtmlInEditor() {
  const currentHtmlContent = editor.getValue();
  const beautifiedHtmlContent = html_beautify(currentHtmlContent, {
    indent_size: 2,
    space_in_empty_paren: true
  });
  editor.setValue(beautifiedHtmlContent);
}

// RAW JS

function js_params(mode){
  editorJS = CodeMirror.fromTextArea(document.getElementById("js_textarea"), {
      mode: mode,
      lineWrapping: true,
      lineNumbers: true,
      theme: "material",
  });
}

function js_open(){
  document.getElementById("js_editor").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  js_params('javascript');
  js_get(getSectionID);
}

function js_close(){
  document.getElementById("js_editor").style.visibility = "hidden";
}

function js_get(sectionId){
  const section = document.getElementById(sectionId);
  const scriptElement = section.querySelector('script[data-type="raw-js"]');
  if (scriptElement) {
    const jsContent = scriptElement.innerHTML;
    editorJS.setValue(jsContent);
  }
}

function js_update() {
  const sectionId = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionId);
  if (section) {
    const scriptElement = section.querySelector('script[data-type="raw-js"]');
    if (scriptElement) {
      const updatedJsContent = editorJS.getValue();
      scriptElement.innerHTML = updatedJsContent;
      pageSaveData();
    } else {
      console.error("No se encontró el elemento <script> con data-type='raw-js' en la sección:", sectionId);
    }
  } else {
    console.error("No se encontró la sección con el ID proporcionado:", sectionId);
  }
}


function js_clean() {
  const currentJS = editorJS.getValue();
  const cleanJS = js_beautify(currentJS, {
    indent_size: 2,
    space_in_empty_paren: true
  });
  editorJS.setValue(cleanJS);
}

// //CSS

// const datacss = "display:none";

// function css_params(css_data){
//   editorCSS = CodeMirror.fromTextArea(document.getElementById("all-textarea"), {
//       mode: "css",
//       lineWrapping: true,
//       lineNumbers: true,
//       theme: "material",
//   });
//   editorCSS.setValue(css_data);
// }
// css_params(datacss);
