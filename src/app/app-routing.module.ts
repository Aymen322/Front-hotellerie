import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';
import { TopDestinationsComponent } from './top-destinations/top-destinations.component';
import { TopSearchComponent } from './top-search/top-search.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    component:AccueilComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'register',
    pathMatch:'full',
    component:SignUpComponent
  },
  {
    path:'about',
    pathMatch:'full',
    component:AboutComponent
  },

  {
    path:'contact',
    pathMatch:'full',
    component:ContactComponent
  },
  {
    path:'hotel',
    pathMatch:'full',
    component:HotelComponent
  },
  {
    path:'topdestinations/:regionId',
    component:TopDestinationsComponent
  },
  { path: 'topsearch', component: TopSearchComponent }, 
  {
    path: 'hoteldetail/:id', // Define a dynamic route parameter ":id"
    component: HotelDetailComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
