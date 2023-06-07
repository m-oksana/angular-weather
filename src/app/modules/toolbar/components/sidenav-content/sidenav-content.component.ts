import {Component, OnDestroy, OnInit} from '@angular/core';
import {FavouriteCitiesService} from "../../../../shared/services/favourite-cities.service";
import {Subject, takeUntil} from "rxjs";
import {ICity} from "../../../../models/city.model";

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit, OnDestroy {

  public favouriteCities: ICity[] = [];

  // TODO: почитать про это
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private favouriteCitiesService: FavouriteCitiesService) {
  }

  public ngOnInit(): void {
    this.favouriteCitiesService
      .getFavouriteCities()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.favouriteCities = data;
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
