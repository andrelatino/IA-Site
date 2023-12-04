function linearColorBgIsSelected() {
  const getColorID = document.getElementById('color-id').textContent;
  const parentDiv = document.getElementById(getColorID);
  if (parentDiv) {
    const linearColorDiv = parentDiv.querySelector('[data-type="linear-color"]');
    if (linearColorDiv) {
      linearColorDiv.classList.remove("div-hidden");
      linearColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== linearColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}

function linearColorThumbIsSelected() {
  const parentDiv = document.getElementById('color-modal-box');
  if (parentDiv) {
    const linearColorDiv = parentDiv.querySelector('[data-type="linear-color"]');
    if (linearColorDiv) {
      linearColorDiv.classList.remove("div-hidden");
      linearColorDiv.classList.add("div-visible");
    }
    const childDivs = parentDiv.querySelectorAll('div[data-type]');
    childDivs.forEach(function(childDiv) {
      if (childDiv !== linearColorDiv) {
        childDiv.classList.remove("div-visible");
        childDiv.classList.add("div-hidden");
      }
    });
  }
}
