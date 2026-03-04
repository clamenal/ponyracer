import { Component, inject, Signal } from '@angular/core';
import { Race } from '../race/race';
import { RaceService } from '../race-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RaceModel } from '../models/race-model';

@Component({
  selector: 'pr-races',
  imports: [Race],
  templateUrl: './races.html',
  styleUrl: './races.css'
})
export class Races {
  private readonly raceService = inject(RaceService);

  protected readonly races: Signal<Array<RaceModel> | undefined> = toSignal(this.raceService.list());
}
