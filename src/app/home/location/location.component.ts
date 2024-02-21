import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

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

  name = ""
  country = ""
  price = [0,10000];
  review = [0,1000]
  rate = [0,5];
  checkIn: NgbDateStruct;
  checkOut: NgbDateStruct;

  


  constructor( private renderer : Renderer2, config: NgbAccordionConfig,
      private homeService : HomeService
    ) {
      config.closeOthers = true;
      config.type = 'info';
  }

  ngOnInit(): void {
  }

  SearchLocations(){
    this.homeService.SearchLocations(this.country).subscribe((data:any)=>{
      this.results = data.results;
    })
  }

}
