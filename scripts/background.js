const targetUrl = "www.figma.com/file/";
let debounceTimer;
let extensionEnabled = true;

function isValidUrl(url) {
  return Boolean(url.includes("mode=dev") || !url.includes(targetUrl));
}

function showAlert(tabId) {
  chrome.tabs.get(tabId, (currentTab) => {
    if (isValidUrl(currentTab.url)) return;

    chrome.tabs.sendMessage(currentTab.id, {action: "showAlert"});
  });
}

function enableIcon() {
  chrome.action.setIcon({
    path: {
      16: "../images/icon-16.png",
    },
  });
}
function dissableIcon() {
  chrome.action.setIcon({
    path: {
      16: "../images/icon-16-disabled.png",
    },
  });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (!extensionEnabled) return;
  if (!changeInfo.url) return;
  if (isValidUrl(changeInfo.url)) return;

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => showAlert(tabId), 4000);
});

chrome.runtime.onMessage.addListener(function (message) {
  if (message.action !== "toggleExtension") return;
  extensionEnabled = message.enabled;

  if (message.enabled) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      const activeTab = tabs[0];

      enableIcon();

      showAlert(activeTab.id);
    });
  } else dissableIcon();
});
