$(document).on("ready", function(){
	databaseHandler.createDatabase();
});

var currentTask = {
	Id: -1,
	Value: "",
	IsDone: -1,
	IsPriority: -1, 
	Deadline: ""
}

function displayTasks(results){
	var length = results.rows.length;
	var lstTask = $("#lstTasks");
	lstTask.empty();
	for(var i = 0; i < length; i++ )
	{
		var item = results.rows.item(i);
		var li = $("<li />").attr("id", item.Id);
		var a = $("<a />");
		var h3 = $("<h3 />").attr("name", "taskValue").text(item.Value);
		a.append(h3);
		li.append(a);
		lstTask.append(li);
	}
	lstTask.listview("refresh");
	lstTask.on("click", "li", function(){
		currentTask.Value = $(this).find("[name='taskValue']").text();
		currentTask.Id = $(this).attr("id");
		
		$("#popupUpdateDelete").popup("open");
	});
};

$(document).on("pagebeforeshow", "#priorities", function(){
	databaseHandler.createDatabase();
	tasksHandler.loadPriotiyTasks(displayTasks);
});

function deleteTask(){
	tasksHandler.deleteTask(currentTask.Id);
	tasksHandler.loadPriotiyTasks(displayTasks);
	$("#popupUpdateDelete").popup("close");
}

