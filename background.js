/* eslint-disable linebreak-style */
/* eslint-disable func-style */

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "clicked"
  };
  chrome.tabs.sendMessage(tab.id, msg);
}