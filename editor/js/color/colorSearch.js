
function getColors(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {

      const colorTotal = data.length;
      document.getElementById('color-sidebar-total').textContent = colorTotal + " colors";

      const colorGrid = document.getElementById('color-sidebar-grid');
      colorGrid.innerHTML = ''; // Clear existing color items

      for (const api of data) {
        const colorItems = document.createElement('div');

        colorItems.className = 'color-sidebar-items';
        colorItems.innerHTML = `
          <div class="color-html" style="background:${api.hex};"></div>
          <div class="color-sidebar-alt">
            <p class="color-sidebar-url">${api.hex}</p>
            <p class="color-sidebar-url">${api.name}</p>
          </div>
        `;

          // Add event listener to each color item
          colorItems.addEventListener('click', () => {
            // alert(api.hex);
            addBackgroundColor(api.hex);
            const hexValue = api.hex;
            document.getElementById('uVoJtob').style.background = hexValue;
          });

        colorGrid.appendChild(colorItems);
      }
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
}


// Usage example:
// Add event listeners to the buttons


  getColors("../global/json/colors/red.json");



document.getElementById('color-orange').addEventListener('click', function() {
  getColors("../global/json/colors/orange.json");
  
});

document.getElementById('color-yellow').addEventListener('click', function() {
  getColors("../global/json/colors/yellow.json");
  
});

document.getElementById('color-green').addEventListener('click', function() {
  getColors("../global/json/colors/green.json");
  
});

document.getElementById('color-red').addEventListener('click', function() {
  getColors("../global/json/colors/red.json");
  
});

document.getElementById('color-blue').addEventListener('click', function() {
  getColors("../global/json/colors/blue.json");
  
});

document.getElementById('color-turquoise').addEventListener('click', function() {
  getColors("../global/json/colors/turquoise.json");
  
});

document.getElementById('color-pink').addEventListener('click', function() {
  getColors("../global/json/colors/pink.json");
  
});


document.getElementById('color-purple').addEventListener('click', function() {
  getColors("../global/json/colors/purple.json");
  
});

document.getElementById('color-white').addEventListener('click', function() {
  getColors("../global/json/colors/white.json");
  
});

document.getElementById('color-gray').addEventListener('click', function() {
  getColors("../global/json/colors/gray.json");
});

document.getElementById('color-brown').addEventListener('click', function() {
  getColors("../global/json/colors/brown.json");
  
});

document.getElementById('color-black').addEventListener('click', function() {
  getColors("../global/json/colors/black.json");
  
});

document.getElementById('color-turquoise').addEventListener('click', function() {
  getColors("../global/json/colors/turquoise.json");
  
});


document.getElementById('color-pink').addEventListener('click', function() {
  getColors("../global/json/colors/pink.json");
  
});






function removeExistingColor() {
  var colorItems = document.querySelectorAll(".color-sidebar-items");
  for (var i = 0; i < colorItems.length; i++) {colorItems[i].remove();}
}
 
function searchColor() {
  removeExistingColor();
  getColors(); 
}


document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && event.target.id === "color-sidebar-input") {
    searchColor();
  }
});



function openColorSidebar() {
  color = document.getElementById("color-sidebar");
  color.style.transition = "bottom 0.5s";
  color.style.bottom = "0";
  color.style.display = "grid";
}
