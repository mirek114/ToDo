var databaseHandler = {
	db: null,
	createDatabase: function()
	{
		this.db = window.openDatabase(
			"toDo.db",
			"1.0",
			"toDo database",
			2*1024*1024);
			
		this.db.transaction(
			function(tx){
				tx.executeSql("create table if not exists Tasks(Id integer primary key, Value text, IsDone integer, IsPriority integer, Deadline text)"),
				[],
				function(tx, results){},
				function(tx, error){
					colsole.log("Table creation error:" + error.message);
				}
			},
			function(error){
				console.log("Transaction error:" + error.message)
			},
			function(){
				console.log("Create DB saccessfully");
			}
		)
	}
}