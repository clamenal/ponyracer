import { Component } from '@angular/core';
import { Menu } from './menu/menu';
import { Races } from './races/races';

@Component({
  selector: 'pr-root',
  imports: [Menu, Races],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
