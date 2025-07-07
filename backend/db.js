// db.js (con promesas, para usar async/await)
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Si quieres mostrar mensaje de éxito, hazlo así:
pool.getConnection()
  .then(() => {
    console.log('✅ Conectado a la base de datos taller-jova');
  })
  .catch(err => {
    console.error('❌ Error al conectar con la base de datos:', err.message);
  });

module.exports = pool;
