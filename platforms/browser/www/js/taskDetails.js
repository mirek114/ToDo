$(document).on("pagebeforeshow", "#taskDetails", function(){
	$("#taskName").val(currentTask.Value);
	$("#deadline").val(currentTask.Deadline);
	$("#priority").val(currentTask.IsPriority).change();
	$("#task").attr("taskId", currentTask.Id);
});

function saveTask(){
	var name = $("#taskName").val();
	var deadline = $("#deadline").val();
	var priority = $("#priority").val();
	var id = document.getElementById("task").getAttribute("taskId");
	tasksHandler.saveTask(name, 0, priority, deadline, id);
}