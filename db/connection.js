const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'husky250wr',
        database: 'election'
    }
);

module.exports = db;