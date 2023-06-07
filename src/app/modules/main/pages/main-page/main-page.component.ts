import {Component} from '@angular/core';
import {ICoordinates} from "../../../../models/coordinates.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  lat$ = new BehaviorSubject<number>(0);
  lon$ = new BehaviorSubject<number>(0);

  updateCoordinates(coordinates: ICoordinates) {
    this.lat$.next(coordinates.lat);
    this.lon$.next(coordinates.lon);
  }

}
