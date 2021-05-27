import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
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
}
