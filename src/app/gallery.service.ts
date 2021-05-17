import { Injectable } from '@angular/core';

interface GalleryImage {
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private images: GalleryImage[] = [];

  constructor() { }

  addImage(image) {
    this.images.push({ image });
  }
}


