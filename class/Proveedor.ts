export default class Proveedor{
    private idProveedor:number
    private nombre: string
    private telefono:number

    public constructor (idProveedor:number, nombre:string, telefono:number){
        this.idProveedor = idProveedor;
        this.nombre = nombre;
        this.telefono = telefono;
    }
   public getidProveedor():number{
    return this.idProveedor;
   }
   public getnombre():string{
    return this.nombre;
   }
   public gettelefono():number{
    return this.telefono
   }
}