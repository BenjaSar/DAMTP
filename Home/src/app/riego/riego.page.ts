import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { logRiego } from '../model/Riego';
import { RiegoService } from '../service/riego.service';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.page.html',
  styleUrls: ['./riego.page.scss'],
})
export class RiegoPage implements OnInit {

  public lRiego : logRiego[];
  idLog;
 
  constructor(private route: ActivatedRoute, public riegoService: RiegoService) {}
  ngOnInit() {
    let idE = ​ this​.route.snapshot​.paramMap​.get​('id');

    this.riegoService.getLogsByElectrovalvulaById(idE).then((logR)=>{
      this.lRiego = logR;
    });
  }  
}
