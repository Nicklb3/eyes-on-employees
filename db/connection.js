const mysql = require('mysql2');

const connection = mysql.createConnection(
{
host: 'localhost',

user: 'root',
password: '',
database: 'employees_db',
},
console.log('connected to the employees_db database')
    
);
module.exports = connection