"use strict";

chrome.runtime.onMessage.addListener((request) => {
	if (request !== "Action") {
		return;
	}

	const sandboxFrame = document.body.querySelector("iframe#sandboxFrame");
	if (sandboxFrame !== null) {
		return;
	}

	window.print();
});
