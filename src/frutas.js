const frutas = [
  {
    id: 1,
    nombre: 'Mango',
    precio: 3800,
    stock: 42,
    categoria: 'Dulce',
  },
  {
    id: 2,
    nombre: 'Limón',
    precio: 1200,
    stock: 65,
    categoria: 'Ácida',
  },
  {
    id: 3,
    nombre: 'Fresa',
    precio: 2500,
    stock: 54,
    categoria: 'Dulce',
  },
  {
    id: 4,
    nombre: 'Piña',
    precio: 4200,
    stock: 31,
    categoria: 'Ácida',
  },
  {
    id: 5,
    nombre: 'Uva',
    precio: 4600,
    stock: 28,
    categoria: 'Dulce',
  },
  {
    id: 6,
    nombre: 'Maracuyá',
    precio: 3900,
    stock: 37,
    categoria: 'Ácida',
  },
  {
    id: 7,
    nombre: 'Jengibre confitado',
    precio: 5200,
    stock: 19,
    categoria: 'Picante',
  },
  {
    id: 8,
    nombre: 'Sandía',
    precio: 7800,
    stock: 15,
    categoria: 'Dulce',
  },
];

function obtenerFrutasConPrecioMayorA4000(listaFrutas) {
  return listaFrutas.filter((fruta) => fruta.precio > 4000);
}

function calcularValorTotalInventario(listaFrutas) {
  return listaFrutas.reduce((total, fruta) => total + fruta.precio * fruta.stock, 0);
}

function encontrarFrutaConMasStock(listaFrutas) {
  return listaFrutas.reduce((frutaConMasStock, frutaActual) => {
    if (!frutaConMasStock || frutaActual.stock > frutaConMasStock.stock) {
      return frutaActual;
    }

    return frutaConMasStock;
  }, null);
}

function filtrarFrutasAcidas(listaFrutas) {
  return listaFrutas.filter((fruta) => fruta.categoria === 'Ácida');
}

function buscarFrutaPorId(listaFrutas, id) {
  return listaFrutas.find((fruta) => fruta.id === id) || null;
}

function agruparFrutasPorCategoria(listaFrutas) {
  return listaFrutas.reduce((agrupadas, fruta) => {
    agrupadas[fruta.categoria] = (agrupadas[fruta.categoria] || 0) + 1;
    return agrupadas;
  }, {});
}

module.exports = {
  frutas,
  obtenerFrutasConPrecioMayorA4000,
  calcularValorTotalInventario,
  encontrarFrutaConMasStock,
  filtrarFrutasAcidas,
  buscarFrutaPorId,
  agruparFrutasPorCategoria,
};