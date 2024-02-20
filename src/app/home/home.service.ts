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
  
  
  // name, price, currency, rate, avgReview, reviewsCount, checkIn, checkOut, maxRate , minRate, maxReviewsCount , minReviewsCount

  SearchHotels(name, price, currency, rate, avgReview, reviewsCount, checkIn, checkOut, maxRate , minRate, maxReviewsCount , minReviewsCount){
    return this.http.get(`${this.urlHotels}?name=${name}&price=${price}&currency=${currency}&rate=${rate}&avgReview=${avgReview}&reviewsCount=${reviewsCount}&checkIn=${checkIn}&checkOut=${checkOut}&maxRate=${maxRate}&minRate=${minRate}&maxReviewsCount=${maxReviewsCount}&minReviewsCount=${minReviewsCount}`);
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
