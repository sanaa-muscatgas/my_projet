var mysql = require('mysql');

var conn = mysql.createConnection({
	database: 'mytestdb',
	host: "localhost",
	user: "root",
	password: "12345"
});


conn.connect(function(err) {
	if (err) throw err;

	console.log("Connected!");

	// Select * from EMPLOYEES where HIRE_DATE > STR_TO_DATE( '20/11/1995' , '%d/%m/%Y')
	var sql_template = "Select * from ?? where ?? > STR_TO_DATE( ? , '%d/%m/%Y') ";

	var replaces = ['EMPLOYEES', 'HIRE_DATE', '20/11/1995'];
	sql = mysql.format(sql_template, replaces);

	console.log("SQL=" + sql);
	console.log(" ************************ ");


	conn.query(sql, function(err, rows, fields) {
		if (err) throw err;
		for (var i = 0; i < rows.length; i++) {
			console.log("\n------ Row " + i + " ---- ");
			console.log(rows[i]);
			console.log("\n");
			console.log("  - Emp_No: " + rows[i].Emp_No)
			console.log("  - Full_Name: " + rows[i].Full_Name);
		}
	});

});