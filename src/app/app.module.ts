import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  APP_BASE_HREF,
  Location,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importing core module (http,http services,interceptors etc.)
import { CoreModule } from './core/core.module';

// Adding custom modules
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NewsModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
