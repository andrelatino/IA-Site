function sidebarOpenClose(button) {
    var buttonId = button.id;
  
    // Perform actions based on the button clicked
    switch (buttonId) {
      case 'imageWebSidebarButton':
        openImageSidebar();
        // loadDefaultImages();
        // closeImageSidebar();
        closeIconSidebar();
        // closeVideoSidebar();
        // closeGithubImageSidebar();
        // closeGithubVideoSidebar();
        // closeGithubFileSidebar();
        // closeColorSidebar();

        break;
      case 'iconWebSidebarButton':
        openIconSidebar();
        // loadDefaultIcons();
        closeImageSidebar();
        // closeIconSidebar();
        // closeVideoSidebar();
        // closeGithubImageSidebar();
        // closeGithubVideoSidebar();
        // closeGithubFileSidebar();
        // closeColorSidebar();

        break;

      case 'colorWebSidebarButton':
        
        openColorSidebar();
        closeImageSidebar();
        closeIconSidebar();
        // closeVideoSidebar();
        // closeGithubImageSidebar();
        // closeGithubVideoSidebar();
        // closeGithubFileSidebar();

        break;

      case 'videoWebSidebarButton':
        openVideoSidebar();
        loadDefaultVideo();
        closeImageSidebar();
        closeIconSidebar();
        // closeVideoSidebar();
        closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeGithubFileSidebar();
        closeColorSidebar();

        break;
      case 'imageGithubSidebarButton':
        openGithubImageSidebar();
        loadGithubImages();
        closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        // closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeGithubFileSidebar();
        closeColorSidebar();
        break;

      case 'templateSidebarButton':
        openGithubTemplateSidebar();
        // loadGithubTemplates();
        
        // closeImageSidebar();
        // closeIconSidebar();
        // closeVideoSidebar();
        // // closeGithubImageSidebar();
        // closeGithubVideoSidebar();
        // closeGithubFileSidebar();
        // closeColorSidebar();
        break;

      case 'videoGithubSidebarButton':
        openGithubVideoSidebar();
        loadGithubVideos();
        closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        closeGithubImageSidebar();
        // closeGithubVideoSidebar();
        closeGithubFileSidebar();
        closeColorSidebar();
        break;
      case 'fileGithubSidebarButton':
        openGithubFileSidebar();
        loadGithubFiles();
        closeImageSidebar();
        closeIconSidebar();
        closeVideoSidebar();
        closeGithubImageSidebar();
        closeGithubVideoSidebar();
        closeColorSidebar();
        // closeGithubFileSidebar();
        break;
      case 'chatIaSidebarButton':
      openOpenaiTextSidebar();
      break;
      default:
        break;
    }
  }
 /** 
    closeImageSidebar();
    closeIconSidebar();
    closeVideoSidebar();

    closeGithubImageSidebar();
    closeGithubVideoSidebar();
    closeGithubFileSidebar();

  */