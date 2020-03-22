// CREATE CONNECTION TO DATABASE

// Connect to database
const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    // port
    // name
    // password
});

exports.dbConnect = dbConnect;