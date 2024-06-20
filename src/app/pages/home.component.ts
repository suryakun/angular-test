import { Component } from '@angular/core';
import { FolderComponent } from '../components/folder.component';
import { FileComponent } from '../components/file.component';
import { FilterComponent } from '../components/filter.component';
import { StorageService, Collection } from '../services/storage.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FolderComponent, FileComponent, FilterComponent],
  template: `
    <header>
      <img src="logo.png" alt="Angular Logo" />
      <app-filter></app-filter>
    </header>
    <div class="container">
      <app-folder></app-folder>
      <app-file></app-file>
    </div>
  `,
  styles: `
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #14141A;
      color: white;
      padding: 10px;
      margin-bottom: 20px;
    }

    img {
      height: 24px;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
  `
})
export class HomeComponent {
  collections: Collection[] = []
  storageService: StorageService = inject(StorageService);

  constructor() {
    this.collections = this.storageService.getCollection();
  }
}
