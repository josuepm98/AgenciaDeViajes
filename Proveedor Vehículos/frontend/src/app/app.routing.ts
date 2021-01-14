import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/vehiculo',
      pathMatch: 'full'
    },

    {
      path: 'vehiculo',
      component: VehiculoComponent,
    },

    {
      path: '**',
      component: ErrorComponent,
    }
  ];

  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
  
