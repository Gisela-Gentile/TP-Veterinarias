import{crearNumeroAleatoreo, hacerLinea} from '../helpers';
import * as ReadlineSync from "readline-sync";
import Cliente from "./Cliente"
import Mascota from './Mascota';

interface DatoRed{
    altaCliente(listaMascota:Array<Mascota>,listaSucursales:Array<Veterinaria>):void;
    modificarCliente(posicion:number,listaMacotas:Array<Mascota>):void;
    bajaCliente(posicion: number):void;
};
export default class Veterinaria implements DatoRed{
    private idVeterinaria: number;
    private nombre: string;
    private direccion: string;
    private listaClientes: Array<Cliente>;
        
    public constructor( nombre:string, direccion:string, listaClientes: Array<Cliente>,idVeterinaria?:number){
        if (idVeterinaria == undefined) {
            this.idVeterinaria = crearNumeroAleatoreo(10000);
          } else {
            this.idVeterinaria = idVeterinaria;
          };       
       
        this.nombre=nombre;
        this.direccion= direccion;
        this.listaClientes= listaClientes;
        };
    public getIdVeterinaria():number {
        return this.idVeterinaria;
    };
    public getNombre():string{
        return this.nombre;
    };
    public getDireccion():string{
        return this.direccion;
    } ;    
    public getListaClientes(): Array<Cliente>{
        return this.listaClientes
    };
    // Métdodo para dar alta un cliente
    public altaCliente(listaMascota:Array<Mascota>,listaSucursales:Array<Veterinaria>): void{
        let numVeterinaria:number=ReadlineSync.questionInt("Ingrese el id de la veterinaria: ");
        for(let i:number=0 ;i<listaSucursales.length;i++ ){
            if(numVeterinaria==listaSucursales[i].getIdVeterinaria()){
                
                let idCliente:number = crearNumeroAleatoreo(10000);
                let i:number=0;
                for ( i=0; i< this.listaClientes.length; i++) {
                    if ( this.listaClientes[i].getIdCliente() === idCliente){
                        idCliente= crearNumeroAleatoreo(10000);
                        i=0;
                    };                 
                };                   
                let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
                let telefono:number = ReadlineSync.questionInt("Ingrese el telefono: ");        
                let visitas:number=1; 
                
                //inserto el elemento de tipo cliente en el arreglo recibido
                let nuevoCliente : Cliente = new Cliente (numVeterinaria,nombre,telefono,visitas,listaMascota,idCliente);
                nuevoCliente.altaMascota();               
                this.listaClientes.push(nuevoCliente);
                console.log("El cliente se dio de alta"); 
            };
        };
    };
    
    //Método dar de baja un cliente
​   public bajaCliente(posicion: number) : void {    
        this.listaClientes.splice(posicion,1);
        console.log("El cliente ha sido eliminado");        
    };           
    ​//Método modificar un cliente
    public modificarCliente(posicion:number,listaMacotas:Array<Mascota>): void{              
        let idCliente:number=this.listaClientes[posicion].getIdCliente();
        let numVeterinaria:number=this.listaClientes[posicion].getNumveterinaria(); 
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let telefono: number= ReadlineSync.questionInt("Ingrese el nuevo telefono: ");
​        let visita:number= this.listaClientes[posicion].getVisitas(); 
        let clienteActualizado : Cliente = new Cliente(numVeterinaria,nombre, telefono,visita,listaMacotas,idCliente);
​        
        delete this.listaClientes[posicion];
        this.listaClientes[posicion] = clienteActualizado;
        console.log("Los datos fueron modificados");
    };
    
    // Método mostrar un cliente            
    public mostrarUnCliente( ):void{
    
        let cliente:number= ReadlineSync.questionInt("ingrese el Id del cliente: ");
        for (let i:number=0; i<this.listaClientes.length;i++){
            if(cliente === this.listaClientes[i].getIdCliente()){ 
                console.log("Los datos del cliente " +cliente+ " son:  ");
                console.log("Id: " + this.listaClientes[i].getIdCliente());
                console.log("Nombre: "+this.listaClientes[i].getNombre());
                console.log("Teléfono: "+ this.listaClientes[i].getTelefono());
                console.log("Visitas: "+ this.listaClientes[i].getVisitas());
                console.log("Cliente VIP: "+ this.listaClientes[i].getClienteVIP());
                hacerLinea();
            };
        }; 
    };
 //Método para mostra listado de clientes 
    public mostrarListadoCliente():void{
        for (let i:number=0; i<this.listaClientes.length;i++){ 
            console.log("Id: " + this.listaClientes[i].getIdCliente());
            console.log("Nombre: "+this.listaClientes[i].getNombre());
            console.log("Teléfono: "+ this.listaClientes[i].getTelefono());
            console.log("Visitas: "+ this.listaClientes[i].getVisitas());
            console.log("Cliente VIP: "+ this.listaClientes[i].getClienteVIP());
            hacerLinea();
        };
    };
    //Método mostrar cliente de una veterinaria en particular
  public mostrarClienteVeterinaria():void{
    let veterinaria:number= ReadlineSync.questionInt("ingrese el Id de la veterinaria: ");
  
    hacerLinea();
    console.log("Los clientes de la veterinaria " +veterinaria+ " son:  ");
    for (let i:number=0; i<this.listaClientes.length;i++){
      if(veterinaria === this.listaClientes[i].getNumveterinaria()){ 
        console.log("Id: " + this.listaClientes[i].getIdCliente());
        console.log("Nombre: "+this.listaClientes[i].getNombre());
        console.log("Teléfono: "+ this.listaClientes[i].getTelefono());
        console.log("Visitas: "+ this.listaClientes[i].getVisitas());
        console.log("Cliente VIP: "+ this.listaClientes[i].getClienteVIP());
        hacerLinea();
      };
    };
  };   
};

