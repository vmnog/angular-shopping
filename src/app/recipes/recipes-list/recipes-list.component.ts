import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Macarrão a Bolonhesa",
      "Esta é uma classica receita italiana.",
      "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_L.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
