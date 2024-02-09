function loadPatterns(src) {
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  }
  
  // APIS
  loadPatterns("../global/patterns/sections/hero_color_left_light.js");
  loadPatterns("../global/patterns/sections/hero_image_left_light.js");
  loadPatterns("../global/patterns/sections/hero_video_left_light.js");