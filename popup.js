var ans = {};
let tryButton = document.getElementById('try');
let player = document.getElementById('audio_player');
let soundArray;

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

      let texts = splitText(body)
      anotherFunction(texts)

      // console.log(soundArray)
      // playSoundArray(soundArray)
    });
  });
}

async function anotherFunction (texts) {
  for (const text in texts) {
      console.log(text)
      await getAudio(texts[text])
      .then((audio) => {
        console.log(texts[text])
        return playAudio(audio)
        // let a = playAudio(audio)
        // console.log(a)
        // return a
      })
      .then((a) => {
        console.log(a)
        // return a
      })
      .catch((err) =>{
        console.log(err)
      })
  }
}

const getAudio = function(text){
  return new Promise((resolve, reject) => {
    let result = sendTextToPolly(text)
    resolve(result)
  })
}

async function sendTextToPolly(text) {
  let res
  await $.ajax({
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
    }),
    success: function(msg){
      const result = JSON.stringify(msg)
      const sound = JSON.parse(result).polly_sound
      const srcData = 'data:audio/mp3;base64,' + sound;
      // console.log(srcData)
      res = srcData
      // player.setAttribute("src", srcData)
    }
  })
  return res
}

const playAudio = function(data) {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
  // player.setAttribute("src", data)
  // await player.play()
  // if (player.duration > 0 && player.paused) {
  //   return
  // }

  // var playPromise = await player.play();

  // if (playPromise !== undefined) {
  //   playPromise.then(_ => {
  //     // Automatic playback started!
  //     // Show playing UI.
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     // Auto-play was prevented
  //     // Show paused UI.
  //   });
  // }
}

function splitText(text) {
  arr = []
  for (let index = 0; index < ((text.length/450) + 1); index++) {
    const element = text.substr(index * 450, 450 + (index * 450));
    arr.push(element)
  }
  return arr.filter(String)
}

async function playSoundArray(sounds) {
  sounds.forEach(async (sound) => {
    await sendTextToPolly(sound)
  })
}

ans.createSidebar.init();
