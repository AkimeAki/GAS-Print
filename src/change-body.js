"use strict";

chrome.runtime.onMessage.addListener((request) => {
	if (request === "Action") {
		return;
	}

	const parser = new DOMParser();
	const doc = parser.parseFromString(request, "text/html");

	const head = doc.querySelector("head");
	const body = doc.body;

	const currentHead = document.querySelector("head");
	currentHead.innerHTML = head.outerHTML;

	const currentBody = document.body;
	currentBody.innerHTML = body.outerHTML;
});
