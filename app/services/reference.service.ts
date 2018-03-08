import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReferenceService {

    constructor(private http: Http) { }

    getOutcome(): Observable<any> {
      try {
        return this.http.get('./assets/outcome.json')
             .map(res => {
               return res;
             })
             .catch(this.handleError);
      } catch(error) {

      }
    }

    getCountriesWithCode(): Observable<any> {
      try {
         return this.http.get('https://free.currencyconverterapi.com/api/v5/countries')
               .map(res => {
                return res;
              })
              .catch(this.handleError);
      } catch (error) { console.log(error); }
    }

    handleError(error: any) {
      console.log(error);
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
        return Observable.throw(error);
    }

    getCurrentCurrency(countryCode) {
      var u = 'https://free.currencyconverterapi.com/api/v5/convert?q=NZD_'+countryCode+'&compact=y';
      console.log(u);
      return this.http.get(u).map(res => {
        return res;});
    }
}
