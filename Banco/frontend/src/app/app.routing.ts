import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas
import { BancoComponent } from './components/banco/banco.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [

    {
      path: '',
      redirectTo: '/banco',
      pathMatch: 'full'
    },

    {
      path: 'banco',
      component: BancoComponent,
    },
    
    {
      path: '**',
      component: ErrorComponent,
    }
  ];

  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
  
