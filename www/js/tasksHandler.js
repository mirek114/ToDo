var tasksHandler ={
	saveTask: function(value, isDone, isPriority, deadline, id){
		if(id <= 0)
		{
			addTask(value, isDone, isPriority, deadline);
		}
		else{
			databaseHandler.db.transaction(
				function(tx){
					tx.executeSql(
						"update Tasks set Value=?, IsDone=?, IsPriority=?, Deadline=? where Id =?",
						[value, isDone, isPriority, deadline, id],
						function(tx, results){},
						function(tx, error){
								console.log("Update Task error:" + error.message);
						}
					);
				},
				function(error){},
				function(){}
			);	
		}
	},
	
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
	},
	
	deleteTask: function(id){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					"delete from Tasks where Id = ?",
					[id],
					function(tx, results){},
					function(tx, error){
							console.log("Delete Task error:" + error.message);
					}
				);
			}
		);
	}
};