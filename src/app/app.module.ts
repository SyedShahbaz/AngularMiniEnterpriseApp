import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductFutureComponent } from './products/product-future/product-future.component';
import { ProductModule } from './products/product.module';
import { FiltersComponent } from './filters/filters.component';
import { FilterModule } from './filters/filter.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductFutureComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo:  'welcome', pathMatch: 'full'},
      {path: '**', redirectTo:  'welcome', pathMatch: 'full'},
    ]),
    ProductModule,
    FilterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
