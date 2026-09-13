const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {
  frutas,
  obtenerFrutasConPrecioMayorA4000,
  calcularValorTotalInventario,
  encontrarFrutaConMasStock,
  filtrarFrutasAcidas,
  buscarFrutaPorId,
  agruparFrutasPorCategoria,
} = require('./frutas');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    message: 'API de prueba activa',
    endpoints: ['/api/health', '/api/info', '/api/frutas', '/api/frutas/analisis'],
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

app.get('/api/frutas', (req, res) => {
  res.json({
    total: frutas.length,
    frutas,
  });
});

app.get('/api/frutas/analisis', (req, res) => {
  const id = Number(req.query.id);

  res.json({
    frutasConPrecioMayorA4000: obtenerFrutasConPrecioMayorA4000(frutas),
    valorTotalInventario: calcularValorTotalInventario(frutas),
    frutaConMasStock: encontrarFrutaConMasStock(frutas),
    frutasAcidas: filtrarFrutasAcidas(frutas),
    frutaBuscadaPorId: Number.isNaN(id) ? null : buscarFrutaPorId(frutas, id),
    agrupadasPorCategoria: agruparFrutasPorCategoria(frutas),
  });
});

app.get('/api/frutas/:id', (req, res) => {
  const id = Number(req.params.id);
  const fruta = buscarFrutaPorId(frutas, id);

  if (!fruta) {
    return res.status(404).json({
      error: 'Fruta no encontrada',
    });
  }

  res.json(fruta);
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

module.exports = app;
