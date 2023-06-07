import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityWeatherPageComponent} from './city-weather-page.component';

describe('CityWeatherPageComponent', () => {
  let component: CityWeatherPageComponent;
  let fixture: ComponentFixture<CityWeatherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherPageComponent]
    });
    fixture = TestBed.createComponent(CityWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
