import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { StoryComponent } from './story/story.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { BestSellerItemComponent } from './best-seller-item/best-seller-item.component';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    NavbarComponent,
    AboutComponent,
    CreateOrderComponent,
    FooterComponent,
    BannerComponent,
    StoryComponent,
    BestSellersComponent,
    BestSellerItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'about', component: AboutComponent},
      {path: 'create-order', component: CreateOrderComponent},
    ]),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
