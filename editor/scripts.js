window.addEventListener('beforeunload', function(event) {
  // This is primarily for cases where there's a risk of data loss.
  var confirmationMessage = 'Are you sure you want to leave this page?';
  
  // Cross-browser compatibility: Show a standard confirmation dialog.
  event.returnValue = confirmationMessage; // This is required for some browsers.
});

// Separate logic for explicitly asking the user to reload the page
function askToReloadPage() {
  // Use confirm to ask the user if they want to reload the page
  var userResponse = confirm("Do you want to reload the page?");
  
  // Check if the user clicked "OK"
  if (userResponse) {
      // Force a reload of the page from the server, ignoring the cache
      window.location.reload(true);
  }
}



function loadScript(src) {
  var script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}

window.addEventListener('load', function() {
loadScript("../global/js/apis.js");
loadScript("../global/patterns/patterns.js");
loadScript("../global/patterns/items/items200x200.js");
loadScript("../global/patterns/items/itemsCercle.js");
loadScript("../global/patterns/items/itemsButtons.js");
loadScript("../global/patterns/items/itemsIcons.js");

loadScript("./js/page/pageLoadFonts.js");

loadScript("./js/global/singleVideos.js");
loadScript("./js/global/colorBackground.js");
loadScript("./js/page/pageJsonLoad.js");
loadScript("./js/page/pageJsonSave.js");
loadScript("./js/page/pagePublish.js");
loadScript("./js/page/pageEncodeFr.js");
loadScript("./js/page/pageJsonImport.js");
loadScript("./js/page/pageJsonExport.js");
loadScript("./js/page/pageGridObserver.js");
loadScript("./js/page/pageSaveProd.js");
loadScript("./js/page/pageSaveAdmin.js");
loadScript("./js/page/pageResize.js");
loadScript("./js/page/pagePublishModal.js");
loadScript("./js/page/pageBuilderSave.js");
loadScript("./js/menu/menu.js");
loadScript("./js/settings/settings-modal.js");
loadScript("./js/settings/settings-sidebar.js");
loadScript("./js/dragElements.js");
loadScript("./js/video/videoModal.js");
loadScript("./js/video/videoSidebar.js");
loadScript("./js/video/videoClick.js");
loadScript("./js/github/image/githubCheckSize.js");
loadScript("./js/github/image/githubLoadImages.js");
loadScript("./js/github/image/githubSearchImages.js");
loadScript("./js/github/image/githubUploadImages.js");
loadScript("./js/github/template/githubLoadTemplates.js");
loadScript("./js/github/template/githubAddTemplates.js");
loadScript("./js/github/video/githubLoadVideos.js");
loadScript("./js/github/video/githubSearchVideos.js");
loadScript("./js/github/video/githubUploadVideos.js");
loadScript("./js/sidebar/sidebarOpenClose.js");
loadScript("./js/sidebar/sidebarGoToUrl.js");
loadScript("./js/moveSection.js");
loadScript("./js/replaceSection.js");
loadScript("./js/exportSection.js");
loadScript("./js/exportModal.js");
loadScript("./js/openOverlay.js");
loadScript("./js/importModal.js");
loadScript("./js/exportHtml.js");
loadScript("./js/section/sectionJsonImport.js");
loadScript("./js/element/elementToolbar.js");
loadScript("./js/video/videoSearch.js");
loadScript("./js/section/sectionToolbar.js");
loadScript("./js/tools/tools-drag.js");
loadScript("./js/tools/toolsHtml.js");
loadScript("./js/tools/tools_html.js");
loadScript("./js/tools/tools_css.js");
loadScript("./js/tools/tools_page_css.js");
loadScript("./js/tools/tools_page_js.js");
loadScript("./js/tools/tools_props.js");
loadScript("./js/tools/tools_js.js");
loadScript("./js/tools/tools_section.js");
loadScript("./js/tools/toolsModal.js");
loadScript("./js/editor-css/editor-css-modal.js");
loadScript("./js/editor-css/editor-css-buttons.js");
loadScript("./js/editor-css/editor-css-load.js");
loadScript("./js/editor-css/editor-css-update.js");
loadScript("./js/editor-css/editor-css-select.js");
loadScript("./js/ask-ia/ask_ia_modal.js");
loadScript("./js/ask-ia/ask_ia_api.js");
// loadScript("./js/global/intObserver.js");
loadScript("./js/image/imageAlt.js");
loadScript("./js/image/imageModal.js");
loadScript("./js/image/imageSearch.js");
loadScript("./js/image/imageButtons.js");
loadScript("./js/image/imageUpdate.js");
loadScript("./js/image/imageLoad.js");
loadScript("./js/image/imageClick.js");
loadScript("./js/image/imageClear.js");
loadScript("./js/global/singleImages.js");

loadScript("./js/color/coloris.min.js");
loadScript("./js/color/colorHtml.js");
loadScript("./js/color/colorSearch.js");
loadScript("./js/color/colorBgIds.js");
loadScript("./js/color/colorDefault.js");
loadScript("./js/color/colorButtons.js");
loadScript("./js/color/colorSolid.js");
loadScript("./js/color/colorRadial.js");
loadScript("./js/color/colorLinear.js");

});
