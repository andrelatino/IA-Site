function getVideoIdOnClick() {
  // alert( "getVideoIdOnClick");
  // Add a click event listener to the grid container
  const grid = document.getElementById('grid');
  grid.addEventListener('click', function(event) {
    if (event.target.tagName === 'VIDEO' && event.target.getAttribute('data-type') === 'vid-grid') {
      const videoId = event.target.id;
      const videoUrl = event.target.querySelector('source').src;
      videoModal();
      loadDefaultVideo();
      loadGithubVideos();
      const videoThumb = document.getElementById('video-thumbnail');
      videoThumb.src = videoUrl;

      localStorage.setItem('imageTypeIs','vid-grid');
      localStorage.setItem('imageIdIs',videoId);

    }
  });
}

  getVideoIdOnClick();
