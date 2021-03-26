import { Component, OnInit } from '@angular/core';
import { DoadorServiceService} from '../../shared/services/doador-service.service';


let faixa;

@Component({
  selector: 'app-imc-medio-fx-etaria',
  templateUrl: './imc-medio-fx-etaria.component.html',
  styleUrls: ['./imc-medio-fx-etaria.component.css']
})
export class ImcMedioFxEtariaComponent implements OnInit {

  imcMedio:Number;
  
  constructor(private service: DoadorServiceService) {
  }
  
  ngOnInit(): void { }

  selectChangeHandler(event : any){
    switch (event.target.value) {
      case "fx1":
        faixa = 'faixa1'
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      case "fx2":
        faixa = "faixa2";  
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      case "fx3":
        faixa = "faixa3";
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      case 'fx4':
        faixa = 'faixa4'
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      case 'fx5':
        faixa = 'faixa5'
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      case 'fx6':
        faixa = 'faixa6'
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      case 'fx7':
        faixa = 'faixa7'
        this.getIMCMedioByFaixaEtaria(faixa);
      break;
      default:
      break;
  }
}

  getIMCMedioByFaixaEtaria(faixa){
    this.service.getDoadoresByFaixaEtaria(faixa).subscribe(res => {
      this.imcMedio = res;
      return this.imcMedio;
    })
  }  
}
