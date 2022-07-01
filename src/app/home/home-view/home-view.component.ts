import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./style.css']
})
export class HomeViewComponent {


  constructor(private service:AppServiceService) 
  {
    this.service.getPersonas()
    this.service.getGanadores()
  }
  get personas(){
    return this.service._personas
  }
  
  get ganadores(){
    return this.service._ganadores
  }

  eliminarGanador(id:string){
    
    this.service.deleteGanador(id)
    setInterval(() => {
      window.location.reload();

    },1000)
    
    
  }
 
  
}
