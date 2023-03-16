import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  imports: [CommonModule, FeatureRoutingModule],
  declarations: [AppFirstComponent, SecondComponent],
})
export class FeaturesModule {}
