chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({file: "jquery-3.1.1.min.js"}, function() {
  });
  chrome.tabs.executeScript({file: "popup.js"}, function() {
  });
});