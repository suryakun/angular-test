import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Folder } from '../services/storage.service';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="folder-card">
      <div class="folder-details">
        <section>
          <img [src]="imagePath" alt="Folder icon" class="folder-icon" />
          <div class="menu-icon" (click)="toggleMenu()">&#8942;</div>
        </section>
        <h2 class="folder-title">{{folder.name}}</h2>
        <p class="folder-info">Shared folder • {{folder.size}}</p>
      </div>
      <div class="menu" id="overflow-menu" *ngIf="showMenu">
        <div class="menu-item">
          <span class="menu-icon">&#128214;</span> 
          <span>Share</span>
        </div>
        <div class="menu-item">
          <span class="menu-icon">&#9998;</span>
          <span>Rename</span>
        </div>
        <div class="menu-item">
          <span class="menu-icon">&#128465;</span>
          <span>Delete</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  @Input() folder!: Folder;
  public imagePath: string = 'folder.svg';
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
