import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
import { FeaturesModule } from './features/features.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FeaturesModule, AppRoutingModule],
  declarations: [AppComponent, NotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
