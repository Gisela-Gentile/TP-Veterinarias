"use strict";
exports.__esModule = true;
var helpers_1 = require("../helpers");
var ReadlineSync = require("readline-sync");
var Mascota_1 = require("./Mascota");
var Cliente = /** @class */ (function () {
    function Cliente(numVeterinaria, nombre, telefono, visitas, listaMascota, idCliente) {
        if (idCliente == undefined) {
            this.idCliente = (0, helpers_1.crearNumeroAleatoreo)(10000);
        }
        else {
            this.idCliente = idCliente;
        }
        ;
        this.nombre = nombre;
        this.telefono = telefono;
        this.listaMascota = listaMascota;
        this.visitas = visitas;
        this.clienteVIP = this.serVip();
        this.numVeterinaria = numVeterinaria;
    }
    ;
    Cliente.prototype.getNumveterinaria = function () {
        return this.numVeterinaria;
    };
    Cliente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    ;
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    ;
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascota;
    };
    ;
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    ;
    Cliente.prototype.getClienteVIP = function () {
        return this.clienteVIP;
    };
    ;
    Cliente.prototype.asignarVisita = function () {
        return this.visitas += 1;
    };
    ;
    Cliente.prototype.serVip = function () {
        if (this.visitas >= 5) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    ;
    //Método alta mascota para cuando se carga un nuevo cliente
    Cliente.prototype.altaMascota = function () {
        var idMascota = this.getIdCliente();
        var nombre = ReadlineSync.question("Ingrese el nombre de la mascota: ");
        var clase = ReadlineSync.question("Ingrese el tipo de mascota: ");
        var nuevaMascota = new Mascota_1["default"](idMascota, nombre, clase);
        //inserto el elemento de tipo Mascota en el arreglo recibido
        this.listaMascota.push(nuevaMascota);
        console.log("La mascota se dio de alta");
    };
    //Método agregar mascota con id de cliente   
    Cliente.prototype.agregarMascotaCliente = function (listaClientes, listaMascota) {
        var cliente = ReadlineSync.questionInt('Ingrese el id del cliente:');
        var i = 0;
        for (i = 0; i < listaClientes.length; i++) {
            if (cliente == listaClientes[i].getIdCliente()) {
                var idMascota = listaClientes[i].getIdCliente();
                var nombre = ReadlineSync.question("Ingrese el nombre de la mascota: ");
                var clase = ReadlineSync.question("Ingrese el tipo de mascota: ");
                var nuevaMascota = new Mascota_1["default"](idMascota, nombre, clase);
                //inserto el elemento de tipo Mascota en el arreglo recibido
                listaMascota.push(nuevaMascota);
                console.log("La mascota se dio de alta");
            }
            ;
        }
        ;
    };
    ;
    //Método para "borrar" una mascota​
    Cliente.prototype.bajaMascota = function (posicion) {
        this.listaMascota.splice(posicion, 1);
        console.log("La mascota ha sido eliminada");
    };
    ;
    //Método para modificar datos de una mascota​
    Cliente.prototype.modificarMascota = function (posicion) {
        var idMascota = this.listaMascota[posicion].getIdMascota();
        var nombre = ReadlineSync.question("Ingrese el nombre nuevo: ");
        var clase = ReadlineSync.question("Ingrese la nueva clase: ");
        var mascotaActualizada = new Mascota_1["default"](idMascota, nombre, clase);
        delete this.listaMascota[posicion];
        this.listaMascota[posicion] = mascotaActualizada;
        console.log("Los datos fueron modificados");
    };
    // Método mostrar una mascota           
    Cliente.prototype.mostrarUnaMascota = function () {
        var mascota = ReadlineSync.questionInt("ingrese el Id del cliente: ");
        (0, helpers_1.hacerLinea)();
        console.log("Los datos de la mascota " + mascota + " son:  ");
        for (var i = 0; i < this.listaMascota.length; i++) {
            if (mascota === this.listaMascota[i].getIdMascota()) {
                console.log("Id: " + this.listaMascota[i].getIdMascota());
                console.log("Nombre: " + this.listaMascota[i].getNombre());
                console.log("Clase: " + this.listaMascota[i].getClase());
                console.log("Especie: " + this.listaMascota[i].getEspecie());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    //Método mostrar mascota de un cliente en particular
    Cliente.prototype.mostrarMascotaCliente = function () {
        var cliente = ReadlineSync.questionInt("ingrese el Id del cliente: ");
        console.log("Las mascostas del cliente " + cliente + " son:  ");
        for (var i = 0; i < this.listaMascota.length; i++) {
            if (cliente === this.listaMascota[i].getIdMascota()) {
                console.log("Id: " + this.listaMascota[i].getIdMascota());
                console.log("Nombre: " + this.listaMascota[i].getNombre());
                console.log("Clase: " + this.listaMascota[i].getClase());
                console.log("Especie: " + this.listaMascota[i].getEspecie());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    //Método mostrar listado mascota
    Cliente.prototype.mostrarListadoMascota = function () {
        for (var i = 0; i < this.listaMascota.length; i++) {
            console.log("Id: " + this.listaMascota[i].getIdMascota());
            console.log("Nombre: " + this.listaMascota[i].getNombre());
            console.log("Clase: " + this.listaMascota[i].getClase());
            console.log("Especie: " + this.listaMascota[i].getEspecie());
            (0, helpers_1.hacerLinea)();
        }
        ;
    };
    ;
    return Cliente;
}());
exports["default"] = Cliente;
;
