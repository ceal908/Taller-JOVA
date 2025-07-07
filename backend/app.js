const express = require('express');
const cors = require('cors'); // ⬅️ primero importa cors
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = 3000;

// Middleware: habilitar CORS para todas las rutas
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Sirve archivos estáticos de la carpeta 'frontend' o 'public'
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));



// Rutas API
const loginRouter = require('./routes/login.routes');
app.use('/api/login', loginRouter);

const productosRoutes = require('./routes/productos.routes');
app.use('/api/productos', productosRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('✅ API Taller-JO.VA funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
