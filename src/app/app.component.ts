import { Component } from "@angular/core";
import { NavigateFeatureOptionsDTO } from "./dtos/NavigateFeatureOptionsDTO";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loadedFeature: NavigateFeatureOptionsDTO = "recipe";

  onNavigate(feature: NavigateFeatureOptionsDTO) {
    this.loadedFeature = feature;
  }
}
