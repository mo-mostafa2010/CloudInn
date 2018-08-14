import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwapiService } from 'ng2-swapi';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
