import { Component, OnInit } from '@angular/core';
import {DoadorServiceService} from '../../shared/services/doador-service.service';


@Component({
  selector: 'app-media-obesidade-sexo',
  templateUrl: './media-obesidade-sexo.component.html',
  styleUrls: ['./media-obesidade-sexo.component.css']
})
export class MediaObesidadeSexoComponent implements OnInit {

  pathsexo:String;
  mediaObesidade: Number;
  constructor(private service: DoadorServiceService) { }

  ngOnInit(): void {
  }

  selectChangeHandler(event : any){
    switch (event.target.value) {
      case "homens":
        this.getIMCMedioByFaixaEtaria('/obesidade/homens');
      break;
      case "mulheres":
        this.getIMCMedioByFaixaEtaria('/obesidade/mulheres');
      break;
      default:
      break;
  }
}

  getIMCMedioByFaixaEtaria(pathsexo){
    this.service.getDoadoresByFaixaEtaria(pathsexo).subscribe(res => {
      return this.mediaObesidade = res;      
    })
  }

}
