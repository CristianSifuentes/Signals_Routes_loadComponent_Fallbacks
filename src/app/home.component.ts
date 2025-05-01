import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
  <h1>Welcome to Angular 19</h1>
  <a routerLink="/dashboard">Go to Dashboard</a>
  <router-outlet></router-outlet>
`
})
export class HomeComponent {

}
