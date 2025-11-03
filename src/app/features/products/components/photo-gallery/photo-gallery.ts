import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../../../models/photo-product.model';
import { firstValueFrom } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.scss'
})
export class PhotoGallery {
  private http = inject(HttpClient);

  photos = signal<Photo[]>([]);
  error = signal<string | null>(null);
  isLoading = signal<boolean>(false);

  likedPhotos = signal<Set<number>>(new Set());

  ngOnInit(): void {
    this.loadPhotos();
  }

  async loadPhotos() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const photos = await firstValueFrom(
        this.http.get<Photo[]>('https://picsum.photos/v2/list?page=27&limit=20')
      );
      this.photos.set(photos);
    } catch (err) {
      this.error.set('Erreur lors du chargement des images');
      console.error('Erreur : ', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  async refreshPhotos() {
    await this.loadPhotos();
  }

  toggleLike(photoId: number): void {
    const currentLikes = new Set(this.likedPhotos());
    if (currentLikes.has(photoId)) {
      currentLikes.delete(photoId);
    } else {
      currentLikes.add(photoId);
    }
    this.likedPhotos.set(currentLikes);
  }

  isLiked(photoId: number): boolean {
    return this.likedPhotos().has(photoId);
  }
}
