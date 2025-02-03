import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "./services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'MojaStrona';

  constructor(private translate: TranslateService,
              public lService: LanguageService) {
    lService.setup();
    console.log("AppComponent");
    const browserLanguage = navigator.language.split('-')[0];
    console.log("AppComponent browserLanguage "+browserLanguage);
    const supportedLanguages = ['en', 'de'];
    console.log("browserLanguage " + browserLanguage);
    if (supportedLanguages.includes(browserLanguage)) {

      translate.use(browserLanguage);
    }
  }

  ngOnInit() {
    this.lService.setup();

  }

  ngAfterViewInit(): void {
    this.lService.setup();
  }
}
