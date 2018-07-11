import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class SampleApiService {

  private CATEGORY_URL = 'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json';



  constructor(private http: HttpClient) {
  }

  /**
   * Category Course List
   */
  getCategoryList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.CATEGORY_URL )
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (error: HttpErrorResponse) => {
          }
        );
    });
  }


}

