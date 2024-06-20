import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        <h2 class="folder-title">TVC Raw Uploads</h2>
        <p class="folder-info">Shared folder • 1.2 GB</p>
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
  public imagePath: string = 'folder.svg';
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
