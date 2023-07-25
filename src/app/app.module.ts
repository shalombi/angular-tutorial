import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { SeasonsComponent } from './cmps/seasons/seasons.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { WatchersComponent } from './cmps/watchers/watchers.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    CountDownComponent,
    WatchersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
