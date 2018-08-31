var ans = {};
let tryButton = document.getElementById('try');
let player = document.getElementById('audio_player');

ans.createSidebar = function() {
    return {
        init: function(){
            chrome.extension.getBackgroundPage();
            tryButton.onclick = function(element) {
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                const pageurl = tabs[0].url
                chrome.tabs.executeScript(null,
                    {},
                    function(){
                      sendLinkToLateral(pageurl);
                      // console.log(tabs[0].title)
                      // sendTextToPolly(tabs[0].title) 
                    })
              });
            };
        }
    }
}();


function sendLinkToLateral(pageurl) {
  $(document).ready(function() {
    $.ajax({
      method: "GET",
      url: "https://pubsub.pubnub.com/v1/blocks/sub-key/sub-c-8244f27a-94f2-11e8-873f-86cf78041310/lateralArticleReader",
      data: { url: pageurl}
    })
    .done(function(msg){
      const body = JSON.parse(msg).body.replace(/[\r\n]/g, '');
      console.log(body);
      sendTextToPolly(body)
    });
  });
}

function sendTextToPolly(text) {
  $.ajax({
    method: "POST",
    url: "https://pubsub.pubnub.com/v1/blocks/sub-key/sub-c-8244f27a-94f2-11e8-873f-86cf78041310/aws-polly",
    data: JSON.stringify({
      "data": {
        "text": text,
        "polly": {
          "voice": "Joanna",
          "format": "mp3",
          "location": "text"
        }
      }
    })
  })
  .done(function(msg){
    const result = JSON.stringify(msg)
    const sound = JSON.parse(result).polly_sound
    const srcData = 'data:audio/mp3;base64,' + sound;
    console.log(srcData)
    player.setAttribute("src", srcData)
  });
}


ans.createSidebar.init();
