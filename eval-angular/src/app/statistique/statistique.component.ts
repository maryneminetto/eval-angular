import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss'],
})
export class StatistiqueComponent implements OnInit {
  @Input() public uneStat!: Statistique;

  @Output() private demandeSuppr: EventEmitter<void>;

  constructor() {
    this.demandeSuppr = new EventEmitter();
  }

  ngOnInit(): void {}

  onSupprime() {
    this.demandeSuppr.emit();
  }
}
