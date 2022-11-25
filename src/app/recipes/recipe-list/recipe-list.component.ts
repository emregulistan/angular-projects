import { Component } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://st3.depositphotos.com/7691758/18074/i/600/depositphotos_180742044-stock-photo-fried-veal-liver-slices-in.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://st3.depositphotos.com/7691758/18074/i/600/depositphotos_180742044-stock-photo-fried-veal-liver-slices-in.jpg')

  ];

}
