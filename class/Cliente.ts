import {crearNumeroAleatoreo} from "../helpers";
import * as ReadlineSync from "readline-sync";
import Mascota from "./Mascota";
export default class Cliente {
  private idCliente: number;
  private nombre: string;
  private telefono: number;
  private visitas: number;
  private clienteVIP: boolean;
  private listaMascota:Array<Mascota>;
public constructor (nombre:string, telefono: number,visitas:number,listaMascota:Array<Mascota>) {
    this.idCliente = crearNumeroAleatoreo(10000);
    this.nombre = nombre;
    this.telefono = telefono;
    this.listaMascota = listaMascota;
    this.visitas = visitas;
    this.clienteVIP= this.serVip();
  }
  public getidCliente():number{
    return this.idCliente;
   }
   public getnombre():string{
    return this.nombre;
   }
   public gettelefono():number{
    return this.telefono
   }
   public getlistaMascota():Array<Mascota>{
    return this.listaMascota;
   }
   public getvisitas():number{
    return this.visitas;
   }
  public getclienteVIP():boolean{
    return this.clienteVIP;
  }
  public asignarVisita(): number {
    return this.visitas += 1;
  }
  public serVip():boolean{
    if (this.visitas>=5){
       return true;
    }else{
       return false;
    }
 }

 public mostrarUmaMascota(listaDeMascotas):void {
  for (let i: number = 0; i < listaDeMascotas.length; i++) {
    console.log(listaDeMascotas[i])
  }
}
public altaMascota(): any {
    let idMascota:number= this.getidCliente();
    let nombre: string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    let clase:string= ReadlineSync.question("Ingrese el tipo de mascota: ");
    let nuevaMascota: Mascota = new Mascota (idMascota,nombre,clase);
        //inserto el elemento de tipo Mascota en el arreglo recibido
        this.listaMascota.push(nuevaMascota);
        console.log("La mascota se dio de alta");
            }
//Método para "borrar" una mascota
public bajaMascota(posicion: number) : void {
          this.listaMascota.splice(posicion,1);
          console.log("La mascota ha sido eliminada");
  }
//Método para modificar datos de una mascota
public modificarMascota(posicion:number): void{
        let idMascota:number= this.listaMascota[posicion].getidMascota();
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let clase :string = ReadlineSync.question("Ingrese la nueva clase: ");
        let mascotaActualizada : Mascota = new Mascota(idMascota,nombre,clase);
    delete this.listaMascota[posicion];
    this.listaMascota[posicion] = mascotaActualizada;
    console.log("Los datos fueron modificados");
}

    public mostrarMascota(): void {
      console.log(this.listaMascota)
    }

   // Método mostrar una mascota
   public mostrarUnaMascota( posicion:number):void{
    console.log(this.listaMascota[posicion]);
        }

        public agregarMascotaCliente(listaClientes:Array<Cliente>, listaMascota:Array<Mascota>): void {
          let cliente: number = ReadlineSync.questionInt('Ingrese el id del cliente:');
          let i: number;
          for (i = 0; i < listaClientes.length; i++) {
            if (cliente == listaClientes[i].getidCliente()){
          let idMascota:number= listaClientes[i].getidCliente();
          let nombre: string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
          let clase:string= ReadlineSync.question("Ingrese el tipo de mascota: ");
          let nuevaMascota: Mascota = new Mascota (idMascota,nombre,clase);
              //inserto el elemento de tipo Mascota en el arreglo recibido
              listaMascota.push(nuevaMascota);
              console.log("La mascota se dio de alta");
      }}}}