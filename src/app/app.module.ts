import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppFontSizeComponent } from './app-font-size/app-font-size.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './pet/pet.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFontSizeComponent,
    PetComponent,
    NameCardComponent,
    ProgressBarComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
