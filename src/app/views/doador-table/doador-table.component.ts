import { Component, OnInit } from '@angular/core';
import { Doador } from 'src/_interface/doador.model';
import { DoadorServiceService} from '../../shared/services/doador-service.service';

@Component({
  selector: 'app-doador-table',
  templateUrl: './doador-table.component.html',
  styleUrls: ['./doador-table.component.css']
})
export class DoadorTableComponent implements OnInit {

  constructor(private service:DoadorServiceService) { }

  doadores : Doador;

  ngOnInit(): void { 
    this.getDoadoresList();
  }

  getDoadoresList(){
    this.service.getDoadores().subscribe(res => {
      this.doadores = res;
      console.warn(this.doadores);
      return this.doadores;
    })
  }
}
