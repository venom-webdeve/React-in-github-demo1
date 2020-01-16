import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-nestedform",
  templateUrl: "./nestedform.component.html",
  styleUrls: ["./nestedform.component.css"]
})
export class NestedformComponent {
  public frmRegister = new FormGroup({
    name: new FormControl(""),
    price: new FormControl(""),
    frmDetails: new FormGroup({
      city: new FormControl(""),
      IsInStock: new FormControl("")
    })
  });

  public updateDetails() {
    this.frmRegister.patchValue({
      name: "Samsung Tv",
      frmDetails: {
        city: "HYD",
        IsInStock: true
      }
    });
  }
}
