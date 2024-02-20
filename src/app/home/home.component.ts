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
  price = [0,100];
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
    window.botpressWebChat.init({
      "composerPlaceholder": "Chat with bot",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "5e986148-70a9-4d58-80aa-43c71cd78dc1",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "5e986148-70a9-4d58-80aa-43c71cd78dc1",
      "webhookId": "d16612fd-2b8c-4674-b897-845543f36f18",
      "lazySocket": true,
      "themeName": "prism",
      "frontendVersion": "v1",
      "showPoweredBy": true,
      "theme": "prism",
      "themeColor": "#2563eb"
    });
  }

  SearchLocations(){
    // console.log("name",this.name)
    // console.log("price",this.price)
    // console.log("hotels",this.hotels)
    // console.log("restaurents",this.restaurents)
    // console.log("intrestTargets",this.intrestTargets)
    // console.log("revieww1",this.revieww1)
    // console.log("revieww2",this.revieww2)
    // console.log("revieww3",this.revieww3)
    // console.log("revieww4",this.revieww4)
    // console.log("model",this.model)
    this.homeService.SearchLocations('France', new Date(), 100, 0, 0 , '$')
    .subscribe((data:any)=>{
      console.log(data)
      this.results = data.results
    })
  }
  SearchHotels(){
    this.homeService.SearchHotels('Paris', new Date(), 100, 0, 0 , '$')
    .subscribe((data:any)=>{
      console.log(data)
      this.results = data.results
    })
  }

}
