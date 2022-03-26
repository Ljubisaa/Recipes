import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:keyword', component: HomeComponent},
    {path: 'recipes/:id', component: RecipeDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }