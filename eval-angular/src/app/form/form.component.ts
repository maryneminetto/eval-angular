import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public title!: string;
  public value!: number;
  public appreciation!: string;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService
      .addState(this.title, this.value, this.appreciation)
      .then((state) => console.log(state));
  }

  ngOnInit(): void {}
}
