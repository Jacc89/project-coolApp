import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { DetailsproductsComponent } from './products/detailsproducts/detailsproducts.component';
import { ProducListComponent } from './products/produc-list/produc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomepageComponent,
    ErrorComponent,
    DetailsproductsComponent,
    ProducListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
