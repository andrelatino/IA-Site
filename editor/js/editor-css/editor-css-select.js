function fillSelectWithTags(sectionId, selectElementId) {

  // Obtener el elemento de la sección y el elemento select
  const section = document.getElementById(sectionId);
  const select = document.getElementById(selectElementId);

  // Diagnóstico: Imprimir los elementos encontrados
  console.log("Sección:", section);
  console.log("Select:", select);

  // Comprobar si ambos elementos existen
  if (!section || !select) {
      console.error('No se encontraron los elementos especificados.');
      return;
  }

  // El resto de

    // Obtener todos los elementos dentro de la sección
    const elements = section.getElementsByTagName('*');

    // Llenar el elemento select con las etiquetas de los elementos
    for (let i = 0; i < elements.length; i++) {
        const option = document.createElement('option');
        option.value = elements[i].tagName;
        option.innerText = elements[i].tagName;
        select.appendChild(option);
    }
    // Observar cambios en el contenido de la sección
    const observer007 = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                // Llenar el select nuevamente si se detectan nuevos nodos
                select.innerHTML = ''; // Limpiar las opciones actuales
                for (let i = 0; i < elements.length; i++) {
                    const option = document.createElement('option');
                    option.value = elements[i].tagName;
                    option.innerText = elements[i].tagName;
                    select.appendChild(option);
                }
            }
        });
    });

    // Configuración del observador
    const config = { childList: true, subtree: true };
    observer007.observe(section, config);
}
document.addEventListener("DOMContentLoaded", function() {
    fillSelectWithTags('NIcwfKu','editor-css-select');
});
