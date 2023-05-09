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
    { country: 'English', flag: '../assets/images/england.png', language: 'en-US' },
    { country: 'Vietnam', flag: '../assets/images/vietnam.png', language: 'vi-VI' },
    // { country: 'China', icon: 'icon', language: 'es-ES' },
    { country: 'France', flag: '../assets/images/france.png', language: 'fr-FR' },
    { country: 'Spanish', flag: '../assets/images/spain.png', language: 'es-ES' },
  ];

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
