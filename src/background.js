"use strict";

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, "Action").catch(() => {});

	return true;
});

async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

const changeIcon = async () => {
	const currentTab = await getCurrentTab();

	if (currentTab.url.indexOf("https://script.google.com/macros/s/") !== -1) {
		chrome.action.setIcon({
			path: {
				128: "./icons/icon.png"
			}
		});
	} else {
		chrome.action.setIcon({
			path: {
				128: "./icons/icon-gray.png"
			}
		});
	}
};

chrome.tabs.onActivated.addListener(changeIcon);
chrome.tabs.onUpdated.addListener(changeIcon);
chrome.runtime.onInstalled.addListener(changeIcon);
