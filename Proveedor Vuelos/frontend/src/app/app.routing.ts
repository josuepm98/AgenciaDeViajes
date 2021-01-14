import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas
import { VueloComponent } from './components/vuelo/vuelo.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [

    {
      path: '',
      redirectTo: '/vuelo',
      pathMatch: 'full'
    },

    {
      path: 'vuelo',
      component: VueloComponent,
    },
    
    {
      path: '**',
      component: ErrorComponent,
    }
  ];

  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
  
