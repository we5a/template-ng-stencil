import { Component } from '@angular/core';
import { title } from 'add-pack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slogan = title;
}
