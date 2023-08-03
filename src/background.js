"use strict";

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, "Action").catch(() => {});

	return true;
});

chrome.runtime.onMessage.addListener((request, sender) => {
	chrome.tabs.sendMessage(sender.tab.id, request).catch(() => {});

	return true;
});
