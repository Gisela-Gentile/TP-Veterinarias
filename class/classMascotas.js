var Mascota = /** @class */ (function () {
    function Mascota(idCliente, nombre, especie) {
        this.especie = especie;
        this.nombre = nombre;
        this.idClientes = idCliente;
    }
    Mascota.prototype.determinarEspecie = function () {
        if (this.especie = "gato") {
            console.log("La mascota ".concat(this.nombre, "  no es un animal ex\u00F3tica"));
        }
        else if (this.especie = "perro") {
            console.log("La mascota ".concat(this.nombre, "  no es un animal ex\u00F3tica"));
        }
        else {
            console.log("La mascota ".concat(this.nombre, "  es un animal ex\u00F3tica"));
        }
    };
    return Mascota;
}());
var nuevaMascota = new Mascota(373630, "piti", "gato");
console.log(nuevaMascota);
nuevaMascota.determinarEspecie();
var nuevaMascota2 = new Mascota(36555, "toro", "tortuga");
nuevaMascota2.determinarEspecie();
