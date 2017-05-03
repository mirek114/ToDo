$(document).on("ready", function(){
	databaseHandler.createDatabase();
});

function displayTasks(results){
	var length = results.rows.length;
	var lstTask = $("#lstTasks");
	for(var i = 0; i < length; i++ )
	{
		var item = results.rows.item(i);
		var li = $("<li />");
		var a = $("<a />");
		var h3 = $("<h3 />").text(item.Value);
		a.append(h3);
		li.append(a);
		lstTask.append(li);
	}
	lstTask.listview("refresh");
};

$(document).on("pagebeforeshow", "#priorities", function(){
	databaseHandler.createDatabase();
	tasksHandler.loadPriotiyTasks(displayTasks);
});