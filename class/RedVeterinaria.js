"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var helpers_1 = require("../helpers");
var Veterinaria_1 = require("./Veterinaria");
var Proveedor_1 = require("./Proveedor");
;
var RedVeterinaria = /** @class */ (function () {
    function RedVeterinaria(listaProveedores, listaSucursales) {
        this.id = 1;
        this.nombre = "The pest";
        this.direccion = "San Martin 623";
        this.listaProveedores = listaProveedores;
        this.listaSucursales = listaSucursales;
    }
    ;
    RedVeterinaria.prototype.getId = function () {
        return this.id;
    };
    ;
    RedVeterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    RedVeterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    ;
    RedVeterinaria.prototype.getListaProveedores = function () {
        return this.listaProveedores;
    };
    ;
    RedVeterinaria.prototype.getListaSucursales = function () {
        return this.listaSucursales;
    };
    ;
    // Método dar alta una veterinaria
    RedVeterinaria.prototype.altaVeterinaria = function (listaClientes) {
        var idVeterinaria = (0, helpers_1.crearNumeroAleatoreo)(10000);
        var i = 0;
        for (i = 0; i < this.listaSucursales.length; i++) {
            if (this.listaSucursales[i].getIdVeterinaria() === idVeterinaria) {
                idVeterinaria = (0, helpers_1.crearNumeroAleatoreo)(10000);
                i = 0;
            }
            ;
        }
        ;
        var nombre = ReadlineSync.question("Ingrese el nombre: ");
        var direccion = ReadlineSync.question("Ingrese la direccion: ");
        var nuevaVeterinaria = new Veterinaria_1["default"](nombre, direccion, listaClientes, idVeterinaria);
        //inserto el elemento de tipo Veterinaria en el arreglo recibido        
        this.listaSucursales.push(nuevaVeterinaria);
        console.log("la veterinaria se dio de alta");
    };
    ;
    //Método para "borrar" una sucursal
    RedVeterinaria.prototype.bajaVeterinaria = function (posicion) {
        this.listaSucursales.splice(posicion, 1);
        console.log("La veterinaria ha sido eliminada");
    };
    ;
    //Método para modificar datos de una veterinaria
    RedVeterinaria.prototype.modificarVeterinaria = function (posicion, listaClientes) {
        var idVeterinaria = this.listaSucursales[posicion].getIdVeterinaria();
        var nombre = ReadlineSync.question("Ingrese el nombre nuevo: ");
        var direccion = ReadlineSync.question("Ingrese la nueva direccion: ");
        var veterinariaActualizada = new Veterinaria_1["default"](nombre, direccion, listaClientes, idVeterinaria);
        delete this.listaSucursales[posicion];
        this.listaSucursales[posicion] = veterinariaActualizada;
        console.log("Los datos fueron modificados");
    };
    ;
    //Método mostrar una veterinaria
    RedVeterinaria.prototype.mostrarUnaVeterinaria = function () {
        var veterinaria = ReadlineSync.questionInt("ingrese el Id de la veterinaria: ");
        for (var i = 0; i < this.listaSucursales.length; i++) {
            if (veterinaria === this.listaSucursales[i].getIdVeterinaria()) {
                console.log("Los datos de la veterinaria " + veterinaria + " son:  ");
                console.log("Id: " + this.listaSucursales[i].getIdVeterinaria());
                console.log("Nombre: " + this.listaSucursales[i].getNombre());
                console.log("Direccion: " + this.listaSucursales[i].getDireccion());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    //Método mostrar listado veterinarias
    RedVeterinaria.prototype.mostrarListadoVeterinaria = function () {
        for (var i = 0; i < this.listaSucursales.length; i++) {
            console.log("Id: " + this.listaSucursales[i].getIdVeterinaria());
            console.log("Nombre: " + this.listaSucursales[i].getNombre());
            console.log("Direccion: " + this.listaSucursales[i].getDireccion());
            (0, helpers_1.hacerLinea)();
        }
        ;
    };
    ;
    // método dar alta un proveedor
    RedVeterinaria.prototype.altaProveedor = function (listaSucursales) {
        var numVeterinaria = ReadlineSync.questionInt("Ingrese el id de la veterinaria: ");
        for (var i = 0; i < listaSucursales.length; i++) {
            if (numVeterinaria === listaSucursales[i].getIdVeterinaria()) {
                var idProveedor = (0, helpers_1.crearNumeroAleatoreo)(10000);
                var i_1 = 0;
                for (i_1 = 0; i_1 < this.listaProveedores.length; i_1++) {
                    if (this.listaProveedores[i_1].getIdProveedor() === idProveedor) {
                        idProveedor = (0, helpers_1.crearNumeroAleatoreo)(10000);
                        i_1 = 0;
                    }
                    ;
                }
                ;
                var nombre = ReadlineSync.question("Ingrese el nombre: ");
                var telefono = ReadlineSync.questionInt("Ingrese el telefono: ");
                var nuevoProveedor = new Proveedor_1["default"](numVeterinaria, nombre, telefono);
                //inserto el elemento de tipo Proveedor en el arreglo recibido        
                this.listaProveedores.push(nuevoProveedor);
                console.log("el proveedor se dio de alta");
            }
            ;
        }
        ;
    };
    ;
    //método para "borrar" un proveedor​
    RedVeterinaria.prototype.bajaProveedor = function (posicion) {
        this.listaProveedores.splice(posicion, 1);
        console.log("El proveedor ha sido eliminado");
    };
    ;
    //método para modificar datos de un proveedor​
    RedVeterinaria.prototype.modificarProveedor = function (posicion) {
        var idProveedor = this.listaProveedores[posicion].getIdProveedor();
        var numVeterinaria = this.listaProveedores[posicion].getNumVeterinaria();
        var nombre = ReadlineSync.question("Ingrese el nombre nuevo: ");
        var telefono = ReadlineSync.questionInt("Ingrese el nuevo telefono: ");
        var proveedorActualizado = new Proveedor_1["default"](numVeterinaria, nombre, telefono, idProveedor);
        delete this.listaProveedores[posicion];
        this.listaProveedores[posicion] = proveedorActualizado;
        console.log("Los datos fueron modificados");
    };
    ;
    //Método mostrar un proveedor
    RedVeterinaria.prototype.mostrarUnProveedor = function () {
        var proveedor = ReadlineSync.questionInt("ingrese el Id del proveedor: ");
        for (var i = 0; i < this.listaProveedores.length; i++) {
            if (proveedor === this.listaProveedores[i].getIdProveedor()) {
                console.log("Los datos del proveedor " + proveedor + " son:  ");
                console.log("Id: " + this.listaProveedores[i].getIdProveedor());
                console.log("Nombre: " + this.listaProveedores[i].getNombre());
                console.log("Telefono: " + this.listaProveedores[i].getTelefono());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    //Método mostrar listado proveedores
    RedVeterinaria.prototype.mostrarListadoProveedores = function () {
        for (var i = 0; i < this.listaProveedores.length; i++) {
            console.log("Id: " + this.listaProveedores[i].getIdProveedor());
            console.log("Nombre: " + this.listaProveedores[i].getNombre());
            console.log("Telefono: " + this.listaProveedores[i].getTelefono());
            (0, helpers_1.hacerLinea)();
        }
        ;
    };
    ;
    //Mostrar dato red principal
    RedVeterinaria.prototype.mostrarDatosRed = function () {
        console.log(this.getNombre().toLocaleUpperCase());
        console.log(this.getDireccion());
    };
    ;
    //Método mostrar proveedores de una veterinaria en particular
    RedVeterinaria.prototype.mostrarProveedorVeterinaria = function () {
        var veterinaria = ReadlineSync.questionInt("ingrese el Id de la veterinaria: ");
        (0, helpers_1.hacerLinea)();
        console.log("Los proveedores de la veterinaria " + veterinaria + " son: ");
        for (var i = 0; i < this.listaProveedores.length; i++) {
            if (veterinaria === this.listaProveedores[i].getNumVeterinaria()) {
                console.log("Id: " + this.listaProveedores[i].getIdProveedor());
                console.log("Nombre: " + this.listaProveedores[i].getNombre());
                console.log("Telefono: " + this.listaProveedores[i].getTelefono());
                (0, helpers_1.hacerLinea)();
            }
            ;
        }
        ;
    };
    ;
    return RedVeterinaria;
}());
exports["default"] = RedVeterinaria;
;
