import * as ReadlineSync from "readline-sync";
import{crearNumeroAleatoreo, hacerLinea} from '../helpers';
import Veterinaria from "./Veterinaria"
import Proveedor from "./Proveedor"
import Cliente from "./Cliente";
interface DatoRed{
    altaVeterinaria(listaClientes:Array<Cliente>):void;
    modificarVeterinaria(posicion:number, listaClientes:Array<Cliente>):void;
    bajaVeterinaria(posicion: number):void;
    altaProveedor(listaSucursales:Array<Veterinaria>):void;
    modificarProveedor(posicion:number):void;
    bajaProveedor(posicion: number):void;
};

export default class RedVeterinaria implements DatoRed{
    private id:number;
    private nombre: string;
    private direccion: string;
    private listaProveedores: Array <Proveedor>;
    private listaSucursales: Array<Veterinaria>;

    public constructor(listaProveedores: Array<Proveedor>,listaSucursales: Array<Veterinaria>){
        this.id= 1;
        this.nombre= "The pest";
        this.direccion= "San Martin 623";
        this.listaProveedores= listaProveedores;
        this.listaSucursales= listaSucursales;
    };
    public getId():number {
        return this.id;
    };
    public getNombre():string{
        return this.nombre;
    };
    public getDireccion():string{
        return this.direccion;
    };
    
    public getListaProveedores():Array<Proveedor>{
        return this.listaProveedores;
    };
    public getListaSucursales(): Array<Veterinaria>{
        return this.listaSucursales
    };
// Método dar alta una veterinaria
 public altaVeterinaria(listaClientes:Array<Cliente>): void{

    let idVeterinaria:number = crearNumeroAleatoreo(10000);
    let i:number=0;
    for ( i=0; i< this.listaSucursales.length; i++) {
       
        if (this.listaSucursales[i].getIdVeterinaria() === idVeterinaria){
            idVeterinaria= crearNumeroAleatoreo(10000);
            i=0;
        };
           } ;
    let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
    let direccion:string = ReadlineSync.question("Ingrese la direccion: ");    
    
    let nuevaVeterinaria : Veterinaria = new Veterinaria(nombre,direccion, listaClientes,idVeterinaria);
    
    //inserto el elemento de tipo Veterinaria en el arreglo recibido        
    this.listaSucursales.push(nuevaVeterinaria);
    console.log("la veterinaria se dio de alta");
    };
        
    //Método para "borrar" una sucursal
​
    public bajaVeterinaria(posicion: number) : void {        
        this.listaSucursales.splice(posicion,1);
        console.log("La veterinaria ha sido eliminada");
    } ;
            
    //Método para modificar datos de una veterinaria
​
    public modificarVeterinaria(posicion:number,listaClientes:Array<Cliente>): void{
        let idVeterinaria:number=this.listaSucursales[posicion].getIdVeterinaria();
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let direccion:string = ReadlineSync.question("Ingrese la nueva direccion: ");

        let veterinariaActualizada : Veterinaria = new Veterinaria(nombre, direccion,listaClientes,idVeterinaria);
    ​
        delete this.listaSucursales[posicion];
        this.listaSucursales[posicion] = veterinariaActualizada;
        console.log("Los datos fueron modificados");
    };
    //Método mostrar una veterinaria
    public mostrarUnaVeterinaria( ):void{
        let veterinaria:number= ReadlineSync.questionInt("ingrese el Id de la veterinaria: ");
        for (let i:number=0; i<this.listaSucursales.length;i++){
          if(veterinaria === this.listaSucursales[i].getIdVeterinaria()){ 
           console.log("Los datos de la veterinaria " +veterinaria+ " son:  ");
           console.log("Id: " + this.listaSucursales[i].getIdVeterinaria());
            console.log("Nombre: "+this.listaSucursales[i].getNombre());
            console.log("Direccion: "+this.listaSucursales[i].getDireccion());
            hacerLinea();
          };
        };
    };
    //Método mostrar listado veterinarias
    public mostrarListadoVeterinaria():void{
        for (let i:number=0; i<this.listaSucursales.length;i++){ 
         console.log("Id: " + this.listaSucursales[i].getIdVeterinaria());
          console.log("Nombre: "+this.listaSucursales[i].getNombre());
          console.log("Direccion: "+this.listaSucursales[i].getDireccion());
          hacerLinea();
        };
    } ;         

    // método dar alta un proveedor
    public altaProveedor(listaSucursales:Array<Veterinaria>): void{
        let numVeterinaria:number=ReadlineSync.questionInt("Ingrese el id de la veterinaria: ");
        for(let i:number=0; i<listaSucursales.length; i++ ){
            if(numVeterinaria===listaSucursales[i].getIdVeterinaria()){
                let idProveedor:number = crearNumeroAleatoreo(10000)
                let i:number=0;
                for ( i=0; i< this.listaProveedores.length; i++) {
                    if ( this.listaProveedores[i].getIdProveedor() === idProveedor){
                        idProveedor= crearNumeroAleatoreo(10000);
                        i=0;
                        };
                    };     
                let nombre:string = ReadlineSync.question("Ingrese el nombre: ");
                let telefono:number = ReadlineSync.questionInt("Ingrese el telefono: ");
                        
                let nuevoProveedor: Proveedor = new Proveedor(numVeterinaria,nombre,telefono);
                ​
                //inserto el elemento de tipo Proveedor en el arreglo recibido        
                this.listaProveedores.push(nuevoProveedor);
                console.log("el proveedor se dio de alta");
            };
        };
    };

    //método para "borrar" un proveedor​
    public bajaProveedor(posicion: number) : void {    
        this.listaProveedores.splice(posicion,1);
        console.log("El proveedor ha sido eliminado");
    };        

  //método para modificar datos de un proveedor​
    public modificarProveedor(posicion:number): void{   
        let idProveedor:number=this.listaProveedores[posicion].getIdProveedor();
        let numVeterinaria:number=this.listaProveedores[posicion].getNumVeterinaria(); 
        let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
        let telefono:number = ReadlineSync.questionInt("Ingrese el nuevo telefono: ");
   ​
        let proveedorActualizado : Proveedor = new Proveedor (numVeterinaria,nombre,telefono,idProveedor);
    ​
        delete this.listaProveedores[posicion];
        this.listaProveedores[posicion] = proveedorActualizado;
        console.log("Los datos fueron modificados");
        };

    //Método mostrar un proveedor
    public mostrarUnProveedor( ):void{
        let proveedor:number= ReadlineSync.questionInt("ingrese el Id del proveedor: ");
        for (let i:number=0; i<this.listaProveedores.length;i++){
          if(proveedor === this.listaProveedores[i].getIdProveedor()){ 
           console.log("Los datos del proveedor " +proveedor+ " son:  ");
           console.log("Id: " + this.listaProveedores[i].getIdProveedor());
            console.log("Nombre: "+this.listaProveedores[i].getNombre());
            console.log("Telefono: "+this.listaProveedores[i].getTelefono());
            hacerLinea();
          };
        };
    };
    //Método mostrar listado proveedores
    public mostrarListadoProveedores():void{
        for (let i:number=0; i<this.listaProveedores.length;i++){ 
         console.log("Id: " + this.listaProveedores[i].getIdProveedor());
          console.log("Nombre: "+this.listaProveedores[i].getNombre());
          console.log("Telefono: "+this.listaProveedores[i].getTelefono());
          hacerLinea();
        };
    };
    //Mostrar dato red principal
    public mostrarDatosRed():void{
        console.log(this.getNombre().toLocaleUpperCase());
        console.log(this.getDireccion());
    };
    //Método mostrar proveedores de una veterinaria en particular
  public mostrarProveedorVeterinaria():void{
    let veterinaria:number= ReadlineSync.questionInt("ingrese el Id de la veterinaria: ");
    hacerLinea();
    console.log("Los proveedores de la veterinaria " +veterinaria+  " son: ");
    for (let i:number=0; i<this.listaProveedores.length;i++){
      if(veterinaria === this.listaProveedores[i].getNumVeterinaria()){ 
        console.log("Id: " + this.listaProveedores[i].getIdProveedor());
        console.log("Nombre: "+this.listaProveedores[i].getNombre());
        console.log("Telefono: "+this.listaProveedores[i].getTelefono());
        hacerLinea();
      };
    };
  };
};