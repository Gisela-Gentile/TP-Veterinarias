import {determinarEspecie} from "../helpers";
import * as ReadlineSync from "readline-sync";
import Mascota from "./Mascota";
export default class Cliente {
  private idCliente: number;
  private nombre: string;
  private telefono: number;
  private visitas: number;
  private clienteVIP: boolean;
  private listaMascota:Array< Mascota>;
public constructor (idcliente:number, nombre:string, telefono: number,visitas:number, clienteVIP:boolean,listaMascota:Array<Mascota>) {
    this.idCliente = idcliente
    this.nombre = nombre;
    this.telefono = telefono;
    this.listaMascota = listaMascota;
    this.visitas = visitas;
    this.clienteVIP= clienteVIP
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
   public getlistaMascota():Array< Mascota>{
    return this.listaMascota;
   }
   public getvisitas():number{
    return this.visitas
   }
  public getclienteVIP():boolean{
    return this.clienteVIP
  }
 public getasignarVisita(): number {
    return this.visitas =+ 1;
  }
public altaMascota(): void {
    let idMascota:number= this.getidCliente();
    let nombre: string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    let clase:string= ReadlineSync.question("Ingrese el tipo de mascota: ");
    let especie:string = determinarEspecie();
    let nuevaMascota: Mascota = new Mascota (idMascota,nombre,clase,especie);
        //inserto el elemento de tipo Mascota en el arreglo recibido
        this.listaMascota.push(nuevaMascota);
            }
//Método para "borrar" una mascota
public bajaMascota(posicion: number) : void {
          this.listaMascota.splice(posicion,1);
  }
//Método para modificar datos de una mascota
public modificarMascota(posicion:number): void{
        let idMascota:number= this.listaMascota[posicion].getidMascota();
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let clase :string = ReadlineSync.question("Ingrese la nueva clase: ");
        let especie:string= determinarEspecie();
    let mascotaActualizada : Mascota = new Mascota(idMascota,nombre,clase,especie);
    delete this.listaMascota[posicion];
    this.listaMascota[posicion] = mascotaActualizada;
}
   // Método mostrar una mascota
   public mostrarUnaMascota( posicion:number):void{
    console.log(this.listaMascota[posicion]);
        }
      }