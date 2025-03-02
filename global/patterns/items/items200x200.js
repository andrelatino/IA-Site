function items200x200(gridBoxId, addButtonId, gridItemImage) {
    const gridBox = document.getElementById(gridBoxId);
    if (!gridBox) {
      console.error("Grid box element not found.");
      return;
    }
  
    // Suponiendo que el ID del botón es 'addButton'
    const addButton = document.getElementById(addButtonId);
    if (!addButton) {
      console.error("Add button not found.");
      return;
    }
  
    const gridItem = generateRandomID(7);
    const customItemHTML = `  
      <grid-item id="${gridItem}">
        <item-head id="${generateRandomID(7)}">
          <img id="${generateRandomID(7)}" src="${gridItemImage}" height="200" width="200" data-type="image-fg" loading="lazy">
        </item-head>
        <item-body id="${generateRandomID(7)}">
          <item-title id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum</item-title>
          <item-desc id="${generateRandomID(7)}" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</item-desc>
          <a id="${generateRandomID(7)}" href="#" data-type="a-link">Lorem </a>
        </item-body>
        <button class="no-export grid-delete-item" onclick="deleteItem('${gridItem}')">-</button>
      </grid-item>
    `;

    // Crear un elemento temporal para contener el HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = customItemHTML;
    const newItem = tempElement.firstElementChild;
  
    // Insertar el nuevo ítem justo antes del botón 'Add'
    gridBox.insertBefore(newItem, addButton);
  
    // Desplazar la vista al nuevo ítem
    // newItem.scrollIntoView({ behavior: "smooth" });
  }
  

function deleteItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
      item.remove();
  } else {
      console.error("Item to delete not found.");
  }
}