const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {
  productos,
  obtenerProductosMayoresA100Mil,
  calcularValorTotalInventario,
  encontrarProductoConMasStock,
  filtrarProductosDeTecnologia,
  buscarProductoPorId,
  agruparProductosPorCategoria,
} = require('./productos');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    message: 'API de prueba activa',
    endpoints: ['/api/health', '/api/info'],
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    status: 'running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    project: 'acaweb',
    description: 'API Express para la tarea universitaria',
    language: 'Node.js',
    framework: 'Express',
  });
});

app.get('/api/productos', (req, res) => {
  res.json({
    total: productos.length,
    productos,
  });
});

app.get('/api/productos/analisis', (req, res) => {
  const id = Number(req.query.id);

  res.json({
    productosMayoresA100Mil: obtenerProductosMayoresA100Mil(productos),
    valorTotalInventario: calcularValorTotalInventario(productos),
    productoConMasStock: encontrarProductoConMasStock(productos),
    productosTecnologia: filtrarProductosDeTecnologia(productos),
    productoBuscadoPorId: Number.isNaN(id) ? null : buscarProductoPorId(productos, id),
    agrupadosPorCategoria: agruparProductosPorCategoria(productos),
  });
});

app.get('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const producto = buscarProductoPorId(productos, id);

  if (!producto) {
    return res.status(404).json({
      error: 'Producto no encontrado',
    });
  }

  res.json(producto);
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

module.exports = app;
