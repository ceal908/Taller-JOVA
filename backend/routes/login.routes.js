// backend/routes/login.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Ahora sí es el pool con promesas
const bcrypt = require('bcrypt');

// POST /api/login
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
    }
    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
    }

    res.json({ success: true, rol: user.rol, nombre: user.primer_nombre });
  } catch (err) {
    console.error('❌ Error en login:', err);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
});

module.exports = router;


