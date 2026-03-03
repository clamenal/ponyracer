import { Component, inject, signal } from '@angular/core';
import { RaceModel } from '../models/race-model';
import { Race } from '../race/race';
import { RaceService } from '../race-service';

@Component({
  selector: 'pr-races',
  imports: [Race],
  templateUrl: './races.html',
  styleUrl: './races.css'
})
export class Races {
  //readonly races = signal<Array<RaceModel>>([]);
  //constructor(private raceService: RaceService) {
  //this.races.set(this.raceService.list());
  //}

  private raceService = inject(RaceService);

  protected readonly races = signal<Array<RaceModel>>(this.raceService.list());
}
