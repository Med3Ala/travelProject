import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { 

  }
 
  urlLocations = "https://travel-import.onrender.com/api/v1/locations"
  urlHotels = "https://travel-import.onrender.com/api/v1/hotels"

  SearchHotels(country, date : Date, max, min, review, currency){
    //return this.http.get(`${this.urlHotels}?country=${country}&date=${date.getTime()}&maxPrice=${max}&minPrice=${min}&avgReview=${review}&currency=${currency}`);
    return this.http.get(`${this.urlHotels}`);

  }
  
  SearchLocations(country, date : Date, max, min, review, currency){
    return this.http.get(`${this.urlLocations}?country=${country}&date=${date.getTime()}&maxPrice=${max}&minPrice=${min}&avgReview=${review}&currency=${currency}`);
  }

  //restaurents

  //https://travel-import.onrender.com/api/v1/restaurants
}
