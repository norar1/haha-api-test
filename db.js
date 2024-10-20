const mysql = require('mysql');

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
};

const db = mysql.createPool(dbConfig);

module.exports = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, results) => {
            if (err) {
                console.log("Query error:", err);
                return reject(err);
            }
            resolve(results);
        });
    });
};
