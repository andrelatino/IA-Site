function _pattern() { 
  const addSectionToGrid = document.getElementById("grid");
  const customCSS = ``;
  const customHTML = `
  <section id="${generateRandomID(7)}" data-type="section">
      <style id="${generateRandomID(7)}" type="text/css" data-type="css">${customCSS}</style>
      <div id="${generateRandomID(7)}" data-type="html"></div>
      <script id="${generateRandomID(7)}" data-type="js"></script>
      <button class="toolbar-open" onclick="toolsOpenModal(this)">
        <img src="../global/file/edit-section.svg">
      </button>
  </section>
  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
}