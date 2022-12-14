"use strict";
exports.__esModule = true;
var helpers_1 = require("../helpers");
var ReadlineSync = require("readline-sync");
var Cliente_1 = require("./Cliente");
;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, listaClientes, idVeterinaria) {
        if (idVeterinaria == undefined) {
            this.idVeterinaria = (0, helpers_1.crearNumeroAleatoreo)(10000);
        }
        else {
            this.idVeterinaria = idVeterinaria;
        }
        ;
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaClientes = listaClientes;
    }
    ;
    Veterinaria.prototype.getIdVeterinaria = function () {
        return this.idVeterinaria;
    };
    ;
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    ;
    Veterinaria.prototype.getListaClientes = function () {
        return this.listaClientes;
    };
    ;
    // Métdodo para dar alta un cliente
    Veterinaria.prototype.altaCliente = function (listaMascota, listaSucursales) {
        var numVeterinaria = ReadlineSync.questionInt("Ingrese el id de la veterinaria: ");
        for (var i = 0; i < listaSucursales.length; i++) {
            if (numVeterinaria == listaSucursales[i].getIdVeterinaria()) {
                var idCliente = (0, helpers_1.crearNumeroAleatoreo)(10000);
                var i_1 = 0;
                for (i_1 = 0; i_1 < this.listaClientes.length; i_1++) {
                    if (this.listaClientes[i_1].getIdCliente() === idCliente) {
                        idCliente = (0, helpers_1.crearNumeroAleatoreo)(10000);
                        i_1 = 0;
                    }
                    ;
                }
                ;
                var nombre = ReadlineSync.question("Ingrese el nombre: ");
                var telefono = ReadlineSync.questionInt("Ingrese el telefono: ");
                var visitas = 1;
                //inserto el elemento de tipo cliente en el arreglo recibido
                var nuevoCliente = new Cliente_1["default"](numVeterinaria, nombre, telefono, visitas, listaMascota, idCliente);
                nuevoCliente.altaMascota();
                this.listaClientes.push(nuevoCliente);
                console.log("El cliente se dio de alta");
            }
            ;
        }
        ;
    };
    ;
    //Método dar de baja un cliente
    Veterinaria.prototype.bajaCliente = function (posicion) {
        this.listaClientes.splice(posicion, 1);
        console.log("El cliente ha sido eliminado");
    };
    ;
    //Método modificar un cliente
    Veterinaria.prototype.modificarCliente = function (posicion, listaMacotas) {
        var idCliente = this.listaClientes[posicion].getIdCliente();
        var numVeterinaria = this.listaClientes[posicion].getNumveterinaria();
        var nombre = ReadlineSync.question("Ingrese el nombre nuevo: ");
        var telefono = ReadlineSync.questionInt("Ingrese el nuevo telefono: ");
        var visita = this.listaClientes[posicion].getVisitas();
        var clienteActualizado = new Cliente_1["default"](numVeterinaria, nombre, telefono, visita, listaMacotas, idCliente);
        delete this.listaClientes[posicion];
        this.listaClientes[posicion] = clienteActualizado;
        console.log("Los datos fueron modificados");
    };
    ;
    // Método mostrar un cliente            
    Veterinaria.prototype.mostrarUnCliente = function () {
        var cliente = ReadlineSync.questionInt("ingrese el Id del cliente: ");
        for (var i = 0; i < this.listaClientes.length; i++) {
            if (cliente === this.listaClientes[i].getIdCliente()) {
                console.log("Los datos del cliente " + cliente + " son:  ");
                console.log("Id: " + this.listaClientes[i].getIdCliente());
                console.log("Nombre: " + this.listaClientes[i].getNombre());
                console.log("Teléfono: " + this.listaClientes[i].getTelefono());
                console.log("Visitas: " + this.listaClientes[i].getVisitas());
                console.log("Cliente VIP: " + this.listaClientes[i].getClienteVIP());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    //Método para mostra listado de clientes 
    Veterinaria.prototype.mostrarListadoCliente = function () {
        for (var i = 0; i < this.listaClientes.length; i++) {
            console.log("Id: " + this.listaClientes[i].getIdCliente());
            console.log("Nombre: " + this.listaClientes[i].getNombre());
            console.log("Teléfono: " + this.listaClientes[i].getTelefono());
            console.log("Visitas: " + this.listaClientes[i].getVisitas());
            console.log("Cliente VIP: " + this.listaClientes[i].getClienteVIP());
            (0, helpers_1.hacerLinea)();
        }
        ;
    };
    ;
    //Método mostrar cliente de una veterinaria en particular
    Veterinaria.prototype.mostrarClienteVeterinaria = function () {
        var veterinaria = ReadlineSync.questionInt("ingrese el Id de la veterinaria: ");
        (0, helpers_1.hacerLinea)();
        console.log("Los clientes de la veterinaria " + veterinaria + " son:  ");
        for (var i = 0; i < this.listaClientes.length; i++) {
            if (veterinaria === this.listaClientes[i].getNumveterinaria()) {
                console.log("Id: " + this.listaClientes[i].getIdCliente());
                console.log("Nombre: " + this.listaClientes[i].getNombre());
                console.log("Teléfono: " + this.listaClientes[i].getTelefono());
                console.log("Visitas: " + this.listaClientes[i].getVisitas());
                console.log("Cliente VIP: " + this.listaClientes[i].getClienteVIP());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    return Veterinaria;
}());
exports["default"] = Veterinaria;
;
