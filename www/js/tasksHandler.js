var tasksHandler ={	
	saveTask: function(value, isDone, isPriority, deadline, id){
		if(id <= 0)
		{
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
	
	loadPriotiyTasks: function(displayTasks){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					"select * from Tasks where IsPriority = 1 and IsDone = 0",
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
	
	loadWaitingTasks: function(displayTasks){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					"select * from Tasks where IsPriority = 0 and IsDone = 0",
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
	
	loadDoneTasks: function(displayTasks){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					"select * from Tasks where IsDone = 1",
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
	},
	
	setPriorityTasks: function(){
		databaseHandler.db.transaction(
			function(tx){
				tx.executeSql(
					'update Tasks set IsPriority = 1 where Deadline !="" and Deadline < strftime("%Y-%m-%d", "now") and IsDone = 0',
					[],
					function(tx, results){},
					function(tx, error){
							console.log("Delete Task error:" + error.message);
					}
				);
			}
		);
	}
};