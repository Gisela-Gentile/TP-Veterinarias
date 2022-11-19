import * as ReadlineSync from "readline-sync";
import{crearNumeroAleatoreo} from '../helpers';
import Veterinaria from "./Veterinaria"
import Proveedor from "./Proveedor"

interface DatoRed{
    altaVeterinaria():void;
    modificarVeterinaria(posicion:number):void;
    bajaVeterinaria(posicion: number):void;
}

export default class RedVeterinaria implements DatoRed{
    private id:number;
    private nombre: string;
    private direccion: string;
    private listaProveedores: Array <Proveedor>;
    private listaSucursales: Array<Veterinaria>;


    public constructor(id:number, nombre:string, direccion:string, listaProveedores: Array<Proveedor>,listaSucursales: Array<Veterinaria>){
        this.id= id;
        this.nombre=nombre;
        this.direccion= direccion;
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
    // funcion dar alta veterinarias
 public altaVeterinaria(): void{

    let idVeterinaria:number = crearNumeroAleatoreo(this.listaSucursales.length)
    let i:number=0;
    let aux:number=0;
    for ( i=0; i< this.listaSucursales.length; i++) {
        if ( this.listaSucursales[i].getidVeterinaria() === idVeterinaria){
            aux= crearNumeroAleatoreo(this.listaSucursales.length);
            i=0;
                } else{
            aux=idVeterinaria;
        }
        idVeterinaria=aux;
            }    
    let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
    let direccion:string = ReadlineSync.question("Ingrese la direccion: ");
              
let nuevaVeterinaria : Veterinaria = new Veterinaria(idVeterinaria, nombre,direccion);
    ​
        //inserto el elemento de tipo Veterinaria en el arreglo recibido
        
        this.listaSucursales.push(nuevaVeterinaria);
            }
        
            //funcion para "borrar" una sucursal
​
public bajaVeterinaria(posicion: number) : void {​
    
          this.listaSucursales.splice(posicion,1);
    
  } 
         
    //funcion para modificar datos de una veterinaria
​
public modificarVeterinaria(posicion:number): void{
   
    if (posicion === this.listaSucursales[posicion].getidVeterinaria()){
        let idVeterinaria:number= this.listaSucursales[posicion].getidVeterinaria();
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let direccion:string = ReadlineSync.question("Ingrese la nueva direccion: ");
   ​
    let veterinariaActualizada : Veterinaria = new Veterinaria((Number(idVeterinaria)),nombre, direccion);
​
    delete this.listaSucursales[posicion];
    this.listaSucursales[posicion] = veterinariaActualizada;}
}
        
    public mostrarUnaVeterinaria( posicion:number):void{

        console.log(this.listaSucursales[posicion]);
            }
        }    




