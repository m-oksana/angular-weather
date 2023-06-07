import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {SidenavContentComponent} from "./components/sidenav-content/sidenav-content.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "../../app-routing.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [ToolbarComponent, SidenavContentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    TranslateModule
  ],
  exports: [ToolbarComponent, SidenavContentComponent]
})
export class ToolbarModule {
}
