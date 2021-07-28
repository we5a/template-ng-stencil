import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    console.log(this.galleryService.images);
  }

  deleteHandler(event: CustomEvent, imageId: string) {
    this.galleryService.deleteImage(imageId);
  }

  forgetPerson(event, personId) {
    this.galleryService.deletePerson(personId);
  }

}
