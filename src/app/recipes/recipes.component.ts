import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.module";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(selectedRecipe: Recipe) {
    console.log("onRecipeSelected: ", selectedRecipe);

    this.recipe = selectedRecipe;
  }
}
