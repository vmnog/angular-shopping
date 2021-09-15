import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<Ingredient>();

  @ViewChild("nameInput") NameInput: ElementRef<HTMLInputElement>;
  @ViewChild("amountInput") AmountInput: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const item = new Ingredient(
      this.NameInput.nativeElement.value,
      +this.AmountInput.nativeElement.value
    );

    this.itemAdded.emit(item);

    this.resetInputs();
  }

  resetInputs() {
    this.AmountInput.nativeElement.value = "";
    this.NameInput.nativeElement.value = "";
  }
}
