import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media-library',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Media Library</h2>
    <p>Total Items: {{ media.count() }}</p>
    <p>Movies: {{ media.movies().length }}</p>
    <p>Series: {{ media.series().length }}</p>
    <p>Favorites: {{ media.favorites().length }}</p>

    <h3>Items</h3>
    <ul>
      <li *ngFor="let item of media.all()">
        <strong>{{ item.title }}</strong> ({{ item.type }})
        <button (click)="media.toggleFavorite(item.id)">
          {{ item.favorite ? '★' : '☆' }}
        </button>
      </li>
    </ul>

    <h3>Add New Item</h3>
    <input [(ngModel)]="title" placeholder="Title" />
    <select [(ngModel)]="type">
      <option value="movie">Movie</option>
      <option value="series">Series</option>
    </select>
    <button (click)="add()">Add</button>
  `
})
export class MediaLibraryComponent {
   title = '';
   type: 'movie' | 'series' = 'movie';

   constructor(public media: MediaService) {}

   add() {
    if (this.title.trim()) {
      this.media.add({
        id: Date.now(),
        title: this.title.trim(),
        type: this.type,
        favorite: false
      });
      this.title = '';
    }
  }

}
