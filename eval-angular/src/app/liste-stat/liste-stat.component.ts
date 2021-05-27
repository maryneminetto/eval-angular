import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from 'src/models/statistique';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-liste-stat',
  templateUrl: './liste-stat.component.html',
  styleUrls: ['./liste-stat.component.scss'],
})
export class ListeStatComponent implements OnInit {
  public tabStats!: Statistique[];

  constructor(private apiService: ApiService) {
    this.apiService.getStat().then((tab) => (this.tabStats = tab));
  }

  delState(s: Statistique) {
    this.apiService.delStat(s.id).then((retourApi) => console.log(retourApi));
  }

  ngOnInit(): void {}
}
