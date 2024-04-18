import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HotelComponent } from './hotel/hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { TopDestinationsComponent } from './top-destinations/top-destinations.component';
import { TopSearchComponent } from './top-search/top-search.component';
import { FormsModule } from '@angular/forms';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    SignUpComponent,
    ContactComponent,
    AboutComponent,
    HotelComponent,
    TopDestinationsComponent,
    TopSearchComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
