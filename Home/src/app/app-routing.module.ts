import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { DispositivoPage } from './dispositivo/dispositivo.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
  ,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dispositivo/:id',
    loadChildren: () => import('./dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'medicion/:id/todas',
    loadChildren: () => import('./medicion/medicion.module').then( m => m.MedicionPageModule)
  },
  {
    path: 'riego/:id/todas',
    loadChildren: () => import('./riego/riego.module').then( m => m.RiegoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
