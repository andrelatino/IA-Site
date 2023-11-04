function sidebarOpenClose(button) {
    var buttonId = button.id;
    switch (buttonId) {
      case 'imageWebSidebarButton':
        openImageSidebar();
        closeGithubImageSidebar();
      break;

      case 'imageGithubSidebarButton':
        openGithubImageSidebar();
        closeImageSidebar();
        break;

      default:
        break;
    }
  }
