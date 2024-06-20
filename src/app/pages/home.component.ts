import { Component } from '@angular/core';
import { FolderComponent } from '../components/folder.component';
import { FilterComponent } from '../components/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FolderComponent, FilterComponent],
  template: `
    <div class="container">
      <app-folder></app-folder>
      <app-filter></app-filter>
    </div>
  `,
  styles: `
    .container {
      display: flex;
    }
  `
})
export class HomeComponent {

}
