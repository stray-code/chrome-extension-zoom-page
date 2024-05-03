const init = async () => {
  const zoomFactor = await chrome.tabs.getZoom();

  const newZoomFactor = zoomFactor === 2 ? 1 : 2;

  chrome.tabs.setZoom(newZoomFactor);

  window.close();
};

init();
