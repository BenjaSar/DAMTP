import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispositivos } from '../model/Dispositivo';
import { Medicion } from '../model/Medicion';
import { logRiego } from '../model/Riego';



@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  listadoDispositivo: Array<Dispositivos> = new Array<Dispositivos>();
  

  urlBackend = 'http://localhost:8000/api'; //Url donde está hosteada la API



  constructor(private _http:HttpClient) {}
  
  getDispositivos():Promise<Dispositivos[]>{
     return this._http.get(this.urlBackend + "/dispositivo").toPromise().then((listado:Dispositivos[])=>{
      return listado;
     });
   }

  getDispositivo(id):Promise<Dispositivos>{
     return this._http.get(this.urlBackend + "/dispositivo/" + id).toPromise().then((dispositivo:Dispositivos)=>{
        return dispositivo;
     });
   }

  getMedicionByDispositivoId(id):Promise<Medicion>{
    return this._http.get(this.urlBackend + "/dispositivo/"+id).toPromise().then((measure:Medicion)=>{
     return measure;
    });
  }
}
