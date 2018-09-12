export default (request, response) => {
  const pubnub = require('pubnub');
  const kvstore = require('kvstore');
  const xhr = require('xhr');
  const vault = require('vault');

  // let headersObject = request.headers;
  let paramsObject = request.params;
  // let methodString = request.method;
  // let bodyString = request.body;
  
  let lateralApiUrl = 'https://document-parser-api.lateral.io/?url=' + paramsObject.url
  // let lateralApiKey // read and write key
  
  return vault.get('LATERAL_API_KEY').then((LATERAL_API_KEY) => {
      let lateralApiKey = LATERAL_API_KEY
          const http_options = {
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "subscription-key": lateralApiKey
              }
          }; 

          // console.log('request',request); // Log the request envelope passed
          // Query parameters passed are parsed into the request.params object for you
          // console.log(paramsObject.a) // This would print "5" for query string "a=5

          // Set the status code - by default it would return 200
          response.status = 200;
          // Set the headers the way you like
          // response.headers['X-Custom-Header'] = 'CustomHeaderValue';

          return xhr.fetch(lateralApiUrl, http_options).then((body) => {
              // const result = JSON.parse(body)
              return response.send(body.body);
          }).catch((err) => {
              // console.log(err)
              return response.send("Malformed JSON body.");
          });
  })
};