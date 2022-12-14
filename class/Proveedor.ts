import { crearNumeroAleatoreo } from "../helpers";

export default class Proveedor{
     private numVeterinaria:number;
    private idProveedor:number;
    private nombre: string;
    private telefono:number;

    public constructor (numVeterinaria:number,nombre:string, telefono:number,idProveedor?:number){
     if (idProveedor == null) {
          this.idProveedor = crearNumeroAleatoreo(10000);
        } else {
          this.idProveedor = idProveedor;
        };
        this.numVeterinaria=numVeterinaria;
        this.nombre = nombre;
        this.telefono = telefono;
    };
    public getNumVeterinaria():number{
        return  this.numVeterinaria;
    }
   public getIdProveedor():number{
        return this.idProveedor;
   };
   public getNombre():string{
        return this.nombre;
   };
   public getTelefono():number{
        return this.telefono;
   };
};