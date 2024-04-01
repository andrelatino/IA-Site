
function html_params(mode){
  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: mode,
  lineWrapping: true,
  lineNumbers: true,
  theme: "material",
});
}

function html_get(sectionId) {
  const section = document.getElementById(sectionId);
  const rawHtmlElements = section.querySelectorAll('[data-type="raw-html"]');
  if (rawHtmlElements.length > 0) {
    const htmlContent = rawHtmlElements[0].innerHTML;
    editor.setValue(htmlContent);
  }
}

function html_update() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  const rawHtmlElement = section.querySelector('[data-type="raw-html"]');
  if (rawHtmlElement) {
    const newHtmlContent = editor.getValue();
    rawHtmlElement.innerHTML = newHtmlContent;
    pageSaveData();
  }
}


function html_open(){
  overlay_open();
  html_params('html');
  document.getElementById("editorHtml").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  html_get(getSectionID);
}


function html_close(){
  overlay_close();
  document.getElementById("editorHtml").style.visibility = "hidden";
}


function html_clean() {
  const currentHtmlContent = editor.getValue();
  const beautifiedHtmlContent = html_beautify(currentHtmlContent, {
    "indent_size": "2",
    "indent_char": " ",
    "max_preserve_newlines": "0",
    "preserve_newlines": false,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "normal",
    "brace_style": "expand",
    "space_before_conditional": true,
    "unescape_strings": false,
    "jslint_happy": true,
    "end_with_newline": true,
    "wrap_line_length": "80",
    "indent_inner_html": true,
    "comma_first": false,
    "e4x": true
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
  overlay_open();
  js_params('javascript');
  js_get(getSectionID);
}

function js_close(){
  overlay_close();
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

function overlay_open() {
  document.getElementById("overlay_overlay").style.display = "block";
}

function overlay_close() {
  document.getElementById("overlay_overlay").style.display = "none";
}