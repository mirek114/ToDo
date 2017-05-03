$(document).on("ready", function(){
	databaseHandler.createDatabase();
});

$(document).on("pagebeforeshow", "#taskDetails", function(){
	$("#taskName").val(currentTask.Value);
	$("#task").attr("taskId", currentTask.Id);
});

function saveTask(){
	var name = $("#taskName").val();
	var deadline = $("#deadline").val();
	var priority = $("#priority").val();
	var id = document.getElementById("task").getAttribute("taskId");
	tasksHandler.saveTask(name, 0, priority, deadline, id);
}