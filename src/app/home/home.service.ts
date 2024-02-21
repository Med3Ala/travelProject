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
  urlRestaurents = "https://travel-import.onrender.com/api/v1/restaurants"

  SearchHotels(name, country, avgReview, minPrice, minReviewCount, minRate, checkIn, checkOut){
    //return this.http.get(`${this.urlHotels}?name=${name}&country=${country}&avgReview=${avgReview}&minPrice=${minPrice}&minReviewCount=${minReviewCount}&minRate=${minRate}&checkIn=${checkIn}&checkOut=${checkOut}`);
    return this.http.get(`${this.urlHotels}?country=${country}`)
  }

  // name,currency,description,city,price,maxPrice , minPrice, reviewsCount, maxReviewsCount , minReviewsCount, rate, maxRate , minRate
  SearchLocations( name, currency, description, city, price, maxPrice , minPrice, reviewsCount, maxReviewsCount , minReviewsCount, rate, maxRate , minRate){
    return this.http.get(`${this.urlLocations}?name=${name}&currency=${currency}&description=${description}&city=${city}&price=${price}&maxPrice=${maxPrice}&minPrice=${minPrice}&reviewsCount=${reviewsCount}&maxReviewsCount=${maxReviewsCount}&minReviewsCount=${minReviewsCount}&rate=${rate}&maxRate=${maxRate}&minRate=${minRate}`);
  }

  //name, country,reviewCount, maxReviewCount, minReviewCount, rate, maxRate, minRate
  searchRestaurents(name, country,reviewCount, maxReviewCount, minReviewCount, rate, maxRate, minRate){
    return this.http.get(`${this.urlRestaurents}?name=${name}&country=${country}&reviewCount=${reviewCount}&maxReviewCount=${maxReviewCount}&minReviewCount=${minReviewCount}&rate=${rate}&maxRate=${maxRate}&minRate=${minRate}`)
  }
}
