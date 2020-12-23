import { Component } from '@angular/core';
import { Dispositivos } from '../model/Dispositivo';
import { ListadoService } from '../service/listado.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

tab1Root: any = 'devices';

listadoDevices:Dispositivos[];
constructor(public listadoServ:ListadoService) {
    this.listadoServ.getDispositivos().then((listado)=>{
    this.listadoDevices = listado; 
  });
};

ngOnInit(): void {}

}
