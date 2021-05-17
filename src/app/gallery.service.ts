import { Injectable } from '@angular/core';

interface GalleryImage {
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public images: GalleryImage[] = [];

  constructor() { }

  addImage(image) {
    this.images.push({ image });
  }
}


