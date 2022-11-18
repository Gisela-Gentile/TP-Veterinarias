import crearNumeroAleatoreo from "../helpers";

class Cliente {
  idCliente: number;
  nombre: string;
  telefono: number;
  visitas: number;
  clienteVIP: boolean;
  //mascota: Mascota;

  constructor(nombre:string, telefono: number, mascota: string) {
    this.nombre = nombre;
    this.telefono = telefono;
    //this.mascota = mascota
  }

  
}