import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidePaneComponent } from './side-pane/side-pane.component';
import { MiddleSecComponent } from './middle-sec/middle-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidePaneComponent,
    MiddleSecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
