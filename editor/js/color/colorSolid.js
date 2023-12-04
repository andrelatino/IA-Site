function solidColorBgIsSelected() {
  const getColorID = document.getElementById('color-id').textContent;
  const parentDiv = document.getElementById(getColorID);
  if (parentDiv) {
    const solidColorDiv = parentDiv.querySelector('[data-type="solid-color"]');
    if (solidColorDiv) {
      solidColorDiv.classList.remove("div-hidden");
      solidColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== solidColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

function solidColorThumbIsSelected() {
  const parentDiv = document.getElementById('color-modal-box');
  if (parentDiv) {
    const solidColorDiv = parentDiv.querySelector('[data-type="solid-color"]');
    if (solidColorDiv) {
      solidColorDiv.classList.remove("div-hidden");
      solidColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== solidColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}
