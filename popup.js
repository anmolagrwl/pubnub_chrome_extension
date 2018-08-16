var ans = {};
let tryButton = document.getElementById('try');

ans.createSidebar = function() {

    return {
        init: function(){
            chrome.extension.getBackgroundPage();
            tryButton.onclick = function(element) {
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'alert(document.querySelector("h1").textContent);'});
              });
            };
        }
    }
}();

ans.createSidebar.init();