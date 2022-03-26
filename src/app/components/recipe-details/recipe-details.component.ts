import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(private _activatedRoute: ActivatedRoute, private _recipeService: RecipeService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      () => {
        this.getBookInfo();
      }
    )
  }

  getBookInfo() {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');

    this._recipeService.getRecipe(id).subscribe(
      data => {
        this.recipe = data;
      }
    )
  }

}
