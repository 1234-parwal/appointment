const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // use your mysql username.
    password: 'Sejal@1009', // user your mysql password.
    database: 'UserSlot'
});

// pool.getConnection((err, connection) => {
//     if (err)
//         console.error("Something went wrong connecting to the database ...");

//     if (connection)
//         connection.release();
//     return;
// });


pool.query = util.promisify(pool.query);

module.exports = pool;