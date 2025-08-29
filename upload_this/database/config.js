const mysql = require("mysql2");

const con = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DBHOST || "shuttle.proxy.rlwy.net",
  port: process.env.DBPORT || 15256,
  user: process.env.DBUSER || "root",
  password: process.env.DBPASS || "wOXTdRMGqrqiPYfvQUxDxwJAykMTyTNx",
  database: process.env.DBNAME || "railway",
  charset: "utf8mb4",
});

con.getConnection((err) => {
  if (err) {
    console.log({
      err: err,
      msg: "❌ Database connected error",
    });
  } else {
    console.log("✅ Database has been connected");
  }
});

module.exports = con;
