import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { HomeService } from './home.service';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  data : Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  simpleSlider = 40;
  doubleSlider = [20, 60];

  date: {year: number, month: number};

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  results = [];

  name
  price = [0,10000];
  hotels
  restaurents
  intrestTargets;
  revieww1;
  revieww2;
  revieww3;
  revieww4;
  model: NgbDateStruct;

  


  constructor( private renderer : Renderer2, config: NgbAccordionConfig,
      private homeService : HomeService
    ) {
      config.closeOthers = true;
      config.type = 'info';
  }

  ngOnInit(): void {
  }

  SearchLocations(){
  }
  SearchHotels(){
  }

}
