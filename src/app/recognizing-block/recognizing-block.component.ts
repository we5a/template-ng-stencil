import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import '@we5a/components-set/';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-test',
  templateUrl: './recognizing-block.component.html',
  styleUrls: ['./recognizing-block.component.scss']
})
export class RecognizingBlockComponent implements OnInit, AfterViewInit, OnDestroy {

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
  //   console.log('Player', this.webcamPlayer.nativeElement);
  }

  handleScreenshot(e) {
    this.galleryService.addImage(e.detail);
  }

  ngOnDestroy() {
    document.removeEventListener('screenshot', this.handleScreenshot);
  }
}
