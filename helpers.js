"use strict";
exports.__esModule = true;
exports.mostrarMenu = exports.consultarOtraOpcion = exports.mostrarMenuMascota = exports.consultarOtraOpcion4 = exports.mostrarMenuCliente = exports.consultarOtraOpcion3 = exports.mostrarMenuProveedor = exports.consultarOtraOpcion2 = exports.mostrarMenuVeterinaria = exports.consultarOtraOpcion1 = exports.obtenerPosicionMascota = exports.cargarMascotas = exports.obtenerPosicionCliente = exports.cargarCliente = exports.obtenerPosicionProveedor = exports.cargarProveedor = exports.obtenerPosicionVeterinaria = exports.cargarVeterinaria = exports.hacerLinea = exports.crearNumeroAleatoreo = void 0;
var RedVeterinaria_1 = require("./class/RedVeterinaria");
var Veterinaria_1 = require("./class/Veterinaria");
var Proveedor_1 = require("./class/Proveedor");
var Cliente_1 = require("./class/Cliente");
var Mascota_1 = require("./class/Mascota");
var GestorDeArchivos_1 = require("./class/GestorDeArchivos");
var ReadlineSync = require("readline-sync");
function crearNumeroAleatoreo(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumeroAleatoreo = crearNumeroAleatoreo;
;
function hacerLinea() {
    var linea = ("-");
    for (var i = 0; i < 100; i++) {
        linea += "-";
    }
    ;
    console.log(linea);
}
exports.hacerLinea = hacerLinea;
;
function cargarVeterinaria(veterinaria, arrayVeterinaria, listaClientes) {
    var propiedadVeterinaria = veterinaria.split(',');
    var idVeterinaria = propiedadVeterinaria[0];
    var nombre = propiedadVeterinaria[1];
    var direccion = propiedadVeterinaria[2];
    var nuevaVeterinaria = new Veterinaria_1["default"](nombre, direccion, listaClientes, Number(idVeterinaria));
    arrayVeterinaria.push(nuevaVeterinaria);
}
exports.cargarVeterinaria = cargarVeterinaria;
;
var obtenerPosicionVeterinaria = function (arrayVeterinaria) {
    var esta = false;
    var posicion = 0;
    var ubicacion = 0;
    var id = ReadlineSync.questionInt("Ingrese el Id de la Veterinaria : ");
    for (var i = 0; i < arrayVeterinaria.length; i++) {
        if (arrayVeterinaria[i].getIdVeterinaria() === Number(id)) {
            esta = true;
            ubicacion = i;
        }
        ;
    }
    ;
    if (esta == true) {
        posicion = ubicacion;
    }
    else {
        throw new Error("El Id no existe");
    }
    ;
    return posicion;
};
exports.obtenerPosicionVeterinaria = obtenerPosicionVeterinaria;
function cargarProveedor(proveedor, arrayProveedor) {
    var propiedadProveedor = proveedor.split(',');
    var numVeterinaria = propiedadProveedor[0];
    var idProveedor = propiedadProveedor[1];
    var nombre = propiedadProveedor[2];
    var telefono = propiedadProveedor[3];
    var nuevoProveedor = new Proveedor_1["default"](Number(numVeterinaria), nombre, Number(telefono), Number(idProveedor));
    arrayProveedor.push(nuevoProveedor);
}
exports.cargarProveedor = cargarProveedor;
;
var obtenerPosicionProveedor = function (arrayProveedor) {
    var esta = false;
    var posicion = 0;
    var ubicacion = 0;
    var id = ReadlineSync.questionInt("Ingrese el Id del proveedor : ");
    for (var i = 0; i < arrayProveedor.length; i++) {
        if (arrayProveedor[i].getIdProveedor() === Number(id)) {
            esta = true;
            ubicacion = i;
        }
        ;
    }
    ;
    if (esta == true) {
        posicion = ubicacion;
    }
    else {
        throw new Error("El Id no existe");
    }
    ;
    return posicion;
};
exports.obtenerPosicionProveedor = obtenerPosicionProveedor;
function cargarCliente(cliente, arrayCliente, listaDeMascotas) {
    var propiedadCliente = cliente.split(',');
    var numVeterinaria = propiedadCliente[0];
    var idCliente = propiedadCliente[1];
    var nombre = propiedadCliente[2];
    var telefono = propiedadCliente[3];
    var visitas = propiedadCliente[4];
    var nuevoCliente = new Cliente_1["default"](Number(numVeterinaria), nombre, Number(telefono), Number(visitas), listaDeMascotas, Number(idCliente));
    arrayCliente.push(nuevoCliente);
}
exports.cargarCliente = cargarCliente;
;
var obtenerPosicionCliente = function (arrayCliente) {
    var esta = false;
    var posicion = 0;
    var ubicacion = 0;
    var id = ReadlineSync.questionInt("Ingrese el Id del cliente : ");
    for (var i = 0; i < arrayCliente.length; i++) {
        if (arrayCliente[i].getIdCliente() === Number(id)) {
            esta = true;
            ubicacion = i;
        }
        ;
    }
    ;
    if (esta == true) {
        posicion = ubicacion;
    }
    else {
        throw new Error("El Id no existe");
    }
    ;
    return posicion;
};
exports.obtenerPosicionCliente = obtenerPosicionCliente;
function cargarMascotas(mascota, arrayMascotas) {
    var propiedadMascota = mascota.split(',');
    var idMascota = propiedadMascota[0];
    var nombre = propiedadMascota[1];
    var clase = propiedadMascota[2];
    var nuevaMascota = new Mascota_1["default"](Number(idMascota), nombre, clase);
    arrayMascotas.push(nuevaMascota);
}
exports.cargarMascotas = cargarMascotas;
;
var obtenerPosicionMascota = function (arrayMascota) {
    var esta = false;
    var posicion = 0;
    var ubicacion = 0;
    var id = ReadlineSync.questionInt("Ingrese el Id de la mascota: ");
    var nombre = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    for (var i = 0; i < arrayMascota.length; i++) {
        if (arrayMascota[i].getIdMascota() === Number(id) && arrayMascota[i].getNombre().toLowerCase() === nombre.toLowerCase()) {
            esta = true;
            ubicacion = i;
        }
        ;
    }
    ;
    if (esta == true) {
        posicion = ubicacion;
    }
    else {
        throw new Error("El Id no existe");
    }
    ;
    return posicion;
};
exports.obtenerPosicionMascota = obtenerPosicionMascota;
//Iniciar programa
// Cargar mascota
var datosMascotas = new GestorDeArchivos_1["default"]("./textos/mascota.txt");
var listaDeMacotas = [];
for (var i = 0; i < datosMascotas.getArregloString().length; i++) {
    cargarMascotas(datosMascotas.getArregloString()[i], listaDeMacotas);
}
;
// Cargar cliente
var datosClientes = new GestorDeArchivos_1["default"]("./textos/cliente.txt");
var listaDeClientes = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    cargarCliente(datosClientes.getArregloString()[i], listaDeClientes, listaDeMacotas);
}
;
//cargar datos veterinaria
var datosVeterinaria = new GestorDeArchivos_1["default"]("./textos/veterinaria.txt");
var listaDeVeterinarias = [];
for (var i = 0; i < datosVeterinaria.getArregloString().length; i++) {
    cargarVeterinaria(datosVeterinaria.getArregloString()[i], listaDeVeterinarias, listaDeClientes);
}
;
//cargar datos proveedor
var datosProveedor = new GestorDeArchivos_1["default"]("./textos/proveedor.txt");
var listaDeProveedores = [];
for (var i = 0; i < datosProveedor.getArregloString().length; i++) {
    cargarProveedor(datosProveedor.getArregloString()[i], listaDeProveedores);
}
;
var redVeterinaria = new RedVeterinaria_1["default"](listaDeProveedores, listaDeVeterinarias);
var consultarOtraOpcion1 = function () {
    console.log("Desea realizar otra consulta sobre veterinarias");
    var consulta = ReadlineSync.question("SI/NO?:  ");
    if (consulta.toLowerCase() == "si") {
        (0, exports.mostrarMenuVeterinaria)();
    }
    ;
};
exports.consultarOtraOpcion1 = consultarOtraOpcion1;
var mostrarMenuVeterinaria = function () {
    var menuVeterinaria;
    console.log("MENU VETERINARIA");
    console.log("1- Alta");
    console.log("2- Modificar");
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    console.log("6- Mostrar clientes de una veterinaria");
    console.log("7- Mostrar proveedores de una veterinaria");
    menuVeterinaria = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menuVeterinaria) {
        case 1:
            hacerLinea();
            console.log("Dar de alta una veterinaria");
            redVeterinaria.altaVeterinaria(listaDeClientes);
            hacerLinea();
            (0, exports.consultarOtraOpcion1)();
            break;
        case 2:
            hacerLinea();
            try {
                console.log("Modicar veterinaria");
                var posicion = (0, exports.obtenerPosicionVeterinaria)(listaDeVeterinarias);
                redVeterinaria.modificarVeterinaria(posicion, listaDeClientes);
                hacerLinea();
                (0, exports.consultarOtraOpcion1)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion1)();
            }
            break;
        case 3:
            hacerLinea();
            try {
                console.log("Dar de baja");
                var ubicacion = (0, exports.obtenerPosicionVeterinaria)(listaDeVeterinarias);
                redVeterinaria.bajaVeterinaria(ubicacion);
                hacerLinea();
                (0, exports.consultarOtraOpcion1)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion1)();
            }
            break;
        case 4:
            hacerLinea();
            console.log("consultar por una veterinaria");
            redVeterinaria.mostrarUnaVeterinaria();
            (0, exports.consultarOtraOpcion1)();
            hacerLinea();
            break;
        case 5:
            hacerLinea();
            console.log("Listado de veterinarias");
            redVeterinaria.mostrarListadoVeterinaria();
            (0, exports.consultarOtraOpcion1)();
            break;
        case 6:
            hacerLinea();
            console.log("Mostrar clientes de una veterinaria en particular");
            hacerLinea();
            listaDeVeterinarias[0].mostrarClienteVeterinaria();
            (0, exports.consultarOtraOpcion1)();
            break;
        case 7:
            hacerLinea();
            console.log("Mostrar proveedores de una veterinaria en particular");
            redVeterinaria.mostrarProveedorVeterinaria();
            (0, exports.consultarOtraOpcion1)();
            break;
    }
    ;
};
exports.mostrarMenuVeterinaria = mostrarMenuVeterinaria;
var consultarOtraOpcion2 = function () {
    console.log("Desea realizar otra consulta sobre proveedores");
    var consulta = ReadlineSync.question("SI/NO?:  ");
    if (consulta.toLowerCase() == "si") {
        (0, exports.mostrarMenuProveedor)();
    }
    ;
};
exports.consultarOtraOpcion2 = consultarOtraOpcion2;
var mostrarMenuProveedor = function () {
    var menuProveedor;
    hacerLinea();
    console.log("MENU PROVEEDORES");
    console.log("1- Alta");
    console.log("2- Modificar");
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    menuProveedor = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menuProveedor) {
        case 1:
            hacerLinea();
            console.log("Dar de alta un proveedor");
            redVeterinaria.altaProveedor(listaDeVeterinarias);
            hacerLinea();
            (0, exports.consultarOtraOpcion2)();
            break;
        case 2:
            hacerLinea();
            try {
                console.log("Modicar proveedor");
                var posicion = (0, exports.obtenerPosicionProveedor)(listaDeProveedores);
                redVeterinaria.modificarProveedor(posicion);
                hacerLinea();
                (0, exports.consultarOtraOpcion2)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion2)();
            }
            ;
            break;
        case 3:
            hacerLinea();
            try {
                console.log("Dar de baja");
                var ubicacion = (0, exports.obtenerPosicionProveedor)(listaDeProveedores);
                redVeterinaria.bajaProveedor(ubicacion);
                hacerLinea();
                (0, exports.consultarOtraOpcion2)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion2)();
            }
            ;
            break;
        case 4:
            hacerLinea();
            console.log("consultar por un proveedor");
            redVeterinaria.mostrarUnProveedor();
            (0, exports.consultarOtraOpcion2)();
            break;
        case 5:
            hacerLinea();
            console.log("Listado de proveedores");
            redVeterinaria.mostrarListadoProveedores();
            (0, exports.consultarOtraOpcion2)();
            break;
    }
    ;
};
exports.mostrarMenuProveedor = mostrarMenuProveedor;
var consultarOtraOpcion3 = function () {
    console.log("Desea realizar otra consulta sobre clientes");
    var consulta = ReadlineSync.question("SI/NO?:  ");
    if (consulta.toLowerCase() == "si") {
        (0, exports.mostrarMenuCliente)();
    }
    ;
};
exports.consultarOtraOpcion3 = consultarOtraOpcion3;
var mostrarMenuCliente = function () {
    var menuCliente;
    hacerLinea();
    console.log("MENU CLIENTES");
    console.log("1- Alta");
    console.log("2- Modificar");
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    console.log("6- Registrar visita");
    console.log("7- Mostrar mascotas de un cliente");
    menuCliente = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menuCliente) {
        case 1:
            hacerLinea();
            console.log("Dar de alta un cliente");
            listaDeVeterinarias[0].altaCliente(listaDeMacotas, listaDeVeterinarias);
            hacerLinea();
            (0, exports.consultarOtraOpcion3)();
            break;
        case 2:
            hacerLinea();
            try {
                console.log("Modicar cliente");
                var posicion = (0, exports.obtenerPosicionCliente)(listaDeClientes);
                listaDeVeterinarias[0].modificarCliente(posicion, listaDeMacotas);
                hacerLinea();
                (0, exports.consultarOtraOpcion3)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion3)();
            }
            break;
        case 3:
            hacerLinea();
            try {
                console.log("Dar de baja");
                var ubicacion = (0, exports.obtenerPosicionCliente)(listaDeClientes);
                listaDeVeterinarias[0].bajaCliente(ubicacion);
                hacerLinea();
                (0, exports.consultarOtraOpcion3)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion3)();
            }
            ;
            break;
        case 4:
            hacerLinea();
            console.log("consultar por un Cliente");
            listaDeVeterinarias[0].mostrarUnCliente();
            (0, exports.consultarOtraOpcion3)();
            break;
        case 5:
            hacerLinea();
            console.log("Listado de clientes");
            listaDeVeterinarias[0].mostrarListadoCliente();
            (0, exports.consultarOtraOpcion3)();
            break;
        case 6:
            hacerLinea();
            try {
                console.log("Registrar visita");
                var posicion4 = (0, exports.obtenerPosicionCliente)(listaDeClientes);
                listaDeClientes[posicion4].asignarVisita();
                console.log("Se regitro la visita");
                hacerLinea();
                (0, exports.consultarOtraOpcion3)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion3)();
            }
            ;
            break;
        case 7:
            hacerLinea();
            console.log("Mostrar mascotas de un cliente");
            listaDeClientes[0].mostrarMascotaCliente();
            (0, exports.consultarOtraOpcion3)();
            break;
    }
    ;
};
exports.mostrarMenuCliente = mostrarMenuCliente;
var consultarOtraOpcion4 = function () {
    console.log("Desea realizar otra consulta sobre mascotas");
    var consulta = ReadlineSync.question("SI/NO?:  ");
    if (consulta.toLowerCase() == "si") {
        (0, exports.mostrarMenuMascota)();
    }
    ;
};
exports.consultarOtraOpcion4 = consultarOtraOpcion4;
var mostrarMenuMascota = function () {
    var menuMascota;
    hacerLinea();
    console.log("MENU MASCOTAS");
    console.log("1- Alta");
    console.log("2- Modificar");
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    menuMascota = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menuMascota) {
        case 1:
            hacerLinea();
            console.log("Dar de alta una mascota");
            listaDeClientes[0].agregarMascotaCliente(listaDeClientes, listaDeMacotas);
            hacerLinea();
            (0, exports.consultarOtraOpcion4)();
            break;
        case 2:
            hacerLinea();
            try {
                console.log("Modicar mascota");
                var posicion = (0, exports.obtenerPosicionMascota)(listaDeMacotas);
                listaDeClientes[0].modificarMascota(posicion);
                hacerLinea();
                (0, exports.consultarOtraOpcion4)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion4)();
            }
            ;
            break;
        case 3:
            hacerLinea();
            try {
                console.log("Dar de baja");
                var ubicacion = (0, exports.obtenerPosicionMascota)(listaDeMacotas);
                listaDeClientes[0].bajaMascota(ubicacion);
                hacerLinea();
                (0, exports.consultarOtraOpcion4)();
            }
            catch (error) {
                console.log("Ocurrió un error: " + error.message);
                (0, exports.consultarOtraOpcion4)();
            }
            ;
            break;
        case 4:
            hacerLinea();
            console.log("consultar por las mascota de un cliente");
            listaDeClientes[0].mostrarUnaMascota();
            (0, exports.consultarOtraOpcion4)();
            break;
        case 5:
            hacerLinea();
            console.log("Listado de mascotas");
            listaDeClientes[0].mostrarListadoMascota();
            (0, exports.consultarOtraOpcion4)();
            break;
    }
    ;
};
exports.mostrarMenuMascota = mostrarMenuMascota;
var consultarOtraOpcion = function () {
    console.log("Desea realizar otra consulta en el menu principal");
    var consulta = ReadlineSync.question("SI/NO?:  ");
    hacerLinea();
    if (consulta.toLowerCase() == "si") {
        (0, exports.mostrarMenu)();
        hacerLinea();
    }
    ;
};
exports.consultarOtraOpcion = consultarOtraOpcion;
var mostrarMenu = function () {
    var menu = 0;
    hacerLinea();
    redVeterinaria.mostrarDatosRed();
    hacerLinea();
    console.log("MENU");
    console.log("1- Veterinarias");
    console.log("2- Proveedores");
    console.log("3- Clientes");
    console.log("4- Mascotas");
    menu = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menu) {
        case 1:
            (0, exports.mostrarMenuVeterinaria)();
            (0, exports.consultarOtraOpcion)();
            break;
        case 2:
            (0, exports.mostrarMenuProveedor)();
            (0, exports.consultarOtraOpcion)();
            break;
        case 3:
            (0, exports.mostrarMenuCliente)();
            (0, exports.consultarOtraOpcion)();
            break;
        case 4:
            (0, exports.mostrarMenuMascota)();
            (0, exports.consultarOtraOpcion)();
            break;
    }
    ;
};
exports.mostrarMenu = mostrarMenu;
