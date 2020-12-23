import { Injectable } from '@angular/core';
import { Medicion } from '../model/Medicion';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  urlApi = 'http://localhost:8000/api'
  constructor(private _http:HttpClient) { }

  public getMedicionesByDispositivoId(id):Promise<Medicion[]>{
    return this._http.get(this.urlApi + "/medicion/" + id + "/todas").toPromise().then((mediciones:Medicion[])=>{
      return mediciones;
    });
  }

  AddMedicion(medicion:Medicion){
    return this._http.post(this.urlApi + "/medicion/post",{fecha:medicion.fecha,valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>{
      return result;
    });
  }
}
