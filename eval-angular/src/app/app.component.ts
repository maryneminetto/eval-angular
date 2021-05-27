import { Component, Input } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public tabStats: Statistique[] = [];
  public stat1: Statistique;
  public stat2: Statistique;

  constructor() {
    this.stat1 = new Statistique('1', 'Frigo', 50, 'warning');
    this.stat2 = new Statistique('2', 'Machine à laver', 20, 'succes');

    this.tabStats.push(this.stat1, this.stat2);
  }
}
