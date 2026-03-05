import { Routes } from '@angular/router';
import { Races } from './app/races/races';
import { Home } from './app/home/home';
import { Login } from './app/login/login';

export const routes: Routes = [
  {
    path: 'races',
    component: Races
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: Home
  }
];
