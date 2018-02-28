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

    getCountries(): Observable<any> {
      try {
         // return this.http.get('https://free.currencyconverterapi.com/api/v5/countries')   // web service API. its pointing to http://localhost:4200/assets/service.json
         // return this.http.get('https://api.fixer.io/latest?symbols=USD,GBP')
         return this.http.get('./assets/service.json')
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
}
