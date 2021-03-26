import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doador } from 'src/_interface/doador.model';
import { Estados } from 'src/_interface/estados.model';


const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class DoadorServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  public getDoadores() : Observable<Doador> {
    return this.httpClient.get<any>(apiUrl);
  }

  public getDoadoresByEstado(estado) : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/"+estado);
  }
 
  public getDoadoresByFaixaEtaria(faixaEtaria) : Observable<Number> {
    return this.httpClient.get<any>(apiUrl +"/"+faixaEtaria);
  }

  public getPercentualMulheresHomensObesos(pathsexo) : Observable<Number> {
    return this.httpClient.get<any>(apiUrl +"/"+pathsexo);
  }

  public getQuantidadeDoadoresAPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadorapos");
  }

  public getQuantidadeDoadoresANeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadoraneg");
  }

  public getQuantidadeDoadoresBPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadorbpos");
  }
  
  public getQuantidadeDoadoresBNeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadorbneg");
  }

  public getQuantidadeDoadoresABPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadorabpos");
  }

  public getQuantidadeDoadoresABNeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadorabneg");
  }

  public getQuantidadeDoadoresOPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadoropos");
  }

  public getQuantidadeDoadoresONeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/doadoroneg");
  }

  public getMediaIdadeTipoSanguineoAPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeapos")
  }

  public getMediaIdadeTipoSanguineoANeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeaneg")
  }

  public getMediaIdadeTipoSanguineoBPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadebpos")
  }

  public getMediaIdadeTipoSanguineoBNeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeaneg")
  }

  public getMediaIdadeTipoSanguineoABPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeabpos")
  }

  public getMediaIdadeTipoSanguineoABNeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeabneg")
  }

  public getMediaIdadeTipoSanguineoOPos() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeopos")
  }

  public getMediaIdadeTipoSanguineoONeg() : Observable<Number>{
    return this.httpClient.get<any>(apiUrl+"/avgidadeoneg")
  }

}
