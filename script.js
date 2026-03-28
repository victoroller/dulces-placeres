// ==================== MENÚ HAMBURGUESA ====================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ==================== PRODUCTOS ====================
// 🔴 IMPORTANTE: Reemplazá con tus productos reales
// Cada producto necesita: nombre, descripcion, precio, categoria, imagen
// Categorías disponibles: "huevos", "conejos", "chupetines", "cajas"

const productos = [
    // HUEVOS
    { id: 1, nombre: "Huevo chico en estuche", descripcion: "Con confites, rocklets y gomitas", precio: "$9.500", categoria: "huevos", imagen: "imagenes/huevo chico en estuche.jpg" },
    { id: 2, nombre: "Huevo mediano Copa del Mundo", descripcion: "Con confites, rocklets y gomitas", precio: "$18.000", categoria: "huevos", imagen: "imagenes/huevo mediano negro copa mundo.jpg" },
    { id: 3, nombre: "Huevo mediano Corazones dorados", descripcion: "Con confites, rocklets y gomitas", precio: "$19.500", categoria: "huevos", imagen: "imagenes/huevo mediano corazones dorados.jpg" },
    { id: 4, nombre: "Huevo chico con figuras impresas", descripcion: "Con confites, rocklets y gomitas", precio: "$9.000", categoria: "huevos", imagen: "imagenes/huevo chico river.jpg" },
    { id: 5, nombre: "Huevo Plano chico solido bco", descripcion: "Cubierto  de confites y conejo", precio: "$ 6.000", categoria: "huevos", imagen: "imagenes/huevo plano chico solido blanco.jpg" },
    { id: 6, nombre: "Huevo Plano Oreo", descripcion: "Marmolado Con Oreos ", precio: "$ 8.500", categoria: "huevos", imagen: "imagenes/huevo plano oreo.jpg" },
    { id: 7, nombre: "Huevo Plano Pistacho", descripcion: "Relleno con crema de  pistacho", precio: "$ 13.500", categoria: "huevos", imagen: "imagenes/huevo plano relleno pistacho.jpg" },
    { id: 8, nombre: "Huevo Plano Dulce de Leche", descripcion: "Relleno de dulce de leche", precio: "$ 13.500", categoria: "huevos", imagen: "imagenes/huevo plano relleno ddl.jpg" },
    { id: 9, nombre: "Huevo Plano Marroc", descripcion: "Cubierto de pedacitos de marroc", precio: "$ 9.500", categoria: "huevos", imagen: "imagenes/huevo plano marroc.jpg" },


    
    // CONEJOS
    { id: 10, nombre: "Conejo Canasta", descripcion: "Conejo hueco con relleno de confites, rocklets y gomitas", precio: "$8.500", categoria: "conejos", imagen: "imagenes/conejo canasta.jpg" },
    { id: 11, nombre: "Conejo Futurista", descripcion: "Conejo hueco con relleno de confites, rocklets y gomitas", precio: "$10.000", categoria: "conejos", imagen: "imagenes/conejo nuevo.jpg" },
    { id: 12, nombre: "Conejo oreo Mujer", descripcion: "Relleno con oreo", precio: "$ 4.000", categoria: "conejos", imagen: "imagenes/conejo oreo mujer.jpg" },
    { id: 13, nombre: "Conejo oreo Varon", descripcion: "Relleno con oreo", precio: "$ 4.000", categoria: "conejos", imagen: "imagenes/conejo oreo varon.jpg" },
    { id: 14, nombre: "Conejo chico con DDL", descripcion: "Relleno de dulce de leche", precio: "4.000", categoria: "conejos", imagen: "imagenes/conejos chicos con ddl.jpg" },
   
    
    // CHUPETINES
    { id: 15, nombre: "Chupetín chico con personajes", descripcion: "Paleta de chocolate con personajes comestibles", precio: "$2.000", categoria: "chupetines", imagen: "imagenes/chupetin chico.jpg" },
    { id: 16, nombre: "Chupetín chocolate varios ", descripcion: "Chocolate moldeado con figuras de conejos", precio: "$3.000", categoria: "chupetines", imagen: "imagenes/chupetines chocolate.jpg" },
    { id: 17, nombre: "Chupetin grande Cars", descripcion: "Figura comestible de Cars", precio: "$3.000", categoria: "chupetines", imagen: "imagenes/chupetin grande cars.jpg" },
    { id: 18, nombre: "Chupetin grande Guerreras Kpop", descripcion: "Figura comestible de las Guerreras  Kpop", precio: "$3.000", categoria: "chupetines", imagen: "imagenes/chupetin grande kpop.jpg" },
    { id: 19, nombre: "Chupetin grande Optimus Prime", descripcion: "Figura comestible de Optimus Prime", precio: "$3.000", categoria: "chupetines", imagen: "imagenes/chupetin grande optimus.jpg" },
    { id: 20, nombre: "Chupetines grandes Varios", descripcion: "Figuras comestibles", precio: "$3.000", categoria: "chupetines", imagen: "imagenes/chupetines grandes varios.jpg" },
    
    // CAJAS Y BOMBONES
    { id: 21, nombre: "Caja temática Pascua Varón", descripcion: "Contiene Conejo con oreo y 5 bombones de dulce de leche", precio: "$9.000", categoria: "cajas", imagen: "imagenes/caja abierta varon.jpg" },
    { id: 22, nombre: "Caja temática Pascua Mujer", descripcion: "Contiene Conejo con oreo y 5 bombones de dulce de leche", precio: "$9.000", categoria: "cajas", imagen: "imagenes/caja abierta mujer.jpg" },
    { id: 23, nombre: "Novedoso Iphone de Chocolate", descripcion: "Stiker pantalla comestible relleno de dulce de leche o solido", precio: "$9.500", categoria: "cajas", imagen: "imagenes/iphone chocolate.jpg" },
    { id: 24, nombre: "Bolsa Estuche Pascua", descripcion: "Contiene bolsa con chocolates multicolores de formas alusivas a Pascua", precio: "$8.000", categoria: "cajas", imagen: "imagenes/estuches.jpg" },
    { id: 25, nombre: "Caja impresa Pascua", descripcion: "Caja de 10x10 con 12 bombones de ddl ", precio: "$9.000", categoria: "cajas", imagen: "imagenes/caja impresa.jpg" },
    { id: 26, nombre: "Caja Corazon ", descripcion: "Caja con figura oreo y 8 bombones de ddl ", precio: "$9.000", categoria: "cajas", imagen: "imagenes/caja corazon.jpg" },
];

// ==================== RENDER DE PRODUCTOS CON FILTRO ====================
const grid = document.getElementById('grid-productos');
let categoriaActiva = 'todos';

function renderProductos() {
    if (!grid) return;
    
    const productosFiltrados = categoriaActiva === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoriaActiva);
    
    if (productosFiltrados.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay productos en esta categoría. ¡Consultanos por WhatsApp!</p>';
        return;
    }
    
    grid.innerHTML = productosFiltrados.map(producto => `
        <div class="producto-card" data-categoria="${producto.categoria}">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen" onerror="this.src='https://placehold.co/300x200?text=Foto+pronto'">
            <div class="producto-info">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <p class="producto-precio">${producto.precio}</p>
                <a href="https://wa.me/5493854388885?text=Hola!%20Quisiera%20consultar%20por%20${encodeURIComponent(producto.nombre)}%20🍫" target="_blank" class="btn-producto">
                    <i class="fab fa-whatsapp"></i> Consultar
                </a>
            </div>
        </div>
    `).join('');
}

// ==================== FILTROS ====================
const filtrosBtns = document.querySelectorAll('.filtro-btn');
if (filtrosBtns.length) {
    filtrosBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filtrosBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            categoriaActiva = btn.getAttribute('data-categoria');
            renderProductos();
        });
    });
}

// Inicializar
renderProductos();
