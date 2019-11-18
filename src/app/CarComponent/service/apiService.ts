import { Injectable, Injector,Inject } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { APP_CONFIG, AppConfigInterface } from 'src/app/app.config';
import { throwError } from 'rxjs';

@Injectable()
export class ApiService 
{
  api_url: string;

  constructor(
    private injector: Injector,
    private _http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfigInterface) 
    {
      this.api_url = this.config.GETCARS_ENDPOINT;
    }
 
  private formatErrors(error: any) 
  {
    return throwError(error.error);
  }

  get(): Observable<any> 
  {
    return this._http.get(`${this.api_url}`)
      .pipe(catchError(this.formatErrors));
  }
}
