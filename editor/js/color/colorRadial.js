function radialColorBgIsSelected() {
    const getColorID = document.getElementById('color-id').textContent;
    const parentDiv = document.getElementById(getColorID);
    if (parentDiv) {
      const radialColorDiv = parentDiv.querySelector('[data-type="radial-color"]');
      if (radialColorDiv) {
        radialColorDiv.classList.remove("div-hidden");
        radialColorDiv.classList.add("div-visible");
      }
      const childDivs = parentDiv.querySelectorAll('div[data-type]');
      childDivs.forEach(function(childDiv) {
        if (childDiv !== radialColorDiv) {
          childDiv.classList.remove("div-visible");
          childDiv.classList.add("div-hidden");
        }
      });
    }
  }
  
  function radialColorThumbIsSelected() {
    const parentDiv = document.getElementById('color-modal-box');
    if (parentDiv) {
      const radialColorDiv = parentDiv.querySelector('[data-type="radial-color"]');
      if (radialColorDiv) {
        radialColorDiv.classList.remove("div-hidden");
        radialColorDiv.classList.add("div-visible");
      }
      const childDivs = parentDiv.querySelectorAll('div[data-type]');
      childDivs.forEach(function(childDiv) {
        if (childDiv !== radialColorDiv) {
          childDiv.classList.remove("div-visible");
          childDiv.classList.add("div-hidden");
        }
      });
    }
  }
  