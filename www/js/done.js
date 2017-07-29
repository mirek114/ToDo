function displayDoneTasks(results){
	var length = results.rows.length;
	var lstTask = $("#lstDoneTasks");
	lstTask.empty();
	for(var i = 0; i < length; i++ )
	{
		var item = results.rows.item(i);
		var li = $("<li />").attr("id", item.Id).attr("deadline", item.Deadline).attr("isPriority", item.IsPriority);
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
		currentTask.IsPriority = $(this).attr("isPriority");
		currentTask.Deadline = $(this).attr("deadline");
		
		$("#popupUpdateDelete").popup("open");
	});
};

$(document).on("pagebeforeshow", "#waiting", function(){
	databaseHandler.createDatabase();
	tasksHandler.loadDoneTasks(displayWaitingTasks);
});