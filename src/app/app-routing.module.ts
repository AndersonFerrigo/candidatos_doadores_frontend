import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoadorTableComponent }from './views/doador-table/doador-table.component';
import { EstatisticasCandidatosComponent } from './views/estatisticas-candidatos/estatisticas-candidatos.component';

const routes: Routes = [{
    path:"",
    component: DoadorTableComponent
  },
  {
    path:"estatisticas",
    component: EstatisticasCandidatosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
