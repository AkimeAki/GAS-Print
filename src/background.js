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
				16: "./icons/icon16.png",
				48: "./icons/icon48.png",
				128: "./icons/icon128.png"
			}
		});
	} else {
		chrome.action.setIcon({
			path: {
				16: "./icons/icon16-gray.png",
				48: "./icons/icon48-gray.png",
				128: "./icons/icon128-gray.png"
			}
		});
	}
};

chrome.tabs.onActivated.addListener(async () => {
	await changeIcon();
});

chrome.runtime.onInstalled.addListener(async () => {
	await changeIcon();
});
