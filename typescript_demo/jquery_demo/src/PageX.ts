/// <reference path="BasePage.ts"/>

class PageX extends BasePage {
	constructor() {
		super(window.document);
	}
	show(txt: string) {
		console.log(txt);
	}
}