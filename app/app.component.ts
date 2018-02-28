import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './services/reference.service';
// import { Employee } from './model/employee';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ReferenceService]
})
export class AppComponent implements OnInit  {
  title = 'Angular Service app';
  countries: any = [];
  combination: any = [];
  theObj: any;
  theCompactValue: any;
  theFinalValue: any;
  btnText: string = "Convert";
  amount: number;
  constructor(public referService: ReferenceService, public http: Http) { }

    ngOnInit() {
      this.search();
      this.sani();
    }

    search(){
    this.referService.getCountries().subscribe(res => {
        this.theObj = res.json();

        for (let p in this.theObj.results) {
          this.countries.push(this.theObj.results[p].name);
        }

        for (let h in this.theObj.results) {
          var val = this.theObj.results[h].name + ' (' + this.theObj.results[h].alpha3 + ') ';
          this.combination.push(val);
        }
        //console.log('--- '+ this.combination);

    });
  }

  sani() {
    this.referService.getOutcome().subscribe(res => {
      this.theCompactValue = res.json();

      for (let i in this.theCompactValue) {
        var val = this.theCompactValue[i];
        this.theFinalValue = val["val"];
        //console.log(this.theFinalValue);
      }


    });
  }


  getTheAmount() {
  // if (this.myform.valid) {
    console.log("Form Submitted!" + this.amount.value);
  // }
}

}
