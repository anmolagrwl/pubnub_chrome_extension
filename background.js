chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("alert from background.js");
  chrome.tabs.executeScript({file: "jquery-3.1.1.min.js"}, function() {
      console.log("jquery Loaded");
  });
  chrome.tabs.executeScript({file: "popup.js"}, function() {
      console.log("content loaded");
  });
});