import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InvalidURLComponent } from './invalid-url/invalid-url.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'product/:id', component:ProductDetailsComponent},
  {path:'**', component:InvalidURLComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
