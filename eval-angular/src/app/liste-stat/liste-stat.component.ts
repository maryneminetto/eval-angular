import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-liste-stat',
  templateUrl: './liste-stat.component.html',
  styleUrls: ['./liste-stat.component.scss'],
})
export class ListeStatComponent implements OnInit {
  @Input() public uneStat!: Statistique;
  public tabStats: Statistique[] = [];

  public stat1: Statistique;
  public stat2: Statistique;
  public stat3: Statistique;

  constructor() {
    this.stat1 = new Statistique('1', 'Frigo', 50, 'danger');
    this.stat2 = new Statistique('2', 'Machine à laver', 20, 'succes');
    this.stat3 = new Statistique('3', 'Machine à café', 10, 'warning');

    this.tabStats.push(this.stat1, this.stat2, this.stat3);
  }

  ngOnInit(): void {}
}
