'use strict';

// check if the hotkey is used
chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case 'new-tab':
      openNewTab();
      break;
  }
});

// see if a tab is a new tab from clicking the plus sign 
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if ( changeInfo.url == "chrome://newtab/" || changeInfo.pendingUrl == "chrome://newtab/" ) {
    updateTab();
  }
}); 

function openNewTab() {
  chrome.tabs.create({url: 'chrome://new-tab-page'});
}

function updateTab() {
  chrome.tabs.update({url: 'chrome://new-tab-page' })
}
