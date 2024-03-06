document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggleCheckbox");

  chrome.storage.sync.get("extensionEnabled", function (data) {
    toggleCheckbox.checked = data.extensionEnabled;
  });

  toggleCheckbox.addEventListener("change", function () {
    const isChecked = toggleCheckbox.checked;

    chrome.storage.sync.set({extensionEnabled: isChecked});
    chrome.runtime.sendMessage({action: "toggleExtension", enabled: isChecked});
  });
});
