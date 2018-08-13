chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'bbc.com'},
  //     })
  //     ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});

// document.addEventListener('DOMContentLoaded', function() {
//   let trybutton = document.getElementById('try');
//   trybutton.on('click', function() {
//     console.log("yo")
//     let article_text = $("#page > div:nth-child(1) > div.container > div > div.column--primary > div.story-body > div.story-body__inner")[0]
//     console.log(article_text)
//   })
// })

// $( document ).ready(function() {
//   console.log( "ready!" );
//   let trybutton = $('#try');
//   trybutton.click(() =>{
//     let article_text = $("#page > div:nth-child(1) > div.container > div > div.column--primary > div.story-body > div.story-body__inner")[0]
//     console.log(article_text)
//   })
// });

// chrome.extension.onRequest.addListener(function() {
//   let trybutton = document.getElementById('try');
//   trybutton.on('click', function() {
//     console.log("yo")
//   //   let article_text = $("#page > div:nth-child(1) > div.container > div > div.column--primary > div.story-body > div.story-body__inner")[0]
//   //   console.log(article_text)
//   })
// });

$('#try').click(function () {
  console.log("yo")
})