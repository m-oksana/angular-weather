import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeFormatterService {

  getTime(date?: number, offset?: number) {
    if (!date || offset === undefined) {
      return "";
    }

    const formattedDate = new Date((date + offset) * 1000);

    return formattedDate.toLocaleString('en-US', {
      hour: '2-digit',
      minute: "2-digit"
    });
  }

  getDate(date?: number) {
    if (!date) {
      return "";
    }

    const formattedDate = new Date(date * 1000);

    return formattedDate.toLocaleString('en-US', {
      day: "2-digit",
      month: "short"
    })
  }
}
