const targetUrl = "www.figma.com/file/";
let debounceTimer;
let extensionEnabled = true;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!extensionEnabled) return;
  if (!changeInfo.url) return;
  if (isValidUrl(changeInfo.url)) return;

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    chrome.tabs.get(tabId, (currentTab) => {
      if (isValidUrl(currentTab.url)) return;

      chrome.tabs.sendMessage(tabId, {action: "showAlert"});
    });
  }, 4000);
});

function isValidUrl(url) {
  return Boolean(url.includes("mode=dev") || !url.includes(targetUrl));
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleExtension") {
    extensionEnabled = message.enabled;

    if (message.enabled) {
      chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (tabs.length > 0) {
          const activeTab = tabs[0];

          const newIconPath = {
            16: "../images/icon-16.png",
          };

          chrome.action.setIcon({path: newIconPath});

          chrome.tabs.get(activeTab.id, (currentTab) => {
            if (isValidUrl(currentTab.url)) return;

            chrome.tabs.sendMessage(currentTab.id, {action: "showAlert"});
          });
        }
      });
    } else {
      const newIconPath = {
        16: "../images/icon-16-disabled.png",
      };

      chrome.action.setIcon({path: newIconPath});
    }
  }
});
