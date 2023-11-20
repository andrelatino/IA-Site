 
function videoModal() {

    // alert('videoModal');
    showVideoModal();
    
    // showImageModal();
    // loadUnsplashImages();
    // loadGithubImages()
  
    const textID = document.getElementById('toolbarSectionID');
    const sectionID = textID.textContent.trim();
    const sectionElement = document.getElementById(sectionID);
  
  
    if (sectionElement) {
      const pictureElement = sectionElement.querySelector('video');
      if (pictureElement) {
        const getPictureID = pictureElement.id;
        var pictureID = getPictureID;
      } else {
          console.log('Picture element not found within the section.');
      }
    } else {
        console.log('Section element with ID', sectionID, 'not found.');
    }
  
    var pictureElement2 = document.getElementById(pictureID);
    var imgElement = pictureElement2.querySelector('img');
    if (imgElement) {
      var getImageID = imgElement.getAttribute('id');
        console.log("Image ID:", getImageID);
    } else {
        console.log("Image tag not found.");
    }
  
    const imageID = getImageID;
    
    // alert(pictureID+' - '+imageID)
    localStorage.setItem('pictureID', pictureID);
    localStorage.setItem('imageID', imageID);
    // alert(pictureID);
    var editorDiv = document.getElementById("video-modal");
  
   
    if (editorDiv) {
      var content = `
      
      <div id="video-container">
  
            <div id="video-github-buttons">
            
              <button id="video-drag"><img src="./assets/svg/icons/drag.svg"></button>
              
              <button id="video-btn-all" onclick="videoAllButton();">PC</button>
              
              <button onclick="hideVideoModal(); closeVideoSidebar()" class="video-close">
                <img src="./assets/svg/icons/close.svg">
              </button>
                       
            </div>
            
            
            <div id="video-all">          
                <video id="video-thumbnail" autoplay="" loop="" muted=""><source src="https://previews.customer.envatousercontent.com/0e86408d-ad59-4c94-8e0d-8799ad96d063/watermarked_preview/watermarked_preview.mp4" type="video/mp4"></video>       
                <input type="text" id="video-all-input"> 
                <button id="video-all-save" onclick="updateAllVideo();">SAVE (ALL)</button>  
            </div>

            <div id = "video-libraries">
              <button id="videoWebSidebar" onclick="openWebVideos()">
                <span class="tooltiptext-right">Web</span>	
              </button>
              
              <button id="videoGithubSidebar" onclick="openMyVideos()">
                <span class="tooltiptext-right">Media</span>
              </button>	

              <button id="videoGithubSidebar" onclick="openMyVideos()">
                <span class="tooltiptext-right">Upload</span>
              </button>	
            </div>  
            
        </div>

              <button onclick="hideVideoModal(); closeVideoSidebar()" class="video-close">
                <img src="./assets/svg/icons/close.svg">
              </button>
         
        
      </div>  
      `;
      
      editorDiv.innerHTML = content;
      var imageModal = document.querySelector("#video-modal");
      imageModal.className = "mobile-box";
      var imageDrag = document.querySelector("#video-drag");
      makeElementDraggable(imageModal, imageDrag);
  
      
    } else {
      console.error("Editor element not found.");
    }
  }
  
    function showVideoModal() {
      var divModal = document.getElementById("video-modal");
      divModal.style.display = "grid";
    }
    function hideVideoModal() {
      var divModal = document.getElementById("video-modal");
      divModal.style.display = "none";
    }

    function getVideoUrl() {
        const videoThumb = document.getElementById('video-thumbnail')
        const  videoID= document.getElementById('video-id').textContent;
        
        const videoElement = document.getElementById(videoID);
        if (videoElement) {
            const sourceElement = videoElement.querySelector('source');
            if (sourceElement) {
                videoThumb.src = sourceElement.src;
                console.log('URL: ' + sourceElement.src);
            } else {
                console.log('No se encontró el elemento source.');
            }
        } else {
            console.log('No se encontró el elemento video.');
        }
    }

    function updateVideoSrc(videoId, newSrc) {
        const videoElement = document.getElementById(videoId);
        
        if (videoElement) {
          const sourceElement = videoElement.querySelector('source');
          const videoThumb = document.getElementById('video-thumbnail')
          
          if (sourceElement) {
            sourceElement.src = newSrc;
            videoThumb.src = newSrc;
            // Load the updated video source
            // videoElement.load();
            
            // Listen for the 'loadeddata' event
            // videoElement.addEventListener('loadeddata', function() {
            //   console.log('Video is loaded and ready to play.');
            //   // Perform actions when the video is loaded.
            // });
          } else {
            console.error('Could not find <source> element within the video element.');
          }
        } else {
          console.error('Could not find video element with the specified ID.');
        }
      }
    
    
    
    