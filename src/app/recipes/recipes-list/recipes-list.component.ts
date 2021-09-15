import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.module";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Macarrão a Bolonhesa",
      "Esta é uma classica receita italiana.",
      "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_L.jpg"
    ),
    new Recipe(
      "Strogonoff de frango",
      "Clássica receita simples e barata.",
      "https://4.bp.blogspot.com/-9gFQoJ4IlAE/WyLSu9fqNhI/AAAAAAAAND0/3Ab_DDh-CO0e7D3VWiND0MrkFLGt5nT-ACLcBGAs/s1600/strogonoff-de-frango.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe(recipe: Recipe) {
    console.log("onSelectRecipe: ", recipe);

    this.recipeSelected.emit(recipe);
  }
}
