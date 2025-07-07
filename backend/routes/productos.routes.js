const express = require('express');
const router = express.Router();
const db = require('../db'); // Importamos la conexión a la BD

// GET /api/productos → obtener todos los productos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM productos';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Error al consultar productos:', err);
      res.status(500).json({ error: 'Error al obtener productos' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
