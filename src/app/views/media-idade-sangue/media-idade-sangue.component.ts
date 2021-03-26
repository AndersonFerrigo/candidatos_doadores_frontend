import { Component, OnInit } from '@angular/core';
import {DoadorServiceService} from '../../shared/services/doador-service.service';

@Component({
  selector: 'app-media-idade-sangue',
  templateUrl: './media-idade-sangue.component.html',
  styleUrls: ['./media-idade-sangue.component.css']
})
export class MediaIdadeSangueComponent implements OnInit {

  mediaIdade: Number;

  constructor(private service: DoadorServiceService) { }

  ngOnInit(): void {
  }

  selectChangeHandler(event : any){
    switch (event.target.value) {
      case "APos":
        this.getMediaIdadeTipoSanguineoAPos();
      break;
      case "ANeg":
        this.getMediaIdadeTipoSanguineoANeg();
      break;
      case "BPos":
        this.getMediaIdadeTipoSanguineoBPos();
      break;
      case "BNeg":
        this.getMediaIdadeTipoSanguineoBNeg();
      break;
      case "ABPos":
        this.getMediaIdadeTipoSanguineoABPos();
      break;
      case "ABNeg":
        this.getMediaIdadeTipoSanguineoABNeg();
      break;
      case "OPos":
        this.getMediaIdadeTipoSanguineoOPos();
      break;
      case "ONeg":
        this.getMediaIdadeTipoSanguineoONeg();
      break;
    
      default:
      break;
  }
}
getMediaIdadeTipoSanguineoAPos(){
  this.service.getMediaIdadeTipoSanguineoAPos().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoANeg(){
  this.service.getMediaIdadeTipoSanguineoANeg().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoBPos(){
  this.service.getMediaIdadeTipoSanguineoBPos().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoBNeg(){
  this.service.getMediaIdadeTipoSanguineoBNeg().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoABPos(){
  this.service.getMediaIdadeTipoSanguineoABPos().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoABNeg(){
  this.service.getMediaIdadeTipoSanguineoABNeg().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoOPos(){
  this.service.getMediaIdadeTipoSanguineoOPos().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

getMediaIdadeTipoSanguineoONeg(){
  this.service.getMediaIdadeTipoSanguineoONeg().subscribe(res => {
    return this.mediaIdade = res;      
  })
}

}
