import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import '@we5a/components-set/';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('test') myTestComponent: ElementRef<HTMLMyComponentElement>;

  async onAction() {
    await this.myTestComponent.nativeElement.sayHello();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
