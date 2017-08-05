function displayDoneTasks(results){
	var length = results.rows.length;
	var lstTask = $("#lstDoneTasks");
	lstTask.empty();
	for(var i = 0; i < length; i++ )
	{
		var item = results.rows.item(i);
		var li = $("<li />").attr("id", item.Id).attr("deadline", item.Deadline).attr("isPriority", item.IsPriority);
		var label = $("<label />").attr("name", "taskValue").text(item.Value);
		li.append(label);
		lstTask.append(li);
	}
	lstTask.listview("refresh");
};

$(document).on("pagebeforeshow", "#done", function(){
	databaseHandler.createDatabase();
	tasksHandler.loadDoneTasks(displayDoneTasks);
});