import RedVeterinaria from "./class/RedVeterinaria";
import Veterinaria from "./class/Veterinaria";
import Proveedor from "./class/Proveedor";
import Cliente from "./class/Cliente";
import Mascota from "./class/Mascota";
import GestorDeArchivos from "./class/GestorDeArchivos";
import * as ReadlineSync from "readline-sync";

export function crearNumeroAleatoreo(max:number){
return Math.floor(Math.random()*max)
}


export function determinarEspecie () :string{
      
    if (this.clase.toLowerCase() == "gato"){
      return  this.especie ="gato";
    }    
    else if (this.clase.toLowerCase() == "perro"){
      return this.especie= "perro";
            }

    else{
     return this.especie="exótica";
    }
}
export function serVIP():boolean{
    if( this.visitas >5){
     return this.clienteVIP=true
    }else{
     return this.clienteVIP=false
    }};
    export function cargarVeterinaria(veterinaria:string, arrayVeterinaria: Array<Veterinaria>) : void{
        ​
            let propiedadVeterinaria : string[] = veterinaria.split(',');
            let idVeterinaria: string = propiedadVeterinaria[0];
            let nombre: string = propiedadVeterinaria[1];
            let direccion:string = propiedadVeterinaria[2];
            let listaClientes:Array<Cliente>=[];
                         
            let nuevaVeterinaria:Veterinaria = new Veterinaria(Number(idVeterinaria),nombre,direccion,listaClientes);
        ​        arrayVeterinaria.push(nuevaVeterinaria);
        }
   export const obtenerPosicionVeterinaria = (arrayVeterinaria: Array<Veterinaria>): number=>{
        let esta: boolean=false
        let posicion: number=0
        let ubicacion:number=0
        let id:number= ReadlineSync.questionInt("Ingrese el Id de la Veterinaria : ");
        for (let i:number=0; i< arrayVeterinaria.length; i++){
    
            if ( arrayVeterinaria[i].getidVeterinaria() === Number(id)){
                esta= true;
                ubicacion=i;
            } 
        }
         if (esta== true){
            posicion= ubicacion;
         }else{
            throw new Error ("El Id no existe");}
         
         return posicion;
    }
    export function cargarProveedor(proveedor:string, arrayProveedor: Array<Proveedor>) : void{
        ​
            let propiedadProveedor : string[] = proveedor.split(',');
            let idProveedor: string = propiedadProveedor[0];
            let nombre: string = propiedadProveedor[1];
            let telefono:string = propiedadProveedor[2];
                                     
            let nuevoProveedor:Proveedor = new Proveedor (Number(idProveedor),nombre,Number(telefono));
        ​        arrayProveedor.push(nuevoProveedor);
        }
   export const obtenerPosicionProveedor = (arrayProveedor: Array<Proveedor>): number=>{
        let esta: boolean=false
        let posicion: number=0
        let ubicacion:number=0
        let id:number= ReadlineSync.questionInt("Ingrese el Id del proveedor : ");
        for (let i:number=0; i< arrayProveedor.length; i++){
    
            if ( arrayProveedor[i].getidProveedor() === Number(id)){
                esta= true;
                ubicacion=i;
            } 
        }
         if (esta== true){
            posicion= ubicacion;
         }else{
            throw new Error ("El Id no existe");}
         
         return posicion;
    }

    export function cargarCliente(cliente:string, arrayCliente: Array<Cliente>) : void{
        ​
            let propiedadCliente : string[] = cliente.split(',');
            let idCliente: string = propiedadCliente[0];
            let nombre: string = propiedadCliente[1];
            let telefono:string = propiedadCliente[2];
            let visitas:string= propiedadCliente[3];
            let clienteVIP:string= propiedadCliente[4];
            let listaMascotas:Array<Mascota>=[];
                         
            let nuevoCliente:Cliente = new Cliente (Number(idCliente),nombre,Number(telefono),Number(visitas), Boolean(clienteVIP),listaMascotas);
        ​        arrayCliente.push(nuevoCliente);
        }
   export const obtenerPosicionCliente = (arrayCliente: Array<Cliente>): number=>{
        let esta: boolean=false
        let posicion: number=0
        let ubicacion:number=0
        let id:number= ReadlineSync.questionInt("Ingrese el Id del cliente : ");
        for (let i:number=0; i< arrayCliente.length; i++){
    
            if ( arrayCliente[i].getidCliente() === Number(id)){
                esta= true;
                ubicacion=i;
            } 
        }
         if (esta== true){
            posicion= ubicacion;
         }else{
            throw new Error ("El Id no existe");}
         
         return posicion;
    }
    export function cargarMascotas(mascota:string, arrayMascotas: Array<Mascota>) : void{
        ​
            let propiedadMascota : string[] = mascota.split(',');
            let idMascota: string = propiedadMascota[0];
            let nombre: string = propiedadMascota[1];
            let clase:string = propiedadMascota[2];
            let especie:string= propiedadMascota[3]
            
                         
            let nuevaMascota:Mascota = new Mascota(Number(idMascota),nombre,clase,especie);
        ​        arrayMascotas.push(nuevaMascota);
        }
   export const obtenerPosicionMascota = (arrayMascota: Array<Mascota>): number=>{
        let esta: boolean=false
        let posicion: number=0
        let ubicacion:number=0
        let id:number= ReadlineSync.questionInt("Ingrese el Id de la mascota: ");
        let nombre: string= ReadlineSync.question("Ingrese el nombre de la mascota: ");
        for (let i:number=0; i< arrayMascota.length; i++){
    
            if ( arrayMascota[i].getidMascota() === Number(id) && arrayMascota[i].getnombre().toLowerCase()=== nombre.toLowerCase()){
                esta= true;
                ubicacion=i;
            } 
        }
         if (esta== true){
            posicion= ubicacion;
         }else{
            throw new Error ("El Id no existe");}
         
         return posicion;
    }
   export const consultarOtraOpcion= ():void =>{
        console.log("Desea realizar otra consulta");
        let consulta:string = ReadlineSync.question("SI/NO?:  ");
        if(consulta.toLowerCase()=="si"){
            mostrarMenu();
        }
    }
    //Iniciar programa
//cargar datos veterinaria
 let datosVeterinaria: GestorDeArchivos = new GestorDeArchivos("./textos/veterinaria.txt");
 ​let listaDeVeterinarias: Array<Veterinaria>=[];

for (let i : number= 0; i < datosVeterinaria.getArregloString().length; i++){

    cargarVeterinaria(datosVeterinaria.getArregloString()[i], listaDeVeterinarias);
}
//cargar datos proveedor
let datosProveedor: GestorDeArchivos = new GestorDeArchivos("./textos/proveedor.txt");
let listaDeProveedores: Array<Proveedor>=[];

for (let i:number = 0; i < datosProveedor.getArregloString().length; i++){

    cargarProveedor(datosProveedor.getArregloString()[i], listaDeProveedores);
}
// Cargar cliente
let datosClientes: GestorDeArchivos = new GestorDeArchivos("./textos/cliente.txt");
let listaDeClientes: Array<Cliente>=[];

for (let i:number = 0; i < datosClientes.getArregloString().length; i++){

    cargarCliente(datosClientes.getArregloString()[i], listaDeClientes);
}
// Cargar mascota
let datosMascotas: GestorDeArchivos = new GestorDeArchivos("./textos/mascota.txt");
let listaDeMacotas: Array<Mascota>=[];

for (let i:number = 0; i < datosMascotas.getArregloString().length; i++){

    cargarMascotas(datosMascotas.getArregloString()[i], listaDeMacotas);
}

let proveedor: RedVeterinaria= new RedVeterinaria(listaDeProveedores,listaDeVeterinarias);    
let veterinaria: RedVeterinaria = new RedVeterinaria(listaDeProveedores, listaDeVeterinarias);
let cliente: Veterinaria= new Veterinaria(0,"","",listaDeClientes);
let mascota: Cliente= new Cliente(0,"",0,1, false,listaDeMacotas);

export const consultarOtraOpcion1= ():void =>{
        console.log("Desea realizar otra consulta");
        let consulta:string = ReadlineSync.question("SI/NO?:  ");
        if(consulta.toLowerCase()=="si"){
            mostrarMenu1();
        }
    }
export const mostrarMenu1=():void=>{
        
        console.log("MENU");
        console.log("1- Alta");
        console.log("2- Modificar"); 
        console.log("3- Baja");
        console.log("4- Consultar");
        console.log("5- Mostrar listado")
        
    }            
export const mostrarMenu=():void=>{
    let menu:number= 0;
    let menu1:number=0;
    console.log("MENU");
    console.log("1- Veterinarias");
    console.log("2- Proveedores"); 
    console.log("3- Clientes");
    console.log("4- Mascotas");
                   
    menu= ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menu){
         case 1:
            mostrarMenu1();
            menu1=ReadlineSync.questionInt("Ingrese el numero de opcion: ");
            switch(menu1){            
            case 1:
            try{
            console.log("Dar de alta una veterinaria");
            veterinaria.altaVeterinaria();
            consultarOtraOpcion1();}
            catch(error){
                console.log("Ocurrió un error: " + error.message);
                consultarOtraOpcion1();
            }            
            break;
            case 2:
                try {
                console.log("Modicar veterinaria");
                let posicion:number= obtenerPosicionVeterinaria(listaDeVeterinarias);
                veterinaria.modificarVeterinaria(posicion);
                consultarOtraOpcion1();
                 } catch (error) {
                    console.log ("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
            case 3:
                try{
                console.log("Dar de baja");
                let ubicacion:number= obtenerPosicionVeterinaria(listaDeVeterinarias);
                veterinaria.bajaVeterinaria(ubicacion);
                consultarOtraOpcion1();}
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
             case 4:
                try{
                console.log("consultar por una veterinaria");
                let posicion1:number= obtenerPosicionVeterinaria(listaDeVeterinarias);
                veterinaria.mostrarUnaVeterinaria(posicion1);
                consultarOtraOpcion1();}
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
             case 5:
                console.log("Listado de veterinarias");
                console.log(listaDeVeterinarias);
                consultarOtraOpcion1();
                break;
            }
        case 2:
            mostrarMenu1();
            menu1=ReadlineSync.questionInt("Ingrese el numero de opcion: ");            
            switch(menu1){
            case 1:
            try{
            console.log("Dar de alta un proveedor");
            proveedor.altaProveedor();
            consultarOtraOpcion1();}
            catch(error){
                console.log("Ocurrió un error: " + error.message);
                consultarOtraOpcion1();
            }            
            break;
            case 2:
                try {
                console.log("Modicar proveedor");
                let posicion:number= obtenerPosicionProveedor(listaDeProveedores);
                proveedor.modificarProveedor(posicion);
                consultarOtraOpcion1();
                 } catch (error) {
                    console.log ("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
            case 3:
                try{
                console.log("Dar de baja");
                let ubicacion:number= obtenerPosicionProveedor(listaDeProveedores);
                proveedor.bajaProveedor(ubicacion);
                consultarOtraOpcion1();}
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
             case 4:
                try{
                console.log("consultar por un proveedor");
                let posicion1:number= obtenerPosicionProveedor(listaDeProveedores);
                proveedor.mostrarUnproveedor(posicion1);
                consultarOtraOpcion1();}
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
             case 5:
                console.log("Listado de proveedores");
                console.log(listaDeProveedores);
                consultarOtraOpcion1();
                break;
            }
        case 3:
            mostrarMenu1();
            menu1=ReadlineSync.questionInt("Ingrese el numero de opcion: ");
            switch(menu1){
            case 1:
            try{
            console.log("Dar de alta un cliente");
            cliente.altaCliente();
            consultarOtraOpcion1();}
            catch(error){
                console.log("Ocurrió un error: " + error.message);
                consultarOtraOpcion1();
            }            
            break;
            case 2:
                try {
                console.log("Modicar cliente");
                let posicion:number= obtenerPosicionCliente(listaDeClientes);
                cliente.modificarCliente(posicion);
                consultarOtraOpcion1();
                 } catch (error) {
                    console.log ("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
            case 3:
                try{
                console.log("Dar de baja");
                let ubicacion:number= obtenerPosicionCliente(listaDeClientes);
                cliente.bajaCliente(ubicacion);
                consultarOtraOpcion1();}
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
             case 4:
                try{
                console.log("consultar por un Cliente");
                let posicion1:number= obtenerPosicionCliente(listaDeClientes);
                cliente.mostrarUnCliente(posicion1);
                consultarOtraOpcion1();}
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }
                break;
             case 5:
                console.log("Listado de clientes");
                console.log(listaDeClientes);
                consultarOtraOpcion1();
                break;};
                
        case 4:
            mostrarMenu1();
            menu1=ReadlineSync.questionInt("Ingrese el numero de opcion: ");            
            switch(menu1){
              case 1:
                try{
                    console.log("Dar de alta una mascota");
                    mascota.altaMascota();
                    consultarOtraOpcion1();
                    }catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();
                }            
                break;
                case 2:
                    try {
                    console.log("Modicar mascota");
                    let posicion:number= obtenerPosicionMascota(listaDeMacotas);
                    mascota.modificarMascota(posicion);
                    consultarOtraOpcion1();
                     } catch (error) {
                        console.log ("Ocurrió un error: " + error.message);
                        consultarOtraOpcion1();
                    }
                    break;
                case 3:
                    try{
                    console.log("Dar de baja");
                    let ubicacion:number= obtenerPosicionMascota(listaDeMacotas);
                    mascota.bajaMascota(ubicacion);
                    consultarOtraOpcion1();}
                    catch(error){
                        console.log("Ocurrió un error: " + error.message);
                        consultarOtraOpcion1();
                    }
                    break;
                 case 4:
                    try{
                    console.log("consultar por una mascota");
                    let posicion1:number= obtenerPosicionMascota(listaDeMacotas);
                    mascota.mostrarUnaMascota(posicion1);
                    consultarOtraOpcion1();}
                    catch(error){
                        console.log("Ocurrió un error: " + error.message);
                        consultarOtraOpcion1();
                    }
                    break;
                 case 5:
                    console.log("Listado de mascotas");
                    console.log(listaDeMacotas);
                    consultarOtraOpcion1();
                    break;}          
            

    }}