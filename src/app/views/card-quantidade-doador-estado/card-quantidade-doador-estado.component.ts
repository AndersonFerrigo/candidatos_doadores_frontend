import { Component, OnInit } from '@angular/core';
import { Estados } from 'src/_interface/estados.model';
import { DoadorServiceService} from '../../shared/services/doador-service.service';


@Component({
  selector: 'app-card-quantidade-doador-estado',
  templateUrl: './card-quantidade-doador-estado.component.html',
  styleUrls: ['./card-quantidade-doador-estado.component.css']
})
export class CardQuantidadeDoadorEstadoComponent implements OnInit {
  
  
  quantidadeCandidatosEstado: Number;
  
  constructor(private service: DoadorServiceService) { }

  ngOnInit(): void {
  }
  
  selectChangeHandler(event : any){
 
}
  getDoadoresListByEstado(event : any){
    this.quantidadeCandidatosEstado = event.target.value;
    this.service.getDoadoresByEstado(this.quantidadeCandidatosEstado).subscribe(res => {
      this.quantidadeCandidatosEstado = res;
      return this.quantidadeCandidatosEstado;
    })   
  }  
}

