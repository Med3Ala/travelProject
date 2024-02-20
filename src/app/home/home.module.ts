import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NouisliderModule } from 'ng2-nouislider';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { HotelComponent } from './hotel/hotel.component';
import { LocationComponent } from './location/location.component';




@NgModule({
  declarations: [
    HomeComponent,
    RestaurentComponent,
    HotelComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    NouisliderModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ]
})
export class HomeModule { }
