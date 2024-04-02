
// SECTION

var section_editor;
function section_params() {
  section_editor = ace.edit("section_code"); // Ajusta el ID aquí para coincidir con tu nuevo contenedor
  section_editor.session.setMode("ace/mode/html");
  section_editor.setTheme("ace/theme/twilight");
  section_editor.session.setUseWrapMode(true);
  section_editor.setShowPrintMargin(false);
}
section_params();

function section_get(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.getAttribute('data-type') === 'section') {
    section_editor.session.setValue(section.outerHTML);
  } else {
    const rawHtmlElements = section.querySelectorAll('[data-type="section"]');
    if (rawHtmlElements.length > 0) {
      const htmlContent = rawHtmlElements[0].outerHTML; // Usar outerHTML para incluir el elemento en sí
      section_editor.session.setValue(htmlContent);
    }
  }
}
function section_update() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  const section = document.getElementById(sectionID);
  // Verifica si el propio section es el objetivo
  if (section.getAttribute('data-type') === 'section') {
    // Actualiza el outerHTML del section directamente
    section.outerHTML = section_editor.session.getValue();
  } else {
    // Si no, busca el primer elemento hijo que coincida y actualiza su outerHTML
    const rawHtmlElement = section.querySelector('[data-type="section"]');
    if (rawHtmlElement) {
      const newHtmlContent = section_editor.session.getValue();
      rawHtmlElement.outerHTML = newHtmlContent;
    }
  }
  pageSaveData(); // Asume que esta función está definida en otra parte de tu código
}

function section_open() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  // toolbarDelete(sectionID);
  overlay_open(); // Asume que esta función está definida en otra parte de tu código
  // section_params();
  document.getElementById("section_editor").style.visibility = "visible";
  const getSectionID = document.getElementById("toolbarSectionID").textContent;
  section_get(getSectionID);
  section_clean()
}
function section_close() {
  const sectionID = document.getElementById("toolbarSectionID").textContent;
  // toolbarAdd(sectionID);
  overlay_close(); // Asume que esta función está definida en otra parte de tu código
  document.getElementById("section_editor").style.visibility = "hidden";

}
function section_clean() {
  const currentHtmlContent = section_editor.session.getValue();
  const beautifiedHtmlContent = html_beautify(currentHtmlContent, {
    // Configuración de js-beautify
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
    "e4x": false
    // El resto de tu configuración...
  });
  section_editor.session.setValue(beautifiedHtmlContent);
}

document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las secciones
  var sections = document.querySelectorAll('section');
  
  // Iterar sobre cada sección y agregar el botón
  sections.forEach(function(section) {
    toolbarAdd(section.id);
  });
});

// function toolbarDelete(sectionId) {
//   var section = document.getElementById(sectionId);
//   if (section) {
//     var botones = section.getElementsByClassName('toolbar-open');
//     if (botones.length > 0) {
//       botones[0].parentNode.removeChild(botones[0]);
//       console.log('Botón eliminado correctamente de la sección con ID:', sectionId);
//     } else {
//       console.log('No se encontraron botones en la sección con ID:', sectionId);
//     }
//   } else {
//     console.log('No se encontró ninguna sección con el ID proporcionado:', sectionId);
//   }
// }

// function toolbarAdd(sectionId) {
//   var section = document.getElementById(sectionId);
//   if (section) {
//     var boton = document.createElement('button');
//     boton.className = 'toolbar-open';
//     boton.onclick = function() {
//       toolsOpenModal(sectionId);
//     };
//     var imagen = document.createElement('img');
//     imagen.src = '../global/file/edit-section.svg';
//     boton.appendChild(imagen);
//     section.appendChild(boton);
//     console.log('Botón agregado correctamente a la sección con ID:', sectionId);
//   } else {
//     console.log('No se encontró ninguna sección con el ID proporcionado:', sectionId);
//   }
// }
