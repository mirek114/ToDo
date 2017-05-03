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
	},
	
	loadPriotiyTasks: function(displayTasks){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					"select * from Tasks where IsPriority == 1",
					[],
					function(tx, results){
						displayTasks(results);
					},
					function(tx, error){
							console.log("Loading Tasks error:" + error.message);
					}
				);
			},
			function(error){},
			function(){}
		);
	}
};