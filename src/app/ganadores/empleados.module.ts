import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
