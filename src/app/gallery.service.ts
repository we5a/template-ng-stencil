import { Injectable } from '@angular/core';

interface GalleryImage {
  id: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public images: GalleryImage[] = [];

  constructor() { }

  addImage(image: GalleryImage) {
    this.images.push(image);
  }

  deleteImage(imageId: string) {
    this.images = this.images.filter(el => el.id !== imageId);
  }
}
