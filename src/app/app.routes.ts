import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
            },

        ]
    },
    {
        path: '404',
        loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
        data: {
            title: 'Login Page'
        }
    },

    { path: '**', redirectTo: 'dashboard' }
];
