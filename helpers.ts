import RedVeterinaria from "./class/RedVeterinaria";
import Veterinaria from "./class/Veterinaria";
import Proveedor from "./class/Proveedor";
import Cliente from "./class/Cliente";
import Mascota from "./class/Mascota";
import GestorDeArchivos from "./class/GestorDeArchivos";
import * as ReadlineSync from "readline-sync";

export function crearNumeroAleatoreo(max:number){
return Math.floor(Math.random()*max);
};
export function hacerLinea():void{
    let linea:string=("-");
    for (let i:number=0; i<100;i++){
        linea+="-";
    };
    console.log(linea);
};
export function cargarVeterinaria(veterinaria:string, arrayVeterinaria: Array<Veterinaria>,listaClientes:Array<Cliente>) : void{
        ​
            let propiedadVeterinaria : string[] = veterinaria.split(','); 
            let idVeterinaria:string= propiedadVeterinaria[0]          
            let nombre: string = propiedadVeterinaria[1];
            let direccion:string = propiedadVeterinaria[2];
                                     
            let nuevaVeterinaria:Veterinaria = new Veterinaria(nombre,direccion,listaClientes,Number(idVeterinaria));
        ​        arrayVeterinaria.push(nuevaVeterinaria);
};
export const obtenerPosicionVeterinaria = (arrayVeterinaria: Array<Veterinaria>): number=>{
    let esta: boolean=false;
    let posicion: number=0;
    let ubicacion:number=0;
    let id:number= ReadlineSync.questionInt("Ingrese el Id de la Veterinaria : ");
    for (let i:number=0; i< arrayVeterinaria.length; i++){

        if ( arrayVeterinaria[i].getIdVeterinaria() === Number(id)){
            esta= true;
            ubicacion=i;
        };
    };
    if (esta== true){
        posicion= ubicacion;
    }else{
        throw new Error ("El Id no existe");
    };         
    return posicion;
};
 export function cargarProveedor(proveedor:string, arrayProveedor: Array<Proveedor>) : void{
        ​
    let propiedadProveedor : string[] = proveedor.split(',');
    let numVeterinaria:string=propiedadProveedor[0];
    let idProveedor:string=propiedadProveedor[1]
    let nombre: string = propiedadProveedor[2];
    let telefono:string = propiedadProveedor[3];
                                
    let nuevoProveedor:Proveedor = new Proveedor (Number(numVeterinaria),nombre,Number(telefono),Number(idProveedor));
​    arrayProveedor.push(nuevoProveedor);
};
export const obtenerPosicionProveedor = (arrayProveedor: Array<Proveedor>): number=>{
    let esta: boolean=false;
    let posicion: number=0;
    let ubicacion:number=0;
    let id:number= ReadlineSync.questionInt("Ingrese el Id del proveedor : ");
    for (let i:number=0; i< arrayProveedor.length; i++){

        if ( arrayProveedor[i].getIdProveedor() === Number(id)){
            esta= true;
            ubicacion=i;
        };
    };
    if (esta== true){
        posicion= ubicacion;
    }else{
        throw new Error ("El Id no existe");
    };
    return posicion;
    };
export function cargarCliente(cliente:string, arrayCliente: Array<Cliente>,listaDeMascotas:Array<Mascota>) : void{
        ​
    let propiedadCliente : string[] = cliente.split(',');
    let numVeterinaria:string=propiedadCliente[0];
    let idCliente:string = propiedadCliente[1];
    let nombre: string = propiedadCliente[2];
    let telefono:string = propiedadCliente[3];
    let visitas:string= propiedadCliente[4];         
    
    let nuevoCliente:Cliente = new Cliente (Number(numVeterinaria),nombre,Number(telefono),Number(visitas),listaDeMascotas,Number(idCliente));
​       
    arrayCliente.push(nuevoCliente);
};
export const obtenerPosicionCliente = (arrayCliente: Array<Cliente>): number=>{
    let esta: boolean=false;
    let posicion: number=0;
    let ubicacion:number=0;
    let id:number= ReadlineSync.questionInt("Ingrese el Id del cliente : ");
    for (let i:number=0; i< arrayCliente.length; i++){

        if ( arrayCliente[i].getIdCliente() === Number(id)){
            esta= true;
            ubicacion=i;
        } ;
    };
        if (esta== true){
        posicion= ubicacion;
        }else{
        throw new Error ("El Id no existe");
        };
        return posicion;
};
export function cargarMascotas(mascota:string, arrayMascotas: Array<Mascota>) : void{
        ​
    let propiedadMascota : string[] = mascota.split(',');
    let idMascota: string = propiedadMascota[0];
    let nombre: string = propiedadMascota[1];
    let clase:string = propiedadMascota[2];                       
                    
    let nuevaMascota:Mascota = new Mascota(Number(idMascota),nombre,clase);
​    arrayMascotas.push(nuevaMascota);
};
export const obtenerPosicionMascota = (arrayMascota: Array<Mascota>): number=>{
    let esta: boolean=false;
    let posicion: number=0;
    let ubicacion:number=0;
    let id:number= ReadlineSync.questionInt("Ingrese el Id de la mascota: ");
    let nombre: string= ReadlineSync.question("Ingrese el nombre de la mascota: ");
    for (let i:number=0; i< arrayMascota.length; i++){    
        if ( arrayMascota[i].getIdMascota() === Number(id) && arrayMascota[i].getNombre().toLowerCase()=== nombre.toLowerCase()){
            esta= true;
            ubicacion=i;
        };
    };
    if (esta== true){
        posicion= ubicacion;
    }else{
        throw new Error ("El Id no existe");
    };
    return posicion;
};
   
    //Iniciar programa
// Cargar mascota
let datosMascotas: GestorDeArchivos = new GestorDeArchivos("./textos/mascota.txt");
let listaDeMacotas: Array<Mascota>=[];
for (let i:number = 0; i < datosMascotas.getArregloString().length; i++){

    cargarMascotas(datosMascotas.getArregloString()[i], listaDeMacotas);
};
// Cargar cliente
let datosClientes: GestorDeArchivos = new GestorDeArchivos("./textos/cliente.txt");
let listaDeClientes: Array<Cliente>=[];

for (let i:number = 0; i < datosClientes.getArregloString().length; i++){

    cargarCliente(datosClientes.getArregloString()[i], listaDeClientes,listaDeMacotas);
    
};
//cargar datos veterinaria
 let datosVeterinaria: GestorDeArchivos = new GestorDeArchivos("./textos/veterinaria.txt");
 ​let listaDeVeterinarias: Array<Veterinaria>=[];  

for (let i : number= 0; i < datosVeterinaria.getArregloString().length; i++){

    cargarVeterinaria(datosVeterinaria.getArregloString()[i], listaDeVeterinarias,listaDeClientes);
};
//cargar datos proveedor
let datosProveedor: GestorDeArchivos = new GestorDeArchivos("./textos/proveedor.txt");
let listaDeProveedores: Array<Proveedor>=[];

for (let i:number = 0; i < datosProveedor.getArregloString().length; i++){

    cargarProveedor(datosProveedor.getArregloString()[i], listaDeProveedores);
};

let redVeterinaria: RedVeterinaria= new RedVeterinaria(listaDeProveedores,listaDeVeterinarias);

export const consultarOtraOpcion1= ():void =>{
    console.log("Desea realizar otra consulta sobre veterinarias");
    let consulta:string = ReadlineSync.question("SI/NO?:  ");
    
    if(consulta.toLowerCase()=="si"){
        mostrarMenuVeterinaria();
        
    };
};
export const mostrarMenuVeterinaria=():void=>{
    let menuVeterinaria:number;
    
    console.log("MENU VETERINARIA");
    console.log("1- Alta");
    console.log("2- Modificar"); 
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    console.log("6- Mostrar clientes de una veterinaria");
    console.log("7- Mostrar proveedores de una veterinaria");
    
    menuVeterinaria=ReadlineSync.questionInt("Ingrese el numero de opcion: ");
        switch(menuVeterinaria){            
            case 1:
                hacerLinea();
                console.log("Dar de alta una veterinaria");
                redVeterinaria.altaVeterinaria(listaDeClientes);
                hacerLinea();
                consultarOtraOpcion1();                       
            break;
            case 2:
                hacerLinea();
                try {
                console.log("Modicar veterinaria");
                let posicion:number= obtenerPosicionVeterinaria(listaDeVeterinarias);
                redVeterinaria.modificarVeterinaria(posicion,listaDeClientes);
                hacerLinea();
                consultarOtraOpcion1();                
                } catch (error) {
                console.log ("Ocurrió un error: " + error.message);
                consultarOtraOpcion1();                        
                }
            break;
            case 3:
                hacerLinea();
                try{                
                console.log("Dar de baja");
                let ubicacion:number= obtenerPosicionVeterinaria(listaDeVeterinarias);
                redVeterinaria.bajaVeterinaria(ubicacion);
                hacerLinea();
                consultarOtraOpcion1();                
                    }                    
                catch(error){
                    console.log("Ocurrió un error: " + error.message);
                    consultarOtraOpcion1();                
                }
            break;
            case 4:
                hacerLinea();
                console.log("consultar por una veterinaria");
                redVeterinaria.mostrarUnaVeterinaria();
                consultarOtraOpcion1();
                hacerLinea();                    
            break;
            case 5:
                hacerLinea();
                console.log("Listado de veterinarias");
                redVeterinaria.mostrarListadoVeterinaria();                
                consultarOtraOpcion1();
            break;
            case 6:
                hacerLinea();
                console.log("Mostrar clientes de una veterinaria en particular");
                hacerLinea();
                listaDeVeterinarias[0].mostrarClienteVeterinaria();
                consultarOtraOpcion1();
            break;
            case 7:
                hacerLinea();
                console.log("Mostrar proveedores de una veterinaria en particular");
                redVeterinaria.mostrarProveedorVeterinaria();
                consultarOtraOpcion1();
            break;
            };

};
export const consultarOtraOpcion2= ():void =>{
    console.log("Desea realizar otra consulta sobre proveedores");
    let consulta:string = ReadlineSync.question("SI/NO?:  ");    
    if(consulta.toLowerCase()=="si"){
        mostrarMenuProveedor();        
    };
};  
export const mostrarMenuProveedor=():void=>{
    let menuProveedor:number;
    hacerLinea();
    console.log("MENU PROVEEDORES");
    console.log("1- Alta");
    console.log("2- Modificar"); 
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    
    menuProveedor=ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    
    switch(menuProveedor){  
        case 1:
            hacerLinea();
            console.log("Dar de alta un proveedor");
            redVeterinaria.altaProveedor(listaDeVeterinarias);
            hacerLinea();
            consultarOtraOpcion2();                      
        break;
        case 2:
            hacerLinea();
            try {
            console.log("Modicar proveedor");
            let posicion:number= obtenerPosicionProveedor(listaDeProveedores);
            redVeterinaria.modificarProveedor(posicion);
            hacerLinea();
            consultarOtraOpcion2();
                } catch (error) {
                console.log ("Ocurrió un error: " + error.message);
                consultarOtraOpcion2();
            };
        break;
        case 3:
            hacerLinea();
            try{
            console.log("Dar de baja");
            let ubicacion:number= obtenerPosicionProveedor(listaDeProveedores);
            redVeterinaria.bajaProveedor(ubicacion);
            hacerLinea();
            consultarOtraOpcion2();}
            catch(error){
                console.log("Ocurrió un error: " + error.message);
                consultarOtraOpcion2();
            };
        break;
        case 4:
            hacerLinea();
            console.log("consultar por un proveedor");
            redVeterinaria.mostrarUnProveedor();
            consultarOtraOpcion2();               
        break;
        case 5:
            hacerLinea();
            console.log("Listado de proveedores");
            redVeterinaria.mostrarListadoProveedores();
            consultarOtraOpcion2();
        break;
        };        
};
export const consultarOtraOpcion3= ():void =>{
    console.log("Desea realizar otra consulta sobre clientes");
    let consulta:string = ReadlineSync.question("SI/NO?:  ");    
    if(consulta.toLowerCase()=="si"){
        mostrarMenuCliente();        
    };
};
export const mostrarMenuCliente=():void=>{
    let menuCliente:number;
    hacerLinea();
    console.log("MENU CLIENTES");
    console.log("1- Alta");
    console.log("2- Modificar"); 
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
    console.log("6- Registrar visita");
    console.log("7- Mostrar mascotas de un cliente");

    menuCliente=ReadlineSync.questionInt("Ingrese el numero de opcion: ");

    switch(menuCliente){  
        case 1:
            hacerLinea();
            console.log("Dar de alta un cliente");
            listaDeVeterinarias[0].altaCliente(listaDeMacotas,listaDeVeterinarias);
            hacerLinea();
            consultarOtraOpcion3();        
        break;
        case 2:
            hacerLinea();
            try {
            console.log("Modicar cliente");
            let posicion:number= obtenerPosicionCliente(listaDeClientes);
            listaDeVeterinarias[0].modificarCliente(posicion,listaDeMacotas);
            hacerLinea();
            consultarOtraOpcion3();
                } catch (error) {
            console.log ("Ocurrió un error: " + error.message);
            consultarOtraOpcion3();
                }
        break;
        case 3:
            hacerLinea();
            try{
            console.log("Dar de baja");
            let ubicacion:number= obtenerPosicionCliente(listaDeClientes);
            listaDeVeterinarias[0].bajaCliente(ubicacion);
            hacerLinea();
            consultarOtraOpcion3();}
            catch(error){
            console.log("Ocurrió un error: " + error.message);
            consultarOtraOpcion3();
            };
        break;
        case 4:
            hacerLinea();
            console.log("consultar por un Cliente");
            listaDeVeterinarias[0].mostrarUnCliente();
            consultarOtraOpcion3();

        break;
        case 5:
            hacerLinea();
            console.log("Listado de clientes");
            listaDeVeterinarias[0].mostrarListadoCliente();
            consultarOtraOpcion3();
        break;
        case 6:
            hacerLinea();
            try{
            console.log("Registrar visita");
            let posicion4:number= obtenerPosicionCliente(listaDeClientes);
            listaDeClientes[posicion4].asignarVisita();
            console.log("Se regitro la visita");
            hacerLinea();
            consultarOtraOpcion3();}
            catch(error){
            console.log("Ocurrió un error: " + error.message);
            consultarOtraOpcion3();
            };        
        break;
        case 7: 
            hacerLinea();                      
            console.log("Mostrar mascotas de un cliente");
            listaDeClientes[0].mostrarMascotaCliente();
            consultarOtraOpcion3();
        break; 
    };                
};
export const consultarOtraOpcion4= ():void =>{
    console.log("Desea realizar otra consulta sobre mascotas");
    let consulta:string = ReadlineSync.question("SI/NO?:  ");    
    if(consulta.toLowerCase()=="si"){
        mostrarMenuMascota();
    };
};
export const mostrarMenuMascota=():void=>{
    let menuMascota:number;
    hacerLinea();
    console.log("MENU MASCOTAS");
    console.log("1- Alta");
    console.log("2- Modificar"); 
    console.log("3- Baja");
    console.log("4- Consultar");
    console.log("5- Mostrar listado");
   
     menuMascota=ReadlineSync.questionInt("Ingrese el numero de opcion: ");
     switch(menuMascota){
        case 1:
            hacerLinea();
            console.log("Dar de alta una mascota");
            listaDeClientes[0].agregarMascotaCliente(listaDeClientes,listaDeMacotas);
            hacerLinea();
            consultarOtraOpcion4();         
        break;
        case 2:
            hacerLinea();
            try {
            console.log("Modicar mascota");
            let posicion:number= obtenerPosicionMascota(listaDeMacotas);
            listaDeClientes[0].modificarMascota(posicion);
            hacerLinea();
            consultarOtraOpcion4();
            } catch (error) {
            console.log ("Ocurrió un error: " + error.message);
            consultarOtraOpcion4();
            };
        break;
        case 3:
            hacerLinea();
            try{
            console.log("Dar de baja");
            let ubicacion:number= obtenerPosicionMascota(listaDeMacotas);
            listaDeClientes[0].bajaMascota(ubicacion);
            hacerLinea();
            consultarOtraOpcion4();}
            catch(error){
            console.log("Ocurrió un error: " + error.message);
            consultarOtraOpcion4();
            };
        break;
        case 4:
            hacerLinea();
            console.log("consultar por las mascota de un cliente")
            listaDeClientes[0].mostrarUnaMascota();
            consultarOtraOpcion4();            
            break;
        case 5:
            hacerLinea();
            console.log("Listado de mascotas");
            listaDeClientes[0].mostrarListadoMascota();
            consultarOtraOpcion4();
        break;
    };     
};
export const consultarOtraOpcion= ():void =>{
    console.log("Desea realizar otra consulta en el menu principal");
    let consulta:string = ReadlineSync.question("SI/NO?:  ");
    hacerLinea();
    if(consulta.toLowerCase()=="si"){
        mostrarMenu();
        hacerLinea();
    };
};
export const mostrarMenu=():void=>{
    let menu:number= 0;
    hacerLinea();
    redVeterinaria.mostrarDatosRed();
    hacerLinea();
    console.log("MENU");
    console.log("1- Veterinarias");
    console.log("2- Proveedores"); 
    console.log("3- Clientes");
    console.log("4- Mascotas");

    menu= ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (menu){
         case 1:             
            mostrarMenuVeterinaria();
            consultarOtraOpcion();
            break;
        case 2:
           mostrarMenuProveedor();
           consultarOtraOpcion();
           break;               
        case 3:
            mostrarMenuCliente();
            consultarOtraOpcion();           
          break;      
        case 4:
            mostrarMenuMascota();
            consultarOtraOpcion();        
        break;
     };
    };