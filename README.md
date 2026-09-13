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

## Scripts de prueba

- `npm run check:root` - Prueba la ruta principal.
- `npm run check:health` - Prueba el estado del servidor.
- `npm run check:info` - Prueba la ruta de información.
- `npm run check:frutas` - Lista todas las frutas.
- `npm run check:fruta` - Busca la fruta con id 3.
- `npm run check:analisis` - Ejecuta el análisis completo del catálogo.
- `npm run check:all` - Ejecuta todas las pruebas en secuencia.

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
