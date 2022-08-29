import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-categoria-accion',
    loadChildren: () => import('./page-categoria-accion/page-categoria-accion.module').then( m => m.PageCategoriaAccionPageModule)
  },
  {
    path: 'page-categoria-aventura',
    loadChildren: () => import('./page-categoria-aventura/page-categoria-aventura.module').then( m => m.PageCategoriaAventuraPageModule)
  },
  {
    path: 'page-categoria-futbol',
    loadChildren: () => import('./page-categoria-futbol/page-categoria-futbol.module').then( m => m.PageCategoriaFutbolPageModule)
  },
  {
    path: 'page-inicio',
    loadChildren: () => import('./page-inicio/page-inicio.module').then( m => m.PageInicioPageModule)
  },
  {
    path: 'detalle-aventura-uno',
    loadChildren: () => import('./PagesDetalle/detalle-aventura-uno/detalle-aventura-uno.module').then( m => m.DetalleAventuraUnoPageModule)
  },
  {
    path: 'detalle-aventura-dos',
    loadChildren: () => import('./PagesDetalle/detalle-aventura-dos/detalle-aventura-dos.module').then( m => m.DetalleAventuraDosPageModule)
  },
  {
    path: 'detalle-aventura-tres',
    loadChildren: () => import('./PagesDetalle/detalle-aventura-tres/detalle-aventura-tres.module').then( m => m.DetalleAventuraTresPageModule)
  },
  {
    path: 'detalle-accion-uno',
    loadChildren: () => import('./PagesDetalle/detalle-accion-uno/detalle-accion-uno.module').then( m => m.DetalleAccionUnoPageModule)
  },
  {
    path: 'detalle-accio-dos',
    loadChildren: () => import('./PagesDetalle/detalle-accio-dos/detalle-accio-dos.module').then( m => m.DetalleAccioDosPageModule)
  },
  {
    path: 'detalle-accio-tres',
    loadChildren: () => import('./PagesDetalle/detalle-accio-tres/detalle-accio-tres.module').then( m => m.DetalleAccioTresPageModule)
  },
  {
    path: 'detalle-futbol-uno',
    loadChildren: () => import('./PagesDetalle/detalle-futbol-uno/detalle-futbol-uno.module').then( m => m.DetalleFutbolUnoPageModule)
  },
  {
    path: 'detalle-futbol-dos',
    loadChildren: () => import('./PagesDetalle/detalle-futbol-dos/detalle-futbol-dos.module').then( m => m.DetalleFutbolDosPageModule)
  },
  {
    path: 'detalle-futbol-tres',
    loadChildren: () => import('./PagesDetalle/detalle-futbol-tres/detalle-futbol-tres.module').then( m => m.DetalleFutbolTresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
