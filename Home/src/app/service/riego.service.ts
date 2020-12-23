import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logRiego } from '../model/Riego';


@Injectable({
  providedIn: 'root'
})
export class RiegoService {

  urlApi = 'http://localhost:8000/api'
  constructor(private _http:HttpClient) { }


 getLogByElectrovalvulaById(id):Promise<logRiego>{
   return this._http.get(this.urlApi + "/riego/"+ id).toPromise().then((riego:logRiego)=>{
     return riego;
    });
  }
  
 getLogsByElectrovalvulaById(id):Promise<logRiego[]>{
  return this._http.get(this.urlApi + "/riego/"+ id + "/todas").toPromise().then((logR:logRiego[])=>{
    return logR;
   });
 }
 

 AddLogRiego(logR:logRiego){
  return this._http.post(this.urlApi + "/riego/post",{fecha:logR.fecha, apertura:logR.apertura,IdE:logR.electrovalvulaId}).toPromise().then((result)=>{
    return result;
  });
}


}
