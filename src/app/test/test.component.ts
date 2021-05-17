import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import '@we5a/components-set/';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('test') myTestComponent: ElementRef<HTMLMyComponentElement>;
  @ViewChild('webplayer') webcamPlayer: ElementRef<HTMLWebcamPlayerElement>;

  async onAction() {
    await this.myTestComponent.nativeElement.sayHello();
  }

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    document.addEventListener('screenshot', this.handleScreenshot)
  }

  ngAfterViewInit() {
    console.log('Player', this.webcamPlayer.nativeElement);
  }

  handleScreenshot(e) {
    console.log('Screenshot handler', e.detail);
    this.galleryService.addImage(e.detail);
  }

  ngOnDestroy() {
    document.removeEventListener('screenshot', this.handleScreenshot);
  }
}
