import { crearNumeroAleatoreo } from "/helpers.ts"
import * as ReadlineSync from "readline-sync";

interface DatoRed{
    altaCliente():void;
    modificarCliente(posicion:number):void;
    bajaCliente(posicion: number):void;
}


export default class veterinaria implements DatoRed{
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;
    private listaClientes: Array<cliente>;


    public constructor(idVeterinaria:number, nombre:string, direccion:string, listaClientes: Array<cliente>){
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
    
    public getlistaClientes(): Array<cliente>{
        return this.listaClientes
    }

    // funcion dar alta un cliente
    public altaCliente(): void{

        let idCliente:number = crearNumeroAleatoreo(this.listaClientes.length)
        let i:number=0;
        let aux:number=0;
        for ( i=0; i< this.listaClientes.length; i++) {
            if ( this.listaClientes[i].getidCliente() === idCliente){
                aux= crearNumeroAleatoreo(this.listaClientes.length);
                i=0;
                    } else{
                aux=idCliente;
            }
            idCliente=aux;
                }    

        let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
        let direccion:string = ReadlineSync.question("Ingrese la direccion: ");
                  
    let nuevoCliente : cliente = new cliente (idCliente, nombre,direccion);
        ​            
            this.listaClientes.push(nuevoCliente);
                }
            
                
    ​
    public bajaCliente(posicion: number) : void {​
        
              this.listaClientes.splice(posicion,1);
        
      } 
             
    ​
    public modificarCliente(posicion:number): void{
       
        if (posicion === this.listaClientes[posicion].getidCliente()){
            let idVeterinaria:number= this.listaClientes[posicion].getidVeterinaria();
            let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
            let direccion:string = ReadlineSync.question("Ingrese la nueva direccion: ");
       ​
        let clienteActualizado : cliente = new cliente((Number(idCliente)),nombre, direccion);
    ​
        delete this.listaClientes[posicion];
        this.listaClientes[posicion] = clienteActualizado;}
    }
            
        public mostrarUnCliente( posicion:number):void{
    
            console.log(this.listaClientes[posicion]);
                }
            }  