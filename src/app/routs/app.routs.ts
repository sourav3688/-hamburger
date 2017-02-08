import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './../components/home-components/home.component';
import { successComponent } from './../components/home-components/success.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent 
    }, 
    {
        path: 'ordersuccess',
        component: successComponent
    },  
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);