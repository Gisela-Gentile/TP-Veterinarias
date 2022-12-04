import * as ReadlineSync from "readline-sync";
import{crearNumeroAleatoreo} from '../helpers';
import Veterinaria from "./Veterinaria"
import Proveedor from "./Proveedor"
import Cliente from "./Cliente";


interface DatoRed{
    altaVeterinaria():void;
    modificarVeterinaria(posicion:number):void;
    bajaVeterinaria(posicion: number):void;
    altaProveedor():void;
    modificarProveedor(posicion:number):void;
    bajaProveedor(posicion: number):void;
}


export default class RedVeterinaria implements DatoRed{
    private id:number;
    private nombre: string;
    private direccion: string;
    private listaProveedores: Array <Proveedor>;
    private listaSucursales: Array<Veterinaria>;


    public constructor(listaProveedores: Array<Proveedor>,listaSucursales: Array<Veterinaria>){
        this.id= 1;
        this.nombre= "The Pest";
        this.direccion= "San Martin 623";
        this.listaProveedores= listaProveedores;
        this.listaSucursales= listaSucursales;
    }
    public getid():number {
        return this.id;
    }
    public getnombre():string{
        return this.nombre;
    }
    public getdireccion():string{
        return this.direccion;
    }
    
    public getlistaProveedores():Array<Proveedor>{
        return this.listaProveedores;
    }
    public getlistaSucursales(): Array<Veterinaria>{
        return this.listaSucursales
    }
    // Método dar alta una veterinaria
 public altaVeterinaria(): void{

    let idVeterinaria:number = crearNumeroAleatoreo(10000);
    let i:number=0;
    for ( i=0; i< this.listaSucursales.length; i++) {
       
        if (this.listaSucursales[i].getidVeterinaria() === idVeterinaria){
         idVeterinaria= crearNumeroAleatoreo(10000);
        i=0;
        }
           } 
    let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
    let direccion:string = ReadlineSync.question("Ingrese la direccion: ");     
    let listaClientes:Array<Cliente> = [];
let nuevaVeterinaria : Veterinaria = new Veterinaria(idVeterinaria, nombre,direccion, listaClientes);
    ​
        //inserto el elemento de tipo Veterinaria en el arreglo recibido        
        this.listaSucursales.push(nuevaVeterinaria);
            }
        
    //Método para "borrar" una sucursal
​
public bajaVeterinaria(posicion: number) : void {​
    
          this.listaSucursales.splice(posicion,1);
    
  } 
         
    //Método para modificar datos de una veterinaria
​
public modificarVeterinaria(posicion:number): void{
   
        let idVeterinaria:number= this.listaSucursales[posicion].getidVeterinaria();
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let direccion:string = ReadlineSync.question("Ingrese la nueva direccion: ");
        let listaClientes: Array<Cliente>= []
   ​// ver lo de la lista cliente como se carga
    let veterinariaActualizada : Veterinaria = new Veterinaria(idVeterinaria,nombre, direccion,listaClientes);
​
    delete this.listaSucursales[posicion];
    this.listaSucursales[posicion] = veterinariaActualizada;
}     
    //método mostrar una veterinaria
    public mostrarUnaVeterinaria( posicion:number):void{

        console.log(this.listaSucursales[posicion]);
            }

    // método dar alta un proveedor
 public altaProveedor(): void{

    let idProveedor:number = crearNumeroAleatoreo(10000)
    let i:number=0;
    for ( i=0; i< this.listaProveedores.length; i++) {
        if ( this.listaProveedores[i].getidProveedor() === idProveedor){
            idProveedor= crearNumeroAleatoreo(10000);
            i=0;
                }
        } 
     
    let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
    let telefono:number = ReadlineSync.questionInt("Ingrese el telefono: ");
              
let nuevoProveedor: Proveedor = new Proveedor(idProveedor,nombre,telefono);
    ​
        //inserto el elemento de tipo Proveedor en el arreglo recibido
        
        this.listaProveedores.push(nuevoProveedor);
            }
        
    //método para "borrar" un proveedor
​
public bajaProveedor(posicion: number) : void {​
    
          this.listaProveedores.splice(posicion,1);
    
  }          
    //método para modificar datos de un proveedor
​
public modificarProveedor(posicion:number): void{
   
        let idProveedor:number= this.listaProveedores[posicion].getidProveedor();
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let telefono:number = ReadlineSync.questionInt("Ingrese el nuevo telefono: ");
   ​
    let proveedorActualizado : Proveedor = new Proveedor (idProveedor,nombre,telefono);
​
    delete this.listaProveedores[posicion];
    this.listaProveedores[posicion] = proveedorActualizado;
}
     //Mostrar un proveedor   
    public mostrarUnproveedor( posicion:number):void{

        console.log(this.listaProveedores[posicion]);
            }
        }    




