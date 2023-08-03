"use strict";

chrome.runtime.onMessage.addListener((request) => {
	if (request !== "Action") {
		return;
	}

	const html = document.querySelector("html");
	const sandboxFrame = document.body.querySelector("iframe#sandboxFrame");
	if (sandboxFrame !== null) {
		return;
	}

	chrome.runtime.sendMessage(html.outerHTML, () => {});
});
