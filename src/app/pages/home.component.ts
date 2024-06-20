import { Component } from '@angular/core';
import { FolderComponent } from '../components/folder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FolderComponent],
  template: `
    <div>
      <app-folder></app-folder>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
