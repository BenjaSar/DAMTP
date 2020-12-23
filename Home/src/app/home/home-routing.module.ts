import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoPage } from '../dispositivo/dispositivo.page';
import { Dispositivos } from '../model/Dispositivo';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
