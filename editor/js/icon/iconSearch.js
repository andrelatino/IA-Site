var iconStart = 0;
var iconLimit = 20;
var iconCount= 0; 
var iconSearch = "";
var nextButton = document.getElementById('icon-sidebar-next-button');

function loadDefaultIcons(){

  iconStart = 0;
  iconLimit = 20;
  iconCount= 0; 
  iconSearch = "food";

  const container = document.getElementById('icon-sidebar-grid');
  const iconApiUrl = `https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=${iconSearch}&limit=${iconLimit}&start=${iconStart}`;
  fetch(iconApiUrl)
  .then(response => response.json())
  .then(data => {
    
    const totalInput = document.getElementById('icon-sidebar-total');
    const totalCount = data.count;
    
    totalInput.textContent = ""+totalCount;

    if (totalCount >= 20) {
      nextButton.style.visibility = 'visible'; 
    }else{
      nextButton.style.visibility = 'hidden'; 
    }
    
    if (data.icons && Array.isArray(data.icons)) {
        data.icons.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('icon-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute
          img.src = item.url;
          img.setAttribute('draggable', true);
          gridItem.appendChild(img);
          container.appendChild(gridItem);

          // Añadir event listener para el click
          img.addEventListener('click', function() {
              iconCheckSize(item.url);
          });

        });
      } else {
        console.error('Invalid data format:', data);
      }
  });
}
loadDefaultIcons();


function loadSearchIcons() { 

  iconSidebarInput = document.getElementById("icon-sidebar-input");
  iconSearch = iconSidebarInput.value;

  iconStart = 0;
  iconLimit = 20;
  iconCount= 0; 

  
  const container = document.getElementById('icon-sidebar-grid');
  const iconApiUrl = `https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=${iconSearch}&limit=${iconLimit}&start=${iconStart}`;
  fetch(iconApiUrl)
  .then(response => response.json())
  .then(data => {
    
    var totalInput = document.getElementById('icon-sidebar-total');
    var totalCount = data.count;
    var nextButton = document.getElementById('icon-sidebar-next-button');
    totalInput.textContent = ""+totalCount;

    if (totalCount >= 20) {
      nextButton.style.visibility = 'visible'; 
    }else{
      nextButton.style.visibility = 'hidden'; 
    }

    if (data.icons && Array.isArray(data.icons)) {
        data.icons.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('icon-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          img.src = item.url;
          img.setAttribute('draggable', true);
          gridItem.appendChild(img);
          container.appendChild(gridItem);

          // Añadir event listener para el click
          img.addEventListener('click', function() {
            iconCheckSize(item.url);
        });
          
        });

        


      } else {
        console.error('Invalid data format:', data);
      }
  });

}

function loadNextIcons() {
  iconCount += 20;
  iconStart = iconCount;
  removeExistingIcons();

  const container = document.getElementById('icon-sidebar-grid');
  const iconApiUrl = `https://api.svgapi.com/v1/Ty5WcDa63E/list/?search=${iconSearch}&limit=${iconLimit}&start=${iconStart}`;
  fetch(iconApiUrl)
    .then(response => response.json())
    .then(data => {

      

      const textElement = document.getElementById('icon-sidebar-total');
      const totalIcons = data.count;
      textElement.textContent = "" + totalIcons;


      if (iconStart < totalIcons){
        nextButton.style.visibility = 'visible'; 
      }else{
        nextButton.style.visibility = 'hidden'; 
      }



      if (data.icons && Array.isArray(data.icons)) {
        data.icons.forEach(item => {
          const gridItem = document.createElement('div');
          gridItem.classList.add('icon-sidebar-items');
          const img = document.createElement('img');

          const imageId = generateRandomID(7); // Generate a random ID
          img.id = imageId; // Set the random ID as the id attribute

          img.src = item.url;
          img.setAttribute('draggable', true);
          gridItem.appendChild(img);
          container.appendChild(gridItem);

          // Añadir event listener para el click
          img.addEventListener('click', function() {
            iconCheckSize(item.url);
        });
        });
      

      } else {
        console.error('Invalid data format:', data);
      }
    });
}

function removeExistingIcons() {
  var iconItems = document.querySelectorAll(".icon-sidebar-items");
  for (var i = 0; i < iconItems.length; i++) {iconItems[i].remove();}
}
 
function searchIcons() {
  removeExistingIcons();
  loadSearchIcons(); 
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13 && event.target.id === "icon-sidebar-input") {
    searchIcons();
  }
});



function openIconSidebar() {
  icon = document.getElementById("icon-sidebar");
  icon.style.bottom = "-135px";
  icon.style.transition = "bottom 0.5s";
  icon.offsetHeight;
  icon.style.bottom = "0";
}

function closeIconSidebar() {
  icon = document.getElementById("icon-sidebar");
  icon.style.bottom = "135px";
  icon.style.transition = "bottom 0.5s";
  icon.offsetHeight;
  icon.style.bottom = "-135px";
}

function iconCheckSize(imageURL){
  console.log("Clicked image URL:", imageURL);
//     document.getElementById("image-all-input").value = imageThumbnail;
  const getImageSize = localStorage.getItem('imageSize');
  if (getImageSize !== null) {
    // Remove any leading or trailing white spaces from the retrieved value
    const imageSize = getImageSize.trim();
    // Check the value against different image size options
    if (imageSize === 'All') {
      // Do something for 'All' image size
      document.getElementById("image-all-input").value = imageURL;
      clickAllImage()

    } else if (imageSize === 'Xl') {
      // Do something for 'Xl' image size
      console.log("Do something for 'Xl' image size.");
    } else if (imageSize === 'L') {
      // Do something for 'L' image size
      console.log("Do something for 'L' image size.");
    } else if (imageSize === 'M') {
      // Do something for 'M' image size
      console.log("Do something for 'M' image size.");
    } else if (imageSize === 'S') {
      // Do something for 'S' image size
      console.log("Do something for 'S' image size.");
    } else if (imageSize === 'Xs') {
      // Do something for 'Xs' image size
      document.getElementById("image-xs-input").value = imageURL;
      clickXsImage();
    } else {
      // Handle the case where the value is not one of the valid options
      console.log("Invalid image size:", imageSize);
     
    }
  } else {
    console.log("No data found in local storage for 'imageSize'.");
    // Handle the case where no data is found in local storage.
  }
}