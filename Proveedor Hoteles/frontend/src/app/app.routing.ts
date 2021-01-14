import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas
import { HotelComponent } from './components/hotel/hotel.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/hotel',
      pathMatch: 'full'
    },

    {
      path: 'hotel',
      component: HotelComponent,
    },

    {
      path: '**',
      component: ErrorComponent,
    }
  ];

  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
  
