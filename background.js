const targetUrl = "www.figma.com/file/";
let debounceTimer;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) return;
  if (isValidUrl(changeInfo.url)) return;

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    chrome.tabs.get(tabId, (currentTab) => {
      if (isValidUrl(currentTab.url)) return;

      chrome.tabs.sendMessage(tabId, { action: "showAlert" });
    });
  }, 4000);
});

function isValidUrl(url) {
  return Boolean(url.includes("mode=dev") || !url.includes(targetUrl));
}
