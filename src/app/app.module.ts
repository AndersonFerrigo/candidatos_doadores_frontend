import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule} from '@angular/material/icon';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DoadorTableComponent } from './views/doador-table/doador-table.component';
import { EstatisticasCandidatosComponent } from './views/estatisticas-candidatos/estatisticas-candidatos.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { CardQuantidadeDoadorEstadoComponent } from './views/card-quantidade-doador-estado/card-quantidade-doador-estado.component';
import { MatCardModule } from '@angular/material/card';
import { ImcMedioFxEtariaComponent } from './views/imc-medio-fx-etaria/imc-medio-fx-etaria.component';
import { MediaObesidadeSexoComponent } from './views/media-obesidade-sexo/media-obesidade-sexo.component';
import { MediaIdadeSangueComponent } from './views/media-idade-sangue/media-idade-sangue.component';
import { QuantidadePessoasSangueComponent } from './views/quantidade-pessoas-sangue/quantidade-pessoas-sangue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DoadorTableComponent,
    EstatisticasCandidatosComponent,
    FooterComponent,
    CardQuantidadeDoadorEstadoComponent,
    ImcMedioFxEtariaComponent,
    MediaObesidadeSexoComponent,
    MediaIdadeSangueComponent,
    QuantidadePessoasSangueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
