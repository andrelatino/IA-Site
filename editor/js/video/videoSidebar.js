// function openWebVideos(){
//     alert('openWebVideos');
// }

// function openMyVideos(){
//     alert('openMyVideos');
// }

  function openWebVideos() {
    sidebar = document.getElementById("video-sidebar");
    sidebar.style.bottom = "-135px";
    sidebar.style.transition = "bottom 0.5s";
    sidebar.offsetHeight;
    sidebar.style.bottom = "0"; 
  }

//   function closeImageSidebar() {
//     sidebar = document.getElementById("image-sidebar");
//     sidebar.style.bottom = "0px";
//     sidebar.style.transition = "bottom 0.5s";
//     sidebar.offsetHeight;
//     sidebar.style.bottom = "-135px";
//   }