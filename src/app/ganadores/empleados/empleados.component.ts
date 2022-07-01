import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleados';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from 'src/app/app-service.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  
})
export class EmpleadosComponent  {
  
  meses:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

  mensaje:string = ''

  @Input () ganador = {
    nombre: '',
    votos: 0,
    id:-1,
    mes:''
   }


  constructor(private service:AppServiceService) 
  {
    this.service.getPersonas()
    
  }
  get personas(){
    return this.service._personas
  }
  
  registrar(){

    const nuevoGanador = {
      idPersona: this.ganador.id,
      votos: this.ganador.votos,
      mes: this.ganador.mes,
      fecha: '2021-03-10 19:00:00'
    }

    this.postear(nuevoGanador)

    //Reseteando los inputs
    this.ganador = {
      nombre: "",
      votos: 0,
      id:-1,
      mes:""
    }

  }

  postear(data:any){
    if(this.ganador.id == -1 || this.ganador.mes == ""){
      this.mostrarMensaje('¡ERROR!')
    }else{
      
      this.service.postGanador(data)
      this.mostrarMensaje('Datos correctos')
    }
  }

  mostrarMensaje(string:string) {
    this.mensaje = string
  }
  
  
  
  
  
}
