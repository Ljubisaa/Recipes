import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = "https://api.spoonacular.com/recipes/random?number=10&apiKey=832070ce39d24805a75d9615f381b9bd&fbclid=IwAR0ihX1fQ79PeFW2ffJnBk2774cH2P5W4DzYaRetpxXDuhwdSp_Ret1qqiI";


  constructor(private _http: HttpClient) { }

  public getRecipes(): Observable<Recipe[]>{
    return this._http.get<Recipe[]>(`${this.baseUrl}/`);
  }
}
