import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pr-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  readonly navbarCollapsed = signal(true);

  toggleNavbar(): void {
    this.navbarCollapsed.update(value => !value);
  }
}
