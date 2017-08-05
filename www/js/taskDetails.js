$(document).on("pagebeforeshow", "#taskDetails", function(){
	databaseHandler.createDatabase();
});

$(document).on("pagebeforeshow", "#taskDetails", function(){	
	$("#taskName").val(sessionStorage.getItem('Value'));
	$("#deadline").val(sessionStorage.getItem('Deadline'));
	$("#priority").val(sessionStorage.getItem('IsPriority')).change();
	$("#task").attr("taskId", sessionStorage.getItem('Id'));
});

function saveTask(){
	var name = $("#taskName").val();
	var deadline = $("#deadline").val();
	var priority = $("#priority").val();
	var id = document.getElementById("task").getAttribute("taskId");
	tasksHandler.saveTask(name, 0, priority, deadline, id);
}