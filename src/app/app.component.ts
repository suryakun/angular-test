import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header>
      <img src="logo.png" alt="Angular Logo" />
    </header>

    <router-outlet />
  `,
  styles: [
    `
      header {
        display: flex;
        align-items: center;
        background-color: #14141A;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
      }

      img {
        height: 24px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-test';
}
