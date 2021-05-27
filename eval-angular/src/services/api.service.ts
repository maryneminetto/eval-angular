import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetourApi } from 'src/models/retour-api';
import { Statistique } from 'src/models/statistique';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private statSave: Statistique[] = [];

  constructor(private http: HttpClient) {}

  getStat(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr/')
      .toPromise()
      .then((obj: any) => {
        let tabStats: Statistique[] = [];
        for (let o of obj) {
          tabStats.push(
            new Statistique(o.id, o.title, o.value, o.appreciation)
          );
        }
        return tabStats;
      });
  }

  delStat(id: string): Promise<RetourApi<void>> {
    return this.http
      .delete('https://stats.naminilamy.fr/' + id)
      .toPromise()
      .then(
        () => {
          let position = this.statSave.findIndex((s) => s.id === id);
          if (position != -1) {
            this.statSave.splice(position, 1);
          }
          return { statut: 'OK' };
        },
        () => {
          return { statut: 'KO' };
        }
      );
  }
}
