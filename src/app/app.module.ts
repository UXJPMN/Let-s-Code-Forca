import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TriesComponent } from './tries/tries.component';
import { CharInputComponent } from './char-input/char-input.component';
import { WordHandlerComponent } from './word-handler/word-handler.component';
import { LoseModalComponent } from './lose-modal/lose-modal.component';
import { WinModalComponent } from './win-modal/win-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TriesComponent,
    CharInputComponent,
    WordHandlerComponent,
    LoseModalComponent,
    WinModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
