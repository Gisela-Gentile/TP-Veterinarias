import{crearNumeroAleatoreo,serVIP} from '../helpers';
import * as ReadlineSync from "readline-sync";
import Cliente from "./Cliente"
import Mascota from './Mascota';
interface DatoRed{
    altaCliente():void;
    modificarCliente(posicion:number):void;
    bajaCliente(posicion: number):void;
}
export default class Veterinaria implements DatoRed{
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;
    private listaClientes: Array<Cliente>;
    public constructor(idVeterinaria:number, nombre:string, direccion:string, listaClientes: Array<Cliente>){
        this.idVeterinaria= idVeterinaria;
        this.nombre=nombre;
        this.direccion= direccion;
        this.listaClientes= listaClientes;
    }
    public getidVeterinaria():number {
        return this.idVeterinaria;
    }
    public getnombre():string{
        return this.nombre;
    }
    public getdireccion():string{
        return this.direccion;
    }
    public getlistaClientes(): Array<Cliente>{
        return this.listaClientes
    }
    // Métdodo para dar alta un cliente
    public altaCliente(): void{
        let idCliente:number = crearNumeroAleatoreo(10000)
        let i:number=0;
                for ( i=0; i< this.listaClientes.length; i++) {
            if ( this.listaClientes[i].getidCliente() === idCliente){
                idCliente= crearNumeroAleatoreo(10000);
                i=0;
                    }
                }
        let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
        let telefono:number = ReadlineSync.questionInt("Ingrese el telefono: ");
        let listaMascota:Array<Mascota>=[];
        let visitas:number= 1;
        let clienteVIP:boolean=serVIP();
        let nuevoCliente : Cliente = new Cliente (idCliente, nombre,telefono,visitas,clienteVIP,listaMascota);
        ​
        this.listaClientes.push(nuevoCliente);
                }  ;
        //Método dar de baja un cliente
    ​   public bajaCliente(posicion: number) : void {
              this.listaClientes.splice(posicion,1);
      }
    ​//Método modificar un cliente
    public modificarCliente(posicion:number): void{
            let idCliente:number= this.listaClientes[posicion].getidCliente();
            let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
            let telefono: number= ReadlineSync.questionInt("Ingrese el nuevo telefono: ");
       ​     let listaMascota:Array<Mascota>=[];
            let visita:number= this.listaClientes[posicion].getvisitas();
            let clienteVIP: boolean= serVIP();
            let clienteActualizado : Cliente = new Cliente(idCliente,nombre, telefono,visita,clienteVIP,listaMascota);
    ​
        delete this.listaClientes[posicion];
        this.listaClientes[posicion] = clienteActualizado;
    };
// Método mostrar un cliente
        public mostrarUnCliente( posicion:number):void{
            console.log(this.listaClientes[posicion]);
                }
            }






