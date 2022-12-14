import {crearNumeroAleatoreo, hacerLinea} from "../helpers";
import * as ReadlineSync from "readline-sync";
import Mascota from "./Mascota";

export default class Cliente {
  private idCliente: number;
  private nombre: string;
  private telefono: number;
  private visitas: number;
  private clienteVIP: boolean;
  private listaMascota:Array< Mascota>;
  private numVeterinaria:number;
    
  public constructor (numVeterinaria:number,nombre:string, telefono: number,visitas:number,listaMascota:Array<Mascota>,idCliente?: number) {
    if (idCliente == undefined) {
      this.idCliente = crearNumeroAleatoreo(10000);
    } else {
      this.idCliente = idCliente;
    };
    this.nombre = nombre;
    this.telefono = telefono;
    this.listaMascota = listaMascota;
    this.visitas = visitas;
    this.clienteVIP= this.serVip();    
    this.numVeterinaria = numVeterinaria;
    
  };
  public getNumveterinaria():number{
    return this.numVeterinaria
  }
  public getIdCliente():number{
    return this.idCliente;
   };
   public getNombre():string{
    return this.nombre;
   };
   public getTelefono():number{
    return this.telefono
   };
   public getListaMascota():Array< Mascota>{
    return this.listaMascota;
   };
   public getVisitas():number{
    return this.visitas;
   };
  public getClienteVIP():boolean{
    return this.clienteVIP;
  };
  public asignarVisita(): number {    
    return this.visitas += 1;
  };
  public serVip():boolean{
    if (this.visitas>=5){
       return true;
    }else{
       return false;
    };
 };
 //Método alta mascota para cuando se carga un nuevo cliente
  public altaMascota(): void {      
    let idMascota:number= this.getIdCliente();
    let nombre: string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    let clase:string= ReadlineSync.question("Ingrese el tipo de mascota: ");
        
    let nuevaMascota: Mascota = new Mascota (idMascota,nombre,clase);
    ​
        //inserto el elemento de tipo Mascota en el arreglo recibido
        
        this.listaMascota.push(nuevaMascota);
        console.log("La mascota se dio de alta");
         
            }
  //Método agregar mascota con id de cliente   
  public agregarMascotaCliente(listaClientes:Array<Cliente>, listaMascota:Array<Mascota>): void {
    let cliente: number = ReadlineSync.questionInt('Ingrese el id del cliente:');
    let i: number=0;
    for (i = 0; i < listaClientes.length; i++) {
      if (cliente == listaClientes[i].getIdCliente()){
    let idMascota:number= listaClientes[i].getIdCliente();
    let nombre: string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    let clase:string= ReadlineSync.question("Ingrese el tipo de mascota: ");
    let nuevaMascota: Mascota = new Mascota (idMascota,nombre,clase);
    
    //inserto el elemento de tipo Mascota en el arreglo recibido
    listaMascota.push(nuevaMascota);
    console.log("La mascota se dio de alta");
    };
  };
};         
//Método para "borrar" una mascota​
public bajaMascota(posicion: number) : void {    
    this.listaMascota.splice(posicion,1);
    console.log("La mascota ha sido eliminada");    
  };
//Método para modificar datos de una mascota​
public modificarMascota(posicion:number): void{
   
  let idMascota:number= this.listaMascota[posicion].getIdMascota();
  let nombre:string = ReadlineSync.question("Ingrese el nombre nuevo: ");
  let clase :string = ReadlineSync.question("Ingrese la nueva clase: ");          
  let mascotaActualizada : Mascota = new Mascota(idMascota,nombre,clase);​
  delete this.listaMascota[posicion];
  this.listaMascota[posicion] = mascotaActualizada;
  console.log("Los datos fueron modificados");
}     
   // Método mostrar una mascota           
  public mostrarUnaMascota( ):void{  
    let mascota:number= ReadlineSync.questionInt("ingrese el Id del cliente: ");
    hacerLinea();
    console.log("Los datos de la mascota " +mascota+ " son:  ");
    for (let i:number=0; i<this.listaMascota.length;i++){
      if(mascota === this.listaMascota[i].getIdMascota()){ 
        console.log("Id: " + this.listaMascota[i].getIdMascota());
        console.log("Nombre: "+this.listaMascota[i].getNombre());
        console.log("Clase: "+ this.listaMascota[i].getClase());
        console.log("Especie: "+ this.listaMascota[i].getEspecie());
        hacerLinea();
      };
    };  
  };
  //Método mostrar mascota de un cliente en particular
  public mostrarMascotaCliente():void{
    let cliente:number= ReadlineSync.questionInt("ingrese el Id del cliente: ");    
    console.log("Las mascostas del cliente " +cliente+ " son:  ");
    for (let i:number=0; i<this.listaMascota.length;i++){
      if(cliente === this.listaMascota[i].getIdMascota()){ 
        console.log("Id: " + this.listaMascota[i].getIdMascota());
        console.log("Nombre: "+this.listaMascota[i].getNombre());
        console.log("Clase: "+ this.listaMascota[i].getClase());
        console.log("Especie: "+ this.listaMascota[i].getEspecie());
        hacerLinea();
      };
    };
  };   
  //Método mostrar listado mascota
  public mostrarListadoMascota():void{
    for (let i:number=0; i<this.listaMascota.length;i++){
      console.log("Id: " + this.listaMascota[i].getIdMascota());
      console.log("Nombre: "+this.listaMascota[i].getNombre());
      console.log("Clase: "+ this.listaMascota[i].getClase());
      console.log("Especie: "+ this.listaMascota[i].getEspecie());
      hacerLinea();
    };
  };
};
        

