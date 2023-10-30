function sidebarOpenClose(button) {
    var buttonId = button.id;
    switch (buttonId) {
      case 'imageWebSidebarButton':
        openImageSidebar();
        closeIconSidebar();
        closeGithubImageSidebar();
      break;
      
      case 'iconWebSidebarButton':
        openIconSidebar();
        closeImageSidebar();
        closeGithubImageSidebar();
      break;

      case 'imageGithubSidebarButton':
        openGithubImageSidebar();
        loadGithubImages();
        
        closeImageSidebar();
        closeIconSidebar();
        break;

      default:
        break;
    }
  }
