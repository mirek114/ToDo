function displayWaitingTasks(results){
	var length = results.rows.length;
	var lstTask = $("#lstWaitingTasks");
	lstTask.empty();
	for(var i = 0; i < length; i++ )
	{
		var item = results.rows.item(i);
		var li = $("<li />").attr("id", item.Id).attr("deadline", item.Deadline).attr("isPriority", item.IsPriority);
		var label = $("<label>").attr("name", "taskValue").attr("style", "display: inline-block;").text(item.Value);
		var check = $("<input />").attr("type", "checkbox").attr("class", "isDone");
		li.append(check);
		li.append(label);
		
		lstTask.append(li);
	}
	lstTask.listview("refresh");
	
	lstTask.on("click", "label", function(){
		var li = this.parentElement;
		sessionStorage.setItem('Id', li.id);
		sessionStorage.setItem('Value', li.textContent);
		sessionStorage.setItem('Deadline', li.attributes.deadline.value);
		sessionStorage.setItem('IsPriority', li.attributes.ispriority.value);
		
		$("#popupUpdateDelete").popup("open");
	});
	
	$(".isDone").on("click", function(){
		var li = this.parentElement;
		var id = li.id;
		var name = li.textContent;
		var deadline = li.attributes.deadline.value;
		var priority = li.attributes.ispriority.value;
		tasksHandler.saveTask(name, 1, priority, deadline, id);
		
		tasksHandler.loadWaitingTasks(displayTasks);
		lstTask.listview("refresh");
	});

};

$(document).on("pagebeforeshow", "#waiting", function(){
	databaseHandler.createDatabase();
	tasksHandler.loadWaitingTasks(displayWaitingTasks);
});

function deleteTask(){
	tasksHandler.deleteTask(currentTask.Id);
	tasksHandler.loadWaitingTasks(displayTasks);
	$("#popupUpdateDelete").popup("close");
}