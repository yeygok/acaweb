# acaweb

Proyecto base para la tarea universitaria de exponer una API con Express y Node.js usando un catálogo de frutas.

## Requisitos

- Node.js 18 o superior

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

Durante desarrollo:

```bash
npm run dev
```

## Endpoints

- `GET /` - Mensaje principal de la API.
- `GET /api/health` - Verificación de estado.
- `GET /api/info` - Información básica del proyecto.
- `GET /api/frutas` - Lista todas las frutas de ejemplo.
- `GET /api/frutas/:id` - Busca una fruta por id.
- `GET /api/frutas/analisis` - Devuelve el análisis completo del array, incluyendo frutas con precio mayor a 4000.

## Ejemplos

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/info
curl http://localhost:3000/api/frutas/analisis?id=3
```
