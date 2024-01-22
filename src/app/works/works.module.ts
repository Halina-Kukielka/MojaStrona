import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorksComponent} from "./works.component";
import {GalleryComponent} from "../gallery/gallery.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {HttpLoaderFactory} from "../app.module";



@NgModule({
  declarations: [
      WorksComponent,
      GalleryComponent
  ],
  imports: [
    CommonModule,
      TranslateModule.forRoot( {
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      }),
      TranslateModule
  ]
})
export class WorksModule { }
