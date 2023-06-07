import {Component, EventEmitter, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() menuIconClickEmitter = new EventEmitter();

  constructor(private translateService: TranslateService) {
  }

  onClickIcon() {
    this.menuIconClickEmitter.emit();
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem("lang", lang)
    window.location.reload();
  }
}
