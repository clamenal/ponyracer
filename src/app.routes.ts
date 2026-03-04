import { Routes } from '@angular/router';
import { Races } from './app/races/races';
import { Home } from './app/home/home';

export const routes: Routes = [
  {
    path: 'races',
    component: Races
  },
  {
    path: '',
    component: Home
  }
];
