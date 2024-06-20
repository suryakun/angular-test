import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Storage } from '../services/storage.service';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() file!: Storage;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
