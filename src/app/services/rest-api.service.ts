import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  private readonly baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  constructor(private http: HttpClient) { }
  
  getDrinkList(drinkName: string): Observable<any> {
    const url = `${this.baseUrl}/search.php?s=${drinkName}`;
    return this.http.get<any>(url);
  }

  getDrinkById(drinkId: string): Observable<any> {
    const url = `${this.baseUrl}/lookup.php?i=${drinkId}`;
    return this.http.get<any>(url);
  }

  getCocktailList(): Observable<any> {
    const url = `${this.baseUrl}/filter.php?c=Cocktail`;
    return this.http.get<any>(url);
  }
}
