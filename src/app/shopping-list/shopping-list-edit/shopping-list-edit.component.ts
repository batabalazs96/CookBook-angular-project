import { Component, ElementRef, EventEmitter, OnInit, ViewChild , Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:false}) amountnputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const nameValue = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountnputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameValue,amountValue);
    this.ingredientAdded.emit(newIngredient);
  }

  constructor() { }


  ngOnInit(): void {
  }

}
