import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderComponent } from '../components/folder.component';
import { FileComponent } from '../components/file.component';
import { FilterComponent } from '../components/filter.component';
import { StorageService, Collection } from '../services/storage.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FolderComponent, FileComponent, FilterComponent, CommonModule],
  template: `
    <header>
      <img src="logo.png" alt="Angular Logo" />
      <app-filter></app-filter>
    </header>
    <div class="container" *ngFor="let collection of collections">
      <div *ngIf="collection.type === 'folder'">
        <h2>{{ collection.title }}</h2>
        <div class="collection">
          <app-folder *ngFor="let folder of collection.folders" [folder]="folder"></app-folder>
        </div>
      </div>
      <div *ngIf="collection.type === 'storage'">
        <h2>{{ collection.title }}</h2>
        <div class="collection">
          <app-file *ngFor="let file of collection.storage" [file]="file"></app-file>
        </div>
      </div>
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
      margin-bottom: 10px;
    }

    img {
      height: 24px;
    }

    .collection {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;

      h2 {
        color: #ffffff;
        font-family: 'Arial', sans-serif;
      }
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
