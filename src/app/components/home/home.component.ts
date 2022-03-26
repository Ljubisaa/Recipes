import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchMode: boolean = false;

  recipe: Recipe[] = [
    {
      id: 0,
      summary: '',
      readyInMinutes: 0,
      image: '',
      servings: '',
      title: ''
    }]
    ;


  constructor(private _recipe: RecipeService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(() => {
      this.getRecipes();
    })
 }


 private getRecipes() {


  this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

  if (this.searchMode) {
    this.handleSearchRecipes();
  }
  else {
    this.handleListRecipes();
  }

}


 

handleSearchRecipes(): void {

  const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword');

  this._recipe.searchRecipes(keyword).subscribe(data => {

   
    console.log(data);
    console.log('search keyword', keyword);


  });

}


  handleListRecipes(): void {

    this._recipe.getRecipes().subscribe(data => {

      for (let i = 0; i < 10; i++) {
        this.recipe[i] = data.recipes[i];
      }

      console.log(data);


    });




  }

}
