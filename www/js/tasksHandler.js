var tasksHandler ={
	addTask: function(value, isDone, isPriority, deadline){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					"insert into Tasks(Value, IsDone, IsPriority, Deadline) values(?, ?, ?, ?)",
					[value, isDone, isPriority, deadline],
					function(tx, results){},
					function(tx, error){
							console.log("Add Task error:" + error.message);
					}
				);
			},
			function(error){},
			function(){}
		);
	}
}