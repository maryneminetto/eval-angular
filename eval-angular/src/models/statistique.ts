export class Statistique {
  public _id: string;
  public titre: string;
  public valeur: number;
  public appreciation: string;
  constructor(
    _id: string,
    titre: string,
    valeur: number,
    appreciation: string
  ) {
    this._id = _id;
    this.titre = titre;
    this.valeur = valeur;
    this.appreciation = appreciation;
  }
}
