import { Component } from '@angular/core';
import { FolderComponent } from '../components/folder.component';
import { FilterComponent } from '../components/filter.component';
import { FileComponent } from '../components/file.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FolderComponent, FilterComponent, FileComponent],
  template: `
    <div class="container">
      <app-folder></app-folder>
      <app-filter></app-filter>
      <app-file></app-file>
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
