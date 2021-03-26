import { Component, OnInit } from '@angular/core';
import {DoadorServiceService} from '../../shared/services/doador-service.service';

@Component({
  selector: 'app-quantidade-pessoas-sangue',
  templateUrl: './quantidade-pessoas-sangue.component.html',
  styleUrls: ['./quantidade-pessoas-sangue.component.css']
})
export class QuantidadePessoasSangueComponent implements OnInit {

  quantidadeCandidatos: Number;

  constructor(private service: DoadorServiceService) { }

  ngOnInit(): void {
  }

  selectChangeHandler(event : any){
    switch (event.target.value) {
      case "APos":
        this.getQuantidadeCandidatosPorTipoSanguineoAPos();
      break;
      case "ANeg":
        this.getQuantidadeCandidatosPorTipoSanguineoANeg();
      break;
      case "BPos":
        this.getQuantidadeCandidatosPorTipoSanguineoBPos();
      break;
      case "BNeg":
        this.getQuantidadeCandidatosPorTipoSanguineoBNeg();
      break;
      case "ABPos":
        this.getQuantidadeCandidatosPorTipoSanguineoABPos();
      break;
      case "ABNeg":
        this.getQuantidadeCandidatosPorTipoSanguineoABNeg();
      break;
      case "OPos":
        this.getQuantidadeCandidatosPorTipoSanguineoOPos();
      break;
      case "ONeg":
        this.getQuantidadeCandidatosPorTipoSanguineoONeg();
      break;
    
      default:
      break;
  }
}
getQuantidadeCandidatosPorTipoSanguineoAPos(){
  this.service.getQuantidadeDoadoresAPos().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoANeg(){
  this.service.getQuantidadeDoadoresANeg().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoBPos(){
  this.service.getQuantidadeDoadoresBPos().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoBNeg(){
  this.service.getQuantidadeDoadoresBNeg().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoABPos(){
  this.service.getQuantidadeDoadoresABPos().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoABNeg(){
  this.service.getQuantidadeDoadoresABNeg().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoOPos(){
  this.service.getQuantidadeDoadoresOPos().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

getQuantidadeCandidatosPorTipoSanguineoONeg(){
  this.service.getQuantidadeDoadoresONeg().subscribe(res => {
    return this.quantidadeCandidatos = res;      
  })
}

}
