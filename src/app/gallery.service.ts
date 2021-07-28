import { Injectable } from '@angular/core';

interface GalleryImage {
  id: string,
  image: string,
}

interface Person {
  id: string;
  name: string;
  age: number;
  gender: string;
  descriptors: Float32Array[];
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public images: GalleryImage[] = [];
  public persons: Person[] = [];

  constructor() { }

  addImage(image: GalleryImage) {
    this.images.push(image);
  }

  deleteImage(imageId: string) {
    this.images = this.images.filter(el => el.id !== imageId);
  }

  updatePersons(persons: Person[]) {
    this.persons = persons;
  }

  deletePerson(personId: string) {
    this.persons = this.persons.filter(el => el.id !== personId);
  }
}
