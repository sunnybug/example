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
var BasePage = (function () {
    function BasePage(doc) {
        doc.onload = function () {
            alert('Common code here');
        };
    }
    return BasePage;
}());
var PageX = (function (_super) {
    __extends(PageX, _super);
    function PageX() {
        return _super.call(this, window.document) || this;
    }
    PageX.prototype.show = function (txt) {
        console.log(txt);
    };
    return PageX;
}(BasePage));
function createTasks(jsonTask) {
    var ul = document.createElement('ul');
    for (var i = 0; i < 5; i++) {
        var chkBox = document.createElement('input');
        chkBox.setAttribute("type", "checkbox");
        chkBox.setAttribute("id", String(i));
        chkBox.setAttribute("name", String(i));
        var li = document.createElement('li');
        li.appendChild(chkBox);
        li.appendChild(window.document.createTextNode("chkBox" + String(i)));
        ul.appendChild(li);
    }
    var $divTasks = $("#divTasks");
    $divTasks.empty();
    $divTasks.append(ul);
}
function LoadTasks() {
    $.get("http://192.168.0.200:81/get_svrlist2?p=34&gs_group=3499", function (data, status) {
        if (status != "success") {
            alert(status);
            return;
        }
    });
}
function onLoadTasks() {
    $("#btnAddCheckBox").click(function () { return LoadTasks(); });
}
onLoadTasks();
function cube(x) {
    return x * x * x;
}
//# sourceMappingURL=xmin.js.map