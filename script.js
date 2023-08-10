const imagenes = [
    {
        nombre: 'piedra',
        imagen: 'https://www.reino-minerales.es/wp-content/uploads/2019/12/pierre-steatite.jpg'
    },
    {
        nombre: 'papel',
        imagen: 'https://previews.123rf.com/images/cthoman/cthoman1508/cthoman150802417/43361924-una-ilustración-de-dibujos-animados-de-un-baile-de-papel-en-blanco.jpg'
    },
    {
        nombre: 'tijera',
        imagen: 'https://img.freepik.com/vector-premium/tijeras-icono-dibujos-animados-simple-vector-dibujos-animados-fondo-blanco_126267-8967.jpg?w=2000'
    }
];

const imgResultado = [
    {
        nombre: 'x',
        imagen: "https://img.freepik.com/vector-premium/simbolo-x-rojo_1102-4135.jpg?w=2000"
    },
    {
        nombre: 'tilde',
        imagen: "https://us.123rf.com/450wm/inueng/inueng1610/inueng161000004/67663749-ilustraci%C3%B3n-vectorial-casilla-de-verificaci%C3%B3n-verde-aislado-en-el-fondo-blanco.jpg?ver=6"
    }
]

/**
 * 
 * elige una posicion al azar en el array imagenes
 */


function cambiar_imagen(img, elemento) {
    var imagenCambiar = document.getElementById(elemento);
    imagenCambiar.src = img;
}



function OpcionUsuario() {
    var opciones = document.getElementById("opciones");
    return opciones.value;
}


function OpcionMaquina() {
    var numAzar = Math.floor(Math.random() * imagenes.length);
    return imagenes[numAzar].nombre;
}

/**
 * Compara la opcion elegida por el usuario y la opcion aleatoria de la maquina y 
 */
function compararOpciones(opcUsuario, opcMaquina) {
    if (opcUsuario === opcMaquina) {
        return "Empate";
    } else if (
        (opcUsuario === "piedra" && opcMaquina === "tijera") ||
        (opcUsuario === "papel" && opcMaquina === "piedra") ||
        (opcUsuario === "tijera" && opcMaquina === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

/**
 * inicia el juego, busca las imagenes, cambia las imagenes por la eleccion del usuario y muestra el resultado
 */
function pruebaSuerte() {
    var opcionUsuario = OpcionUsuario();
    var imgElegida = imagenes.find(imagen => imagen.nombre === opcionUsuario).imagen;
    cambiar_imagen(imgElegida, "imagenElegida");

    var opcionMaquina = OpcionMaquina();
    var imgMaquina = imagenes.find(imagen => imagen.nombre === opcionMaquina).imagen;
    cambiar_imagen(imgMaquina, "imagenMaquina");

    var resultado = compararOpciones(opcionUsuario, opcionMaquina);
mostrarResultado(resultado)
    alert( resultado);
}
function mostrarResultado(resultado){

    document.getElementById("resultado-jugadas").textContent = resultado;
}