import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivos } from '../model/Dispositivo';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { MedicionService } from '../service/medicion.service';
import { Medicion } from '../model/Medicion';
import { ListadoService } from '../service/listado.service';
import { RiegoService } from '../service/riego.service';
import { logRiego } from '../model/Riego';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);



@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  public idElectrovalvula;
  abrirElectrovalvula: boolean = true;
  public id;
  public idDispositivo;
  public disp : Dispositivos;
  medicion: Medicion;
  public logriego : logRiego;
  public logRiegoInsert: logRiego;
  public logsRiego : logRiego[];
  public mensajeButton: string = "ABRIR ELECTROVALVULA";
 
  constructor(private router: ActivatedRoute, public medicionService:MedicionService, public listadoServ:ListadoService, private route:ActivatedRoute, public riegoService: RiegoService) { 

  }

  ngOnInit() {
    this.dataUpdate();
  }

  ionViewDidEnter() {
    
    this.generarChart();
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor'
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
  
  ionViewWillEnter(){
    this.dataUpdate();
  }  
  cambiar(){
    console.log(this.abrirElectrovalvula);
    this.abrirElectrovalvula =! this.abrirElectrovalvula;
    console.log("Se cambia por:" + this.abrirElectrovalvula);
  }

  dataUpdate(){
              
      //Promesa de listado de dispositivos. Devuelve un array con la lista de dispositivos.
      this.idDispositivo​ = ​ parseInt(this​.router.snapshot​.paramMap​.get​('id'));
      this.listadoServ.getDispositivo(this.idDispositivo).then((dispositivo)=>{
      this.disp = dispositivo;
      }); 

      //Promesa del ùltimo valor de medicion. 
      this.listadoServ.getMedicionByDispositivoId(this.idDispositivo).then((measure)=>{
      this.medicion = measure;
      console.log(this.medicion.valor);
      this.valorObtenido = Number(this.medicion.valor);
      });

      //Promesa de los logs de riego por id de electrovalvula
      //let idE = ​ parseInt(this​.route.snapshot​.paramMap​.get​('id'));
      this.riegoService.getLogByElectrovalvulaById(this.idDispositivo).then((riego)=>{
      this.logriego = riego;
      //this.logsRiego.push(this.logRiego);
      if(this.logriego.apertura == 0){
        this.mensajeButton = "ABRIR ELECTROVALVULA " + this.logriego.electrovalvulaId;
      }
      else{
        this.mensajeButton = "CERRAR ELECTROVALVULA " + this.logriego.electrovalvulaId;
      }
      });
  }


valveUpdate(){
  if(this.logriego.apertura == 0){
    this.openElectrovalve();
  }
  else {
    this.closeElectrovalve();
    this.dataUpdate();
  }
}

openElectrovalve(){
  this.logRiegoInsert.electrovalvulaId = this.idDispositivo;
    this.logRiegoInsert.fecha = new Date;
    this.logRiegoInsert.apertura = 100;

  this.riegoService.AddLogRiego(this.logRiegoInsert).then((result)=>{
    this.logRiegoInsert.apertura = 100;
    this.mensajeButton = "CERRAR ELECTROVALVULA" + this.idDispositivo;
    });
  }

closeElectrovalve(){
  this.logRiegoInsert.electrovalvulaId = this.idDispositivo;
  this.logRiegoInsert.apertura = 0;
  this.logRiegoInsert.fecha = new Date();

  this.riegoService.AddLogRiego(this.logRiegoInsert).then((result)=>{
    this.logRiegoInsert.apertura = 0;
    this.mensajeButton = "ABRIR ELECTROVALVULA" + this.idDispositivo;
    });
}  

}

