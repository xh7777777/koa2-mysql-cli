const mysql_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "",
    charset: "utf8mb4",
    port: "3306"
  }
  const HOST = 'http://127.0.0.1'
  const PORT = 3000
  const security = {
      secretKey: "secretKey",
      expiresIn: Math.floor(Date.now()/1000) + 60*60*24*7 
  }
  module.exports = {
      mysql_config,
      PORT,
      HOST,
      security,
  }