
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
        
        if (this.especie == ){
            console.log ("La Mascota" + this.nombre + "no es un animal exótica")
        }

    else{
        console.log ("La Mascota" + this.nombre + "no es un animal exótica")
    }

    }

}