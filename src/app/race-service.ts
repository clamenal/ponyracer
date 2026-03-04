import { inject, Injectable } from '@angular/core';
import { RaceModel } from './models/race-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private readonly apiUrl = 'https://ponyracer.ninja-squad.com/api/races';

  readonly http = inject(HttpClient);

  list(): Observable<Array<RaceModel>> {
    return this.http.get<Array<RaceModel>>(this.apiUrl, { params: { status: 'PENDING' } });
  }
}
