import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>ProfileComponent</h1>
  `,
})
export class ProfileComponent {}
