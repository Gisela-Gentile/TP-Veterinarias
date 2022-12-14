"use strict";
exports.__esModule = true;
var Mascota = /** @class */ (function () {
    function Mascota(idMascota, nombre, clase) {
        this.idMascota = idMascota;
        this.nombre = nombre;
        this.clase = clase;
        this.especie = this.determinarEspecie();
    }
    ;
    Mascota.prototype.getIdMascota = function () {
        return this.idMascota;
    };
    ;
    Mascota.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Mascota.prototype.getClase = function () {
        return this.clase;
    };
    ;
    Mascota.prototype.getEspecie = function () {
        return this.especie;
    };
    ;
    //Método determinar esecie
    Mascota.prototype.determinarEspecie = function () {
        if (this.clase.toLowerCase() === "gato") {
            return this.especie = "gato";
        }
        else if (this.clase.toLowerCase() === "perro") {
            return this.especie = "perro";
        }
        else {
            return this.especie = "exótica";
        }
        ;
    };
    ;
    return Mascota;
}());
exports["default"] = Mascota;
;
