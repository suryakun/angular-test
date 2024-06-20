import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="button-container">
      <div class="filter-icon" (click)="toggleMenu()">
        <img src="filter.svg" alt="Filter icon" class="filter-icon" />
        <span>Filters</span>
      </div>
      <div class="menu" *ngIf="showMenu">
        <div class="menu-item">
          <img src="star.svg" alt="Star icon" class="menu-icon"/>
          <span>Favourites</span>
        </div>
        <div class="menu-item">
          <img src="shared.svg" alt="Shared icon" class="menu-icon"/>
          <span>Shared files</span>
        </div>
        <div class="menu-item">
          <img src="time.svg" alt="Time icon" class="menu-icon"/>
          <span>Status</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
