  //Video background Data Center Left
  function hero_image_left_light() { 

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
  @media screen and (min-width:0px){#${sectionCss}{width:100vw;height:100vh;position:relative}}
  @media screen and (min-width:0px){#${containerCss}{width:100vw;height:100vh;position:relative}}
  @media screen and (min-width:0px){#${imageCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10;}}
  @media screen and (min-width:0px){#${colorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${solidcolorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${radialcolorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${linearcolorCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10; background:inherit;}}
  @media screen and (min-width:0px){#${videoCss}{width:100%;height:100%;object-fit:cover;position:absolute;top:0; z-index:-10;}}
  @media screen and (min-width:0px){#${contentCss}{width:100%;height:100%;display:grid;place-content: center start;}}
  @media screen and (min-width:0px){#${div1Css}{display:grid;padding:5%;max-width: 1100px;gap:35px;}}
  @media screen and (min-width:0px){#${h2Css}{font-size:clamp(2.8rem,8vw,7rem);line-height:90%;font-weight:300;color:black;}}
  @media screen and (min-width:0px){#${pCss}{font-size:clamp(1rem,2vw,2rem);color:black;}}
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
      
      <div id="${colorID}" data-type="bg-color" class="div-hidden">
        <div id="${solidcolorID}" data-type="solid-color" class="div-hidden" style="background: rgb(0, 0, 255);"></div>
        <div id="${radialcolorID}" data-type="radial-color" class="div-hidden" style="background: radial-gradient(circle, rgb(0, 255, 128), rgb(200, 0, 255));"></div>
        <div id="${linearcolorID}" data-type="linear-color" class="div-visible" style="background: linear-gradient(0deg, rgb(184 184 184), rgb(255, 255, 255));"></div>
      </div> <!-- bg-color -->

      <div id="${generateRandomID(7)}" data-type="bg-image" class="div-visible">
        <picture id="${generateRandomID(7)}">
          <source srcset media="(max-width:640px)">
          <source srcset media="(min-width:641px) and (max-width:1024px)">
          <img id="${imageID}" src="https://images.unsplash.com/photo-1511406239133-2c1130a2d754?ixid=M3wzOTcwOTd8MHwxfHNlYXJjaHw4N3x8Y2xlYW58ZW58MHwwfHx8MTcwNzM4NDE2OXww&ixlib=rb-4.0.3&w=1280&h=720&fit=crop" data-type="img-bg" loading="lazy">
        </picture>
      </div> <!-- bg-image -->

      <div id="${generateRandomID(7)}" data-type="bg-video" class="div-hidden">
        <video id="${videoID}" autoplay loop muted>
          <source src="https://vod-progressive.akamaized.net/exp=1707431992~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1883%2F17%2F434419954%2F1892221591.mp4~hmac=ce0bb3ef0c82fda3cb8492df1b4b97e4ee80a6e5f037d44cd35e5708c8f27a0e/vimeo-prod-skyfire-std-us/01/1883/17/434419954/1892221591.mp4" type="video/mp4">
        </video>
      </div> <!-- bg-video -->

    </div> <!-- backgrounds -->

    <div id="${contentID}" data-type="content">
      <div id="${div1ID}">
        <h2 id="${h2ID}" contenteditable="true">Lorem ipsum dolor sit amet</h2>
        <p id="${pID}" contenteditable="true">Lorem ipsum dolor sit amet consectur et sermont</p>
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