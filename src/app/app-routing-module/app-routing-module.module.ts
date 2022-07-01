import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from '../home/home-view/home-view.component';
import { EmpleadosComponent } from '../ganadores/empleados/empleados.component';
import { Empleados2Component } from '../empleados/empleados2/empleados2.component';
const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {path:'votar',
  component: EmpleadosComponent
  },
  {path:'lista',
  component: Empleados2Component
  
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModuleModule { }
