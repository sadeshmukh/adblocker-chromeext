// var urlsToBlockOld = ["*://*.doubleclick.net/*", "*://*.contextual.media.net/*", "*://*.apiservices.krxd.net/*", "*://*.googleadservices.com/*"]
var urlsToBlock = ["*://*.doubleclick.net/*"]
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: urlsToBlock},
    ["blocking"]
  );