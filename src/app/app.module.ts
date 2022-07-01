import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmpleadosModule } from './ganadores/empleados.module';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { Empleados2Module } from './empleados/empleados2/empleados2.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EmpleadosModule,
    Empleados2Module,
    HomeModule,
    AppRoutingModuleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
