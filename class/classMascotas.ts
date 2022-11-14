
class Mascota {
    idClientes : number;
    nombre : string;
    especie : string;

    public constructor (idCliente:number, nombre:string, especie:string){
        this.especie = especie;
        this.nombre = nombre;
        this.idClientes = idCliente;
    }

    public determinarEspecie () :void {
        
        if (this.especie == "gato"){
            console.log (`La mascota ${this.nombre}  no es un animal exótica`);
        }
        
        else if (this.especie == "perro"){
            console.log (`La mascota ${this.nombre}  no es un animal exótica`)
        }

        else{
        console.log (`La mascota ${this.nombre}  es un animal exótica`)
        }
    }

}

let nuevaMascota : Mascota = new Mascota (373630, "piti" , "gato");
console.log (nuevaMascota);
nuevaMascota.determinarEspecie();

let nuevaMascota2 : Mascota = new Mascota (36555, "toro", "tortuga");
nuevaMascota2.determinarEspecie();
