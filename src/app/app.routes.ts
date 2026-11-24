import { Routes } from '@angular/router';
import {Liste} from './pages/liste/liste';

export const routes: Routes = [
    {path:'', redirectTo: 'evenements', pathMatch:'full'},
    {path:'evenements', component:Liste},
];
