import { computed, Injectable, signal } from '@angular/core';
import { MediaItem } from '../models/MediaItem';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
   private media = signal<MediaItem[]>([
    { id: 1, title: 'Inception', type: 'movie', favorite: false },
    { id: 2, title: 'Breaking Bad', type: 'series', favorite: true },
    { id: 3, title: 'The Matrix', type: 'movie', favorite: true },   ]);

    get all() {
      return this.media;
    }
    readonly count = computed(() => this.media().length);

    readonly movies = computed(() =>
      this.media().filter(m => m.type === 'movie')
    );

    readonly series = computed(() =>
      this.media().filter(m => m.type === 'series')
    );

    readonly favorites = computed(() =>
      this.media().filter(m => m.favorite)
    );

    toggleFavorite(id: number) {
      this.media.update(prev =>
        prev.map(item =>
          item.id === id ? { ...item, favorite: !item.favorite } : item
        )
      );
    }

    add(item: MediaItem) {
      this.media.update(prev => [...prev, item]);
    }
}
