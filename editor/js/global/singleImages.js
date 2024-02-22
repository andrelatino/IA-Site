function getImageIdOnClick() {
  // Add a click event listener to the grid container
  const grid = document.getElementById('grid');
  grid.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG' && event.target.getAttribute('data-type') === 'img-grid') {
      sectionSingleImage(event.target.id);
    }
  });
}


  getImageIdOnClick();

   
function sectionSingleImage(imageID) {
    showSingleImageModal();
    const singleImageID = imageID;
    localStorage.setItem('checkImageID', singleImageID);
    localStorage.setItem('checkImageType', 'img-grid');
    // alert(pictureID);
    var editorDiv = document.getElementById("image-modal");
   
    if (editorDiv) {
      var content = `
      
      <div id="image-container">
  
            <div id="image-github-buttons">
            
              <button id="image-drag"><img src="./assets/svg/icons/drag.svg"></button>
              
            </div>
            
            
            <div id="image-responsive">
              <div id="image-all">          
                  <img id="image-all-thumbnail" src="./assets/svg/icons/upload-empty.svg">           
                  <input type="text" id="image-all-input"> 
                  <button id="image-all-save" onclick="loadAllSingleImage();">SAVE (ALL)</button>  
              </div>
              
              <div id="image-m">
                  <img id="image-m-thumbnail" src="./assets/svg/icons/upload-empty.svg">
                  <input type="text" id="image-m-input">
                  <button id="image-m-save" onclick="updateMImage();">SAVE (M)</button>    
              </div>
              
              <div id="image-xs">
                  <img id="image-xs-thumbnail" src="./assets/svg/icons/upload-empty.svg"> 
                  <input type="text" id="image-xs-input">
                  <button id="image-xs-save" onclick="updateXsImage();">SAVE (XS)</button>    
              </div>
            </div>
  
            <div id = "image-libraries">
              <button id="imageWebSidebarButton" onclick="sidebarOpenClose(this)">
                <span class="tooltiptext-right">Web</span>	
              </button>
              <button id="imageGithubSidebarButton" onclick="sidebarOpenClose(this)">
                <span class="tooltiptext-right">Media</span>
              </button>
              
              
            </div>
            
            <button onclick="hideImageModal(); closeImageSidebar(); closeAllImageSidebars()" class="video-close">
                  <img src="./assets/svg/icons/close.svg">
            </button>
            <button id="image-btn-all" onclick="imageAllSingleButton(); checkClearButton();">
              <img src="../global/file/pc.svg">
            </button>
            <button id="image-btn-m" onclick="imageMButton(); checkClearButton();">
              <img src="../global/file/tablet.svg">
            </button>
            <button id="image-btn-xs" onclick=" imageXsButton(); checkClearButton();">
              <img src="../global/file/mobile.svg">
            </button>
  
            <button id="image-btn-m-clear" onclick=" imageClearM(); checkClearButton();">
              <img src="../global/file/delete.svg">
            </button>         
            <button id="image-btn-xs-clear" onclick=" imageClearXs();">
              <img src="../global/file/delete.svg">
            </button>
            
        </div> 
   
      `;
      editorDiv.innerHTML = content;
      var imageModal = document.querySelector("#image-modal");
      imageModal.className = "mobile-box";
      loadAllSingleImage();
      imageAllSingleButton();
      loadUnsplashImages();
      loadGithubImages();
      
    } else {
      console.error("Editor element not found.");
    }
}
  
function showSingleImageModal() {
    var divModal = document.getElementById("image-modal");
    divModal.style.display = "grid";
}
function hideSingleImageModal() {
    var divModal = document.getElementById("image-modal");
    divModal.style.display = "none";
}

function loadAllSingleImage() {
  const checkImageID = localStorage.getItem('checkImageID');
  const imageElement = document.getElementById(checkImageID);
  const singleImageSrc = imageElement.getAttribute('src');
  const showSingleImage = document.getElementById('image-all-thumbnail');
  showSingleImage.src = singleImageSrc;
  // showSingleImage.removeAttribute('srcset');
}

function imageAllSingleButton(){
    
  localStorage.setItem('imageSize','All');
  // loadAllImage();
  
  var imageDivAll = document.getElementById("image-all"); imageDivAll.style.visibility = "visible";
  var imageDivM = document.getElementById("image-m"); imageDivM.style.visibility = "hidden";
  var imageDivXs = document.getElementById("image-xs"); imageDivXs.style.visibility = "hidden";
 
  
  var imageButtonAll = document.getElementById("image-btn-all"); 
      imageButtonAll.style.background = "#007dec";
  var imageButtonAllImg = document.querySelector("#image-btn-all img");
      imageButtonAllImg.style.filter = "invert(1)";

  var imageButtonM = document.getElementById("image-btn-m"); 
      imageButtonM.style.background = "white";
  var imageButtonMImg = document.querySelector("#image-btn-m img");
      imageButtonMImg.style.filter = "none";
  var imageButtonMClear = document.getElementById("image-btn-m-clear"); 
      imageButtonMClear .style.display = "none";
 
  var imageButtonXs = document.getElementById("image-btn-xs"); 
      imageButtonXs.style.background = "white"; 
  var imageButtonXsImg = document.querySelector("#image-btn-xs img");
      imageButtonXsImg.style.filter = "none";
  var imageButtonXsClear = document.getElementById("image-btn-xs-clear"); 
      imageButtonXsClear .style.display = "none";

}