import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CocktailComponent } from './Pages/cocktail/cocktail.component';
import { IngredientComponent } from './Pages/ingredient/ingredient.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'cocktail/:id',
  component: CocktailComponent
}, {
  path: 'ingredient/:id',
  component: IngredientComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
