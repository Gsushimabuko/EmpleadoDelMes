import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleados';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-empleados2',
  templateUrl: './empleados2.component.html',
  styleUrls: ['./empleados2.component.css']
})
export class Empleados2Component implements OnInit {

  mensaje:string = ''

  @Input () persona = {
    nombre: '',
    apellido:'',
    puesto:'',
    edad:0
   }


  constructor(private service:AppServiceService) 
  {
    this.service.getPersonas()
    
  }
  get personas(){
    return this.service._personas
  }
 

  ngOnInit(): void {
  }


guardar(){
  
  const nombre = this.persona.nombre
  const apellido = this.persona.apellido
  const puesto = this.persona.puesto
  const edad = this.persona.edad

  console.log(nombre,apellido,edad,puesto)

  this.postear()
}

postear(){
  console.log("POSTEANDO")
  this.service.postPersonas(this.persona)
}

}
