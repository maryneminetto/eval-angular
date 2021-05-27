export class Statistique {
  public id: string;
  public title: string;
  public value: number;
  public appreciation: string;
  constructor(id: string, title: string, value: number, appreciation: string) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.appreciation = appreciation;
  }
}
