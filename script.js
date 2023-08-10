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

function numAzar() {
    var numAzar = Math.floor(Math.random() * imagenes.length);
    return imagenes[numAzar];
}

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

function pruebaSuerte() {
    var opcionUsuario = OpcionUsuario();
    var imgElegida = imagenes.find(imagen => imagen.nombre === opcionUsuario).imagen;
    cambiar_imagen(imgElegida, "imagenElegida");

    var opcionMaquina = OpcionMaquina();
    var imgMaquina = imagenes.find(imagen => imagen.nombre === opcionMaquina).imagen;
    cambiar_imagen(imgMaquina, "imagenMaquina");

    var resultado = compararOpciones(opcionUsuario, opcionMaquina);

    alert("Opción de la máquina: " + opcionMaquina + "\n" + resultado);
}