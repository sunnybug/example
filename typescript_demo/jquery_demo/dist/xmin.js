var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePage = /** @class */ (function () {
    function BasePage(doc) {
        doc.onload = function () {
            alert('Common code here');
        };
    }
    return BasePage;
}());
/// <reference path="BasePage.ts"/>
var PageX = /** @class */ (function (_super) {
    __extends(PageX, _super);
    function PageX() {
        return _super.call(this, window.document) || this;
    }
    PageX.prototype.show = function (txt) {
        console.log(txt);
    };
    return PageX;
}(BasePage));
/// <reference path="PageX.ts"/>
var Main = /** @class */ (function () {
    function Main() {
        this.name = "";
        jQuery(document).ready(function () {
        });
    }
    Main.prototype.show = function (text) {
        var $ele = $("h1");
        $ele.text(text);
    };
    return Main;
}());
// let main = new Main();
// main.name = "Hello TypeScript";
// main.show(main.name);
var main = new PageX();
main.show('333');
function cube(x) {
    return x * x * x;
}
//# sourceMappingURL=xmin.js.map