class BasePage {
	constructor(doc: HTMLDocument) {
		doc.onload = function () {
			alert('Common code here');
		}
	}
}