chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showAlert")
    alert("Activa el modo dev, puto retrasado");
});
