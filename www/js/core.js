document.addEventListener("deviceready", function(){
	databaseHandler.createDatabase();
}, false);

var currentTask = {
	Id: -1,
	Value: "",
	IsDone: -1,
	IsPriority: -1, 
	Deadline: ""
}

var core ={

}