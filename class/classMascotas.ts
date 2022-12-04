export default class Mascota {
    private idMascota : number;
    private nombre : string;
    private clase:string;
    private especie:string;
     public constructor ( idMascota:number,nombre:string, clase:string, especie:string ){
      this.idMascota = idMascota
      this.nombre = nombre;
      this.clase= clase;
      this.especie= especie;
      }
    public getidMascota():number{
      return this.idMascota
    }
     public getnombre():string{
      return this.nombre;
     }
     public getclase():string{
      return this.clase
     }
      public getespecie():string{
       return this.especie;}
      }
  15:32
  import {mostrarMenu} from "./helpers";
  mostrarMenu();
  
  
  
  
  
  
  
  