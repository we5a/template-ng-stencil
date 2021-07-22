import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import '@we5a/components-set/';
import { Subscription } from 'rxjs';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-test',
  templateUrl: './recognizing-block.component.html',
  styleUrls: ['./recognizing-block.component.scss']
})
export class RecognizingBlockComponent implements AfterViewInit, OnInit, OnDestroy {

  private subscriptions: Subscription;
  @ViewChild('test') myTestComponent: ElementRef<HTMLMyComponentElement>;
  @ViewChild('webplayer') webcamPlayer: ElementRef<HTMLWebcamPlayerElement>;

  async onAction() {
    await this.myTestComponent.nativeElement.sayHello();
  }

  constructor(private galleryService: GalleryService, private router: Router) {
    this.subscriptions = new Subscription();
   }

  ngOnInit() {
    const sub = this.router.events.subscribe(async (value) => {
      if (value instanceof NavigationStart && value.url === '/gallery') {
        const persons = await this.webcamPlayer.nativeElement.getPersons();
        console.log('Persons', persons);
      }
    });
    this.subscriptions.add(sub);
  }

  ngAfterViewInit() {
    //   console.log('Player', this.webcamPlayer.nativeElement);
  }

  handleScreenshot(e) {
    this.galleryService.addImage(e.detail);
  }


  handlePersons(e) {
    console.log('Persons was updated', e.detail);
    this.galleryService.updatePersons(e.detail);

    // works
    // this.webcamPlayer.nativeElement.getPersons().then(p => {
    //   console.log('Saved Persons', p);
    // });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
