import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../service/medicion.service';



@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
  
  measures: Medicion[];
  tableStyle = 'material';

  constructor(public medicionService:MedicionService, private activedRoute: ActivatedRoute) {  
    let idDispositivo = ​ this​.activedRoute.snapshot​.paramMap​.get​('id');

    //Promesa de la tabla de mediciones
    this.medicionService.getMedicionesByDispositivoId(idDispositivo).then((mediciones)=>{
     this.measures = mediciones;
     console.log("Array de mediciones:  "+ this.measures);
     }); 

  }

  ngOnInit() { }

}
