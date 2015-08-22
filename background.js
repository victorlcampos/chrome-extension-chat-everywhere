chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON

  chrome.tabs.executeScript(tab.id, {
    "file": "js/chatty-phoenix.js"
  }, function() {
    console.log("Script Executed .. "); // Notification on Completion
  });

  chrome.tabs.insertCSS(tab.id, {
    "file": "css/app.css"
  }, function() {
    console.log("CSS Executed .. "); // Notification on Completion
  });


});
