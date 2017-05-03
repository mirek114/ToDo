$(document).on("ready", function(){
	databaseHandler.createDatabase();
});

function addTask(){
	var name = $("#taskName").val();
	var deadline = $("#deadline").val();
	var priority = $("#priority").val();
	tasksHandler.addTask(name, 0, priority, deadline);
}