import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SharedModule} from "../../shared/shared.module";
import {MainRoutingModule} from "./main-routing.module";
import {SearchComponent} from './components/search/search.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class MainModule {
}
