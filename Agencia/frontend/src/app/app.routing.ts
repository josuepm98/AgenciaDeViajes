import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/registro',
      pathMatch: 'full'
    },

    {
      path: 'registro',
      component: RegistroComponent,
    },

    {
      path: 'login',
      component: LoginComponent,
    },

    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]
    },

    {
      path: '**',
      component: ErrorComponent,
    },
  ];

  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
  
