import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { LoginComponent } from './Header/login/login.component';
import { RegisterComponent } from './Header/register/register.component';
import { CarousalComponent } from './carousal/carousal.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { RateQuesComponent } from './rate-ques/rate-ques.component';
import { TopMoviesComponent } from './rate-ques/top-movies/top-movies.component';
import { TopBooksComponent } from './rate-ques/top-books/top-books.component';
import { TopElectronicsComponent } from './rate-ques/top-electronics/top-electronics.component';
import { FaqsComponent } from './rate-ques/faqs/faqs.component';
import { LocQueriesComponent } from './loc-queries/loc-queries.component';
import { MapsComponent } from './loc-queries/maps/maps.component';
import { AddressComponent } from './loc-queries/address/address.component';
import { EnquiriesComponent } from './loc-queries/enquiries/enquiries.component';
import { KindleComponent } from './kindle/kindle.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { KnavComponent } from './kindle/knav/knav.component';
import { BooksComponent } from './kindle/books/books.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CarousalComponent,
    MenuBarComponent,
    HomeComponent,
    RateQuesComponent,
    TopMoviesComponent,
    TopBooksComponent,
    TopElectronicsComponent,
    FaqsComponent,
    LocQueriesComponent,
    MapsComponent,
    AddressComponent,
    EnquiriesComponent,
    KindleComponent,
    UnderconstructionComponent,
    KnavComponent,
    BooksComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
