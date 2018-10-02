# Article Reader

## Article reader powered by [PubNub](https://www.pubnub.com/), [AWS Polly](https://aws.amazon.com/polly/) and [LateralIO]()

The apps nowadays are getting smarter and smarter. Smart devices can recognise faces which makes the applications overall secure. They can also understand our voice and whatever language we speak, and just follow the commands. They can alert you or send you reminders in case a event happens like guest coming to your house. Many such applications have been possible through Artificial Intelligence (AI) and Machine Learning (ML).

Nowadays, it has become very easy to integrate ML APIs into your application. It is as easy as creating a REST endpoint which will talk to ML services for a specific type of task. The [PubNub BLOCKS Catalog](https://www.pubnub.com/docs/blocks-catalog) contains three blocks for Amazon ML APIs:
- [Amazon Translate](https://www.pubnub.com/docs/blocks-catalog/amazon-translate?utm_source=Syndication&utm_medium=AWS-Blog&utm_campaign=SYN-CY18-Q2-AWS-Blog): Natural and fluent language translation
- [Amazon Polly](https://www.pubnub.com/docs/blocks-catalog/amazon-polly?utm_source=Syndication&utm_medium=AWS-Blog&utm_campaign=SYN-CY18-Q2-AWS-Blog): Turn text into lifelike speech using deep learning
- [Amazon Comprehend](https://www.pubnub.com/docs/blocks-catalog/amazon-comprehend?utm_source=Syndication&utm_medium=AWS-Blog&utm_campaign=SYN-CY18-Q2-AWS-Blog): Discover insights and relationships in text

In this tutorial, we are creating your personal news reporter which will read out news to you. Its personalised too as you can change the voice of person reading out. This relies on 2 services: 
- [Amazon Polly](https://aws.amazon.com/polly/), which is available in PubNub BLOCKS catalog.
- [LateralIO Article extractor API](https://lateral.io/docs/article-extractor), for which we will create a PubNub function from scratch that will extract text from the website.

![alt text](..."Article reader chrome extension GIF demo")


### Getting started:

1. Download this repo and unzip it.
2. Go to your chrome browser. Then go to 'Extensions' inside 'More tools'.
3. At the top of the page, you will see 'Load unpacked' button.
4. You can then select the above unzipped folder.

And that's it. Your chrome extension is ready to use. You can now go to any blog or news page and use this extension to read it aloud.

### Limitations:
- The functionality is currently limited upto max 1000 characters articles.
- Please note that in order for this to work, the 2 PubNub functions need to be running. You can find out how to create them in the blog post. Make sure to add the API keys and update the function URL in the chrome extensions source code.


### References:

- [Getting started with chrome extensions](https://developer.chrome.com/extensions/getstarted)
- [HTML5 audio and data URIs](http://www.iandevlin.com/blog/2012/09/html5/html5-media-and-data-uri/)