import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [RouterModule],
  template: `
    <h2>Dashboard</h2>
    <p>Clicks: {{ clicks() }}</p>
    <button (click)="clicks.set(clicks() + 1)">Click me</button>
    <router-outlet></router-outlet>
  `})
export class DashboardComponent {
  clicks = signal(0);

}

