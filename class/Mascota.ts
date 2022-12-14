export default class Mascota {
  private idMascota : number;
  private nombre : string;
  private clase:string;
  private especie:string;

  public constructor ( idMascota:number,nombre:string, clase:string ){
    this.idMascota = idMascota
    this.nombre = nombre;
    this.clase= clase;
    this.especie= this.determinarEspecie();            
  };   
  public getIdMascota():number{
    return this.idMascota;
  };
   public getNombre():string{
     return this.nombre;
   };
   public getClase():string{
      return this.clase;
   };
    public getEspecie():string{ 
     return this.especie;
    };
//Método determinar esecie
  public determinarEspecie ():string{      
    if (this.clase.toLowerCase() === "gato"){
      return  this.especie = "gato";
    }    
    else if (this.clase.toLowerCase() === "perro"){
      return this.especie = "perro";
    }else{
      return this.especie ="exótica";
    };
  };
  
};
    
