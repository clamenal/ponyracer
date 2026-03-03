import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {
  transform(isoString: string): string {
    const date = parseISO(isoString);
    return formatDistanceToNowStrict(date, { addSuffix: true });
  }
}
