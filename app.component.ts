import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './services/reference.service';
// import { Employee } from './model/employee';
import { Http } from '@angular/http';
import { FormControl, FormsModule } from '@angular/forms';

export class Currency {
  amnt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ReferenceService]
})
export class AppComponent implements OnInit  {
  //title = 'Angular Service app';
  //countries: any = [];
  combination: any = [];
  theObj: any;
  //theCompactValue: any;
  //theFinalValue: any;
  //btnText: string = "Convert";
  amountZero: number;
  amount: number;
  //currency: Currency;
  gotTheValue: boolean;
  theCountry: string;
  constructor(public referService: ReferenceService, public http: Http) { }

    ngOnInit() {
      this.searchCountriesWithCode();
      this.currency = {
        amnt: "1"
      }
    }

  searchCountriesWithCode(){
    this.referService.getCountriesWithCode().subscribe(res => {
        this.theObj = res.json();

        for (let p in this.theObj.results) {
          var val = this.theObj.results[p].name + ' (' + this.theObj.results[p].currencyId + ') ';
          this.combination.push(val);
        }
    });
}


  getTheAmount(form) {
    var givenAmount: number;
    var choosenCountry: string;
    givenAmount = form.value['third'];
    choosenCountry = form.value['first'];
    this.theCountry = choosenCountry;

    // this.amountZero = givenAmount;

    // getting country code
    var indexZero = choosenCountry.indexOf("(");
    var indexOne = choosenCountry.indexOf(")");

    choosenCountry = choosenCountry.slice(indexZero+1, indexOne);

    // getting country
    this.theCountry = this.theCountry.slice(0, indexZero);

    this.referService.getCurrentCurrency(choosenCountry).subscribe(res => {
      var gotCurrency = res.json();
      for (let occurenceOne in gotCurrency) {
        var amo = gotCurrency[occurenceOne];

        this.amount = amo['val'];
        this.amount *= givenAmount;

        this.gotTheValue = true;
      }
    });
}

}
