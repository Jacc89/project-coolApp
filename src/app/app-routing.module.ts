import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './products/product.component';
import { DetailsproductsComponent } from './products/detailsproducts/detailsproducts.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component:  HomepageComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product/:id', component: DetailsproductsComponent },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
