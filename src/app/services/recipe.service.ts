import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = "https://api.spoonacular.com/recipes/random?number=10&apiKey=b655da95679844e1846b6a88797b083f";
  private baseUrlhalf1 = "https://api.spoonacular.com/recipes";
  private baseUrlhalf2 = "information?includeNutrition=false&apiKey=b655da95679844e1846b6a88797b083f";
  private searchUrl1 = "https://api.spoonacular.com/recipes/complexSearch?query=";
  private searchUrl2 = "&apiKey=b655da95679844e1846b6a88797b083f";

  constructor(private _http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this._http.get<any>(this.baseUrl);
  }

  getRecipe(id: number): Observable<any> {
    return this._http.get<any>(`${this.baseUrlhalf1}/${id}/${this.baseUrlhalf2}`);
  }

  searchRecipes(keyword: string): Observable<any> {
    return this._http.get<any>(`${this.searchUrl1}/${keyword}/${this.searchUrl2}`);
  }
}
