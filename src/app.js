const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

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

app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

module.exports = app;
