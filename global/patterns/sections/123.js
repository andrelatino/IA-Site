
  
  function _123() { 
    //MAIN
    const addSectionToGrid = document.getElementById("grid");
    const section_id = generateRandomID(7);
    const section_css = section_id;
    const container_id = generateRandomID(7);
    const container_css = container_id;
    const content_id = generateRandomID(7);
    const content_css = content_id;
    //GRID1
    const grid1_id = generateRandomID(7);
    const grid1_css = grid1_id;
    const grid1_h2_id = generateRandomID(7);
    const grid1_h2_css = grid1_h2_id;
    const grid1_p_id = generateRandomID(7);
    const grid1_p_css = grid1_p_id;
    const grid1_links_id = generateRandomID(7);
    const grid1_links_css =  grid1_links_id;
    const grid1_link1_id = generateRandomID(7);
    const grid1_link1_css =  grid1_link1_id;
    const grid1_link2_id = generateRandomID(7);
    const grid1_link2_css =  grid1_link2_id;
    //GRID2
    const grid2_id = generateRandomID(7);
    const grid2_css = grid2_id;
    const grid2_image_id = generateRandomID(7);
    const grid2_image_css = grid2_image_id;

    const customCSS = `
    @media screen and (min-width:0px){#${section_css}{width:100vw;height:100vh;position:relative}}
    @media screen and (min-width:0px){#${container_css}{width:100vw;height:100vh;position:relative}}
    @media screen and (min-width:0px){#${content_css}{width:100%;height:100%;display:grid;place-content:center; grid-template-columns: 1fr 1fr;}}
    @media screen and (min-width:0px){#${grid2_css}{display:grid}}
    @media screen and (min-width:0px){#${grid2_image_css}{display:grid;object-fit: cover;height:100vh;width: 100vw;}}
    @media screen and (min-width:0px){#${grid1_css}{display:grid;padding:5%;width:100%;height:100vh;gap:35px;background:rgb(224 227 228);place-content:center;}}
    @media screen and (min-width:0px){#${grid1_h2_css}{font-size:clamp(2.5rem,8vw,6rem);line-height:90%;font-weight:300;color:black;}}
    @media screen and (min-width:0px){#${grid1_p_css}{font-size:clamp(1rem,2vw,2rem);color:black;}}
    @media screen and (min-width:0px){#${grid1_links_css}{display:flex;gap:10px;}}
    @media screen and (min-width:0px){#${grid1_link1_css}{background:black;padding:15px;color:white;font-size:14px;border-radius:10px;text-underline-position:under;}}
    @media screen and (min-width:0px){#${grid1_link2_css}{background:white;padding:15px;color:black;font-size:14px;border-radius:10px;text-underline-position:under;}}
    @media screen and (max-width:640px){#${grid1_css}{gap:10px;}}
    `;
    const customHTML = `
    
    <section id="${section_id}" data-type="section">
    <style id="${generateRandomID(7)}" type="text/css">
      ${customCSS}
    </style>
    
    <div id="${container_id}" data-type="container">
      
      <div id="${content_id}" data-type="content">
        
        <div id="${grid1_id}">
            <h2 id="${grid1_h2_id}" contenteditable="true">Lorem ipsum dolor sit amet</h2>
            <p id="${grid1_p_id}" contenteditable="true">Lorem ipsum dolor sit amet consectur et sermont</p>
            <div id="${grid1_links_id}">
              <a id="${grid1_link1_id}" contenteditable="true" href="https://www">LOREM IPSUM</a>
              <a id="${grid1_link2_id}" contenteditable="true" href="https://www">LOREM IPSUM</a>
            </div>
        </div>
       
        <div id="${grid2_id}">
          <img id="${grid2_image_id}" src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHwxfHxjYWN0dXN8ZW58MHwwfHx8MTcwODQzMjYyN3ww&amp;ixlib=rb-4.0.3&amp;w=1280&amp;h=720&amp;fit=crop" data-type="img-grid" loading="lazy">
        </div>

      </div>

    </div>
    <button class="toolbar-open" onclick="toolsOpenModal(this)">
      <img src="../global/file/edit-section.svg" data-type="img-edit">
    </button>
  </section>
  
    `;
    addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
    const sections = document.querySelectorAll("section");
    const newSection = sections[sections.length - 1];
    newSection.scrollIntoView({ behavior: "smooth" });  
    //savePage();
    }