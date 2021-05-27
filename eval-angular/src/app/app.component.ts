import { Component, Input, Output } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() public tabStats: Statistique[] = [];

  constructor() {}
}
