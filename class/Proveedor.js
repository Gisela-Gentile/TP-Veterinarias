"use strict";
exports.__esModule = true;
var helpers_1 = require("../helpers");
var Proveedor = /** @class */ (function () {
    function Proveedor(numVeterinaria, nombre, telefono, idProveedor) {
        if (idProveedor == null) {
            this.idProveedor = (0, helpers_1.crearNumeroAleatoreo)(10000);
        }
        else {
            this.idProveedor = idProveedor;
        }
        ;
        this.numVeterinaria = numVeterinaria;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    ;
    Proveedor.prototype.getNumVeterinaria = function () {
        return this.numVeterinaria;
    };
    Proveedor.prototype.getIdProveedor = function () {
        return this.idProveedor;
    };
    ;
    Proveedor.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    ;
    return Proveedor;
}());
exports["default"] = Proveedor;
;
