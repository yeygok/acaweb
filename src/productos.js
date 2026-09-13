const productos = [
  {
    id: 1,
    nombre: 'Laptop Lenovo',
    precio: 2800000,
    stock: 8,
    categoria: 'Tecnología',
  },
  {
    id: 2,
    nombre: 'Mouse Logitech',
    precio: 120000,
    stock: 25,
    categoria: 'Tecnología',
  },
  {
    id: 3,
    nombre: 'Teclado Mecánico',
    precio: 350000,
    stock: 12,
    categoria: 'Tecnología',
  },
  {
    id: 4,
    nombre: 'Silla Ergonómica',
    precio: 850000,
    stock: 5,
    categoria: 'Muebles',
  },
  {
    id: 5,
    nombre: 'Escritorio',
    precio: 1200000,
    stock: 7,
    categoria: 'Muebles',
  },
  {
    id: 6,
    nombre: 'Audífonos Sony',
    precio: 450000,
    stock: 18,
    categoria: 'Audio',
  },
  {
    id: 7,
    nombre: 'Micrófono USB',
    precio: 380000,
    stock: 10,
    categoria: 'Audio',
  },
  {
    id: 8,
    nombre: 'Monitor Samsung',
    precio: 950000,
    stock: 6,
    categoria: 'Tecnología',
  },
];

function obtenerProductosMayoresA100Mil(listaProductos) {
  return listaProductos.filter((producto) => producto.precio > 100000);
}

function calcularValorTotalInventario(listaProductos) {
  return listaProductos.reduce((total, producto) => total + producto.precio * producto.stock, 0);
}

function encontrarProductoConMasStock(listaProductos) {
  return listaProductos.reduce((productoConMasStock, productoActual) => {
    if (!productoConMasStock || productoActual.stock > productoConMasStock.stock) {
      return productoActual;
    }

    return productoConMasStock;
  }, null);
}

function filtrarProductosDeTecnologia(listaProductos) {
  return listaProductos.filter((producto) => producto.categoria === 'Tecnología');
}

function buscarProductoPorId(listaProductos, id) {
  return listaProductos.find((producto) => producto.id === id) || null;
}

function agruparProductosPorCategoria(listaProductos) {
  return listaProductos.reduce((agrupados, producto) => {
    agrupados[producto.categoria] = (agrupados[producto.categoria] || 0) + 1;
    return agrupados;
  }, {});
}

module.exports = {
  productos,
  obtenerProductosMayoresA100Mil,
  calcularValorTotalInventario,
  encontrarProductoConMasStock,
  filtrarProductosDeTecnologia,
  buscarProductoPorId,
  agruparProductosPorCategoria,
};