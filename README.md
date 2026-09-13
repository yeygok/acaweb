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

## Ejemplos

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/info
```
