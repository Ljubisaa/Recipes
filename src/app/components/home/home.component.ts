import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipes = [];

  constructor(private _recipe: RecipeService) { }

  ngOnInit(): void {

    this._recipe.getRecipes().subscribe(data => {
      this.recipes = data;
      this.recipes = Array.of(this.recipes);
      console.log(data);
    });


  }

}
