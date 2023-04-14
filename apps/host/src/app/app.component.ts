import { Component } from '@angular/core';
import { currentEnviroment } from '@cwp/shared/configurations/endpoint';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'cwp-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    console.log(currentEnviroment);
  }

  languages = [
    { country: 'English', flag: 'icon', language: 'en-US' },
    { country: 'Vietnam', flag: 'icon', language: 'vi-VI' },
    // { country: 'China', icon: 'icon', language: 'es-ES' },
    { country: 'France', flag: 'icon', language: 'fr-FR' },
    { country: 'Spanish', flag: 'icon', language: 'es-ES' },
  ];

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
