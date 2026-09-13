# acaweb

Proyecto base para la tarea universitaria de exponer una API con Express y Node.js.

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
- `GET /api/productos` - Lista todos los productos de ejemplo.
- `GET /api/productos/:id` - Busca un producto por id.
- `GET /api/productos/analisis` - Devuelve el análisis completo del array.

## Ejemplos

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/info
curl http://localhost:3000/api/productos/analisis?id=3
```
