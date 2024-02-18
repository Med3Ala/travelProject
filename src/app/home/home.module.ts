import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NouisliderModule } from 'ng2-nouislider';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent
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
