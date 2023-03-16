import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const secondaryRoutes: Routes = [
  { path: 'first', component: AppFirstComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forChild(secondaryRoutes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
