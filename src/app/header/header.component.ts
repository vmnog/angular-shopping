import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NavigateFeatureOptionsDTO } from "../dtos/NavigateFeatureOptionsDTO";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output()
  featureSelected = new EventEmitter<NavigateFeatureOptionsDTO>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: NavigateFeatureOptionsDTO) {
    this.featureSelected.emit(feature);
  }
}
