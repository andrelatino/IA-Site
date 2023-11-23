
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


  getColors("http://localhost/dev/gridzy/json/colors/red.json");



document.getElementById('color-orange').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/orange.json");
  colorScrollToTop();
});

document.getElementById('color-yellow').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/yellow.json");
  colorScrollToTop();
});

document.getElementById('color-green').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/green.json");
  colorScrollToTop();
});

document.getElementById('color-red').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/red.json");
  colorScrollToTop();
});

document.getElementById('color-blue').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/blue.json");
  colorScrollToTop();
});

document.getElementById('color-turquoise').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/turquoise.json");
  colorScrollToTop();
});

document.getElementById('color-pink').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/pink.json");
  colorScrollToTop();
});


document.getElementById('color-purple').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/purple.json");
  colorScrollToTop();
});

document.getElementById('color-white').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/white.json");
  colorScrollToTop();
});

document.getElementById('color-gray').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/gray.json");
});

document.getElementById('color-brown').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/brown.json");
  colorScrollToTop();
});

document.getElementById('color-black').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/black.json");
  colorScrollToTop();
});

document.getElementById('color-turquoise').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/turquoise.json");
  colorScrollToTop();
});


document.getElementById('color-pink').addEventListener('click', function() {
  getColors("http://localhost/dev/gridzy/json/colors/pink.json");
  colorScrollToTop();
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
