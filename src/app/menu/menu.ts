import { Component, signal } from '@angular/core';

@Component({
  selector: 'pr-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  readonly navbarCollapsed = signal(true);

  toggleNavbar(): void {
    this.navbarCollapsed.update(value => !value);
  }
}
