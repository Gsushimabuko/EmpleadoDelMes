import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleados2Component } from './empleados2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Empleados2Component
  ],
  imports: [
    CommonModule,
    FormsModule
   
  ],
  exports:[
    Empleados2Component
  ]
})
export class Empleados2Module { }
