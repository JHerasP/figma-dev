document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("toggleCheckbox");

  chrome.storage.sync.get("extensionEnabled", (data) => {
    toggleCheckbox.checked = data.extensionEnabled;
  });

  toggleCheckbox.addEventListener("change", () => {
    const isChecked = toggleCheckbox.checked;

    chrome.storage.sync.set({extensionEnabled: isChecked});
    chrome.runtime.sendMessage({action: "toggleExtension", enabled: isChecked});
  });
});
