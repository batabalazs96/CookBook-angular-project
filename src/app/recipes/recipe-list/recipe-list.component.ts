import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [new Recipe('Test Recipe', 'Test Descdsafasdfasdfasdf', 'https://abudhabitiming.com/wp-content/uploads/2020/01/test-img.jpg'), new Recipe('Test Recipe', 'Dog Dog Dog', 'https://abudhabitiming.com/wp-content/uploads/2020/01/test-img.jpg')];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onSelectedRecipe(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
