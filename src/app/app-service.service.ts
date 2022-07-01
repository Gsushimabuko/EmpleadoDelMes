import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Empleado } from './interfaces/empleados';
import { Ganador } from './interfaces/ganador';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public _personas: Empleado[] = []
  public _ganadores: Ganador[] = []

  get personas(){
    return [...this._personas]
  }

  get ganadores(){
    return [...this._ganadores]
  }
  
  
  constructor(private http: HttpClient) {
    
  }
  
  data = {
    nombre: 'prueba-post',
    apellido:'prueba-post',
    edad: 10,
    puesto:"?"
    
  }

  getGanadores(){ 
    
    this.http.get<Ganador[]>('/personas/ganadores').subscribe((response) => {
    this._ganadores = response

    })
  }
  
  getPersonas(){

    //GET TRAER A TODAS LAS PERSONAS
      this.http.get<Empleado[]>('/personas').subscribe((response) => {
        this._personas = response

    })}

    
  postPersonas(personaObjeto:Empleado){
      //POST AGREGAR PERSONA A LA TABLA
       this.http.post('/personas/agregar',{data: personaObjeto}, { responseType: 'text' })
       .subscribe((response) => {
          console.log("RESPUESTA", response)
        })
        
  }

  postGanador(ganador:any){
    //POST AGREGAR PERSONA A LA TABLA
     this.http.post('/personas/ganador/agregar',{data: ganador}, { responseType: 'text' })
     .subscribe((response) => {
        console.log("RESPUESTA", response)
      })
      
}
  deleteGanador(id:string){

    console.log("ID: ",id)

    this.http.delete('/personas/ganador/borrar/'+id, { responseType: 'text' } )
        .subscribe((response) => {
          console.log("RESPUESTA", response)
        });

    
  }

}
