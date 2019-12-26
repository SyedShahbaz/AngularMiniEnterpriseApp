import { NgModule } from '@angular/core';
import { FiltersComponent } from './filters.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: 'filters', component: FiltersComponent},
    ]),
    SharedModule,
  ]
})
export class FilterModule { }
