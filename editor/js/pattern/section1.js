function generateRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}
    return result;
  }
  
  function patternSection1() {
  const addSectionToGrid = document.getElementById("grid");
  
  const sectionID = generateRandomID(7);
  const sectionCss = sectionID;
  
  const containerID = generateRandomID(7);
  const containerCss = containerID;
  
  const colorID = generateRandomID(7);
  const colorCss = colorID;

  const solidcolorID = generateRandomID(7);
  const solidcolorCss = solidcolorID;

  const radialcolorID = generateRandomID(7);
  const radialcolorCss = radialcolorID;

  const linearcolorID = generateRandomID(7);
  const linearcolorCss = linearcolorID;
  
  const imageID = generateRandomID(7);
  const imageCss = imageID;

  const videoID = generateRandomID(7);
  const videoCss = videoID;
  
  const contentID = generateRandomID(7);
  const contentCss = contentID;
  
  const div1ID = generateRandomID(7);
  const div1Css = div1ID;
  
  const h2ID = generateRandomID(7);
  const h2Css = h2ID;
  
  const pID = generateRandomID(7);
  const pCss = pID;
  
  const div2ID = generateRandomID(7);
  const div2Css = div2ID;
  
  const btn1ID = generateRandomID(7);
  const btn1Css = btn1ID;
  
  const btn2ID = generateRandomID(7);
  const btn2Css = btn2ID;

  const customCSS = `
  @media screen and (min-width:0px){#${containerCss}{width:100vw;height:100vh;position:relative}}
  @media screen and (min-width:0px){#${imageCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10;}}
  @media screen and (min-width:0px){#${colorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${solidcolorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${radialcolorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${linearcolorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${videoCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10;}}
  @media screen and (min-width:0px){#${contentCss}{width:100%;height:100%;display:grid;place-content: center start;}}
  @media screen and (min-width:0px){#${div1Css}{display:grid;padding:5%;max-width: 1100px;gap:35px;}}
  @media screen and (min-width:0px){#${h2Css}{font-size:clamp(4rem,8vw,8rem);line-height:90%;font-weight:900;color:white;}}
  @media screen and (min-width:0px){#${pCss}{font-size:clamp(1rem,2vw,2rem);color:white;}}
  @media screen and (min-width:0px){#${div2Css}{display:flex;gap:10px;}}
  @media screen and (min-width:0px){#${btn1Css}{background:black;padding:20px;color:white;font-size:14px;border-radius:10px;text-underline-position:under;}}
  @media screen and (min-width:0px){#${btn2Css}{background:white;padding:20px;color:black;font-size:14px;border-radius:10px;text-underline-position:under;}}
  @media screen and (max-width:640px){#${div1Css}{gap:10px;}}
  `;
  const customHTML = `
  
  <section id="${sectionID}" data-type="section">
  <style id="${generateRandomID(7)}" type="text/css">
    ${customCSS}
  </style>
  
  <div id="${containerID}" data-type="container">
    <div id="${generateRandomID(7)}" data-type="backgrounds">
      
      <div id="${colorID}" data-type="bg-color">
        <div id="${solidcolorID}" data-type="solid-color" class="div-visible" style="background:blue;"></div>
        <div id="${radialcolorID}" data-type="radial-color" class="div-hidden"></div>
        <div id="${linearcolorID}" data-type="linear-color" class="div-hidden"></div>
      </div> <!-- bg-color -->

      <div id="${generateRandomID(7)}" data-type="bg-image">
        <picture id="${generateRandomID(7)}">
          <source srcset media="(max-width:640px)">
          <source srcset media="(min-width:641px) and (max-width:1024px)">
          <img id="${imageID}" src="./assets/image/tapas-hero1.png" data-type="img-bg" loading="lazy">
        </picture>
      </div> <!-- bg-image -->

      <div id="${generateRandomID(7)}" data-type="bg-video">
        <video id="${videoID}" autoplay loop muted>
          <source src="https://previews.customer.envatousercontent.com/0e86408d-ad59-4c94-8e0d-8799ad96d063/watermarked_preview/watermarked_preview.mp4" type="video/mp4">
        </video>
      </div> <!-- bg-video -->

    </div> <!-- backgrounds -->

    <div id="${contentID}" data-type="content">
      <div id="${div1ID}">
        <h2 id="${h2ID}" contenteditable="true">Lorem ipsum dolor sit amet</h2>
        <p id="${pID}" contenteditable="true">Lorem ipsum dolor sit amet consectur et sermont...</p>
        <div id="${div2ID}">
          <a id="${btn1ID}" contenteditable="true" href="https://www">LOREM IPSUM</a>
          <a id="${btn2ID}" contenteditable="true" href="https://www">LOREM IPSUM</a>
        </div> <!-- div2ID -->
      </div> <!-- div1ID -->
    </div> <!-- content -->
  </div> <!-- container -->
  <button class="toolbar-open" onclick="toolsOpenModal(this);">
    <img src="../global/file/edit-section.svg">
  </button>
</section>

  `;
  addSectionToGrid.insertAdjacentHTML("beforeend", customHTML);
  const sections = document.querySelectorAll("section");
  const newSection = sections[sections.length - 1];
  newSection.scrollIntoView({ behavior: "smooth" });  
  //savePage();
  }