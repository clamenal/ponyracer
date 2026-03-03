import { Component, input } from '@angular/core';
import { FromNowPipe } from '../from-now-pipe';
import { RaceModel } from '../models/race-model';
import { Pony } from '../pony/pony';

@Component({
  selector: 'pr-race',
  imports: [Pony, FromNowPipe],
  templateUrl: './race.html',
  styleUrl: './race.css'
})
export class Race {
  readonly raceModel = input.required<RaceModel>();
}
