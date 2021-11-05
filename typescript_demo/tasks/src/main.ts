/// <reference path="PageX.ts"/>

interface JsonTask {
	name: string;
	age: number;
}

// var main = new Main()
// main.name = "Hello TypeScript"
// main.show(main.name)
function createTasks(jsonTask: JsonTask) {
	var ul = document.createElement('ul')
	for (var i = 0; i < 5; i++) {
		var chkBox = document.createElement('input')
		chkBox.setAttribute("type", "checkbox")
		chkBox.setAttribute("id", String(i))
		chkBox.setAttribute("name", String(i))

		var li = document.createElement('li')
		li.appendChild(chkBox)
		li.appendChild(window.document.createTextNode("chkBox" + String(i)))

		ul.appendChild(li)
	}
	var $divTasks: JQuery = $("#divTasks")
	$divTasks.empty()
	$divTasks.append(ul)
}

function LoadTasks() {
	$.get("http://192.168.0.200:81/get_svrlist2?p=34&gs_group=3499", function (data, status) {
		if (status != "success") {
			alert(status)
			return
		}

	})
}

function onLoadTasks() {
	$("#btnAddCheckBox").click(() => LoadTasks())
}
onLoadTasks()

