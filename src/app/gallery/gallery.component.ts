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

  deleteHandler(event, data) {
    console.log('Need to delete', data);
  }

}
