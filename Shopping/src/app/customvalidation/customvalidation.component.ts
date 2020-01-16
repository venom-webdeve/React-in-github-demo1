import { Component } from "@angular/core";

@Component({
  selector: "app-customvalidation",
  templateUrl: "./customvalidation.component.html",
  styleUrls: ["./customvalidation.component.css"]
})
export class CustomvalidationComponent {
  public showCityError = true;
  public showEvenError = true;
  public errorClass = true;
  public validClass = false;
  public showEmailError=true;

  /**
   * verifyEmail
email   */
  public verifyEmail(email) {
    let atPos=email.indexOf('@');
    let dotPos=email.lastIndexOf('.');
    if(atPos<2 && (dotPos-atPos)<2)
    {
      this.showEmailError=true;
    }else{
      this.showEmailError=false;
    }
    
  }

  public SelectedCityChanged(cityvalue) {
    if (cityvalue =='nocity') {
      this.showCityError = true;
      this.errorClass = true;
      this.validClass = false;
    } else {
      this.showCityError = false;
      this.validClass = true;
      this.errorClass = false;
    }
  }
  public verifyEvenNumber(n) {
    if (n % 2 == 0) {
      this.showEvenError = false;
    } else {
      this.showEvenError = true;
    }
  }
}
