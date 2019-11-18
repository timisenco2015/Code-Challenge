import {Injectable} from '@angular/core';
import{Car} from '../entity/car';
import {HttpClient} from '@angular/common/http';
import {Observable, of,EMPTY} from 'rxjs';
import { catchError, map,ignoreElements} from 'rxjs/operators';
import { ApiService } from './apiService';

@Injectable()
export class CarService
{
  private _car:Car;
  private _http: HttpClient;
  _apiService: ApiService;
  private static allCarsList:any;

  constructor(private http: HttpClient,_apiService: ApiService)
    {
      this._http=http;
      this._apiService = _apiService;
    }

  getCars(): Observable<any>
    {
       return  this._apiService.get().pipe
       (map((response:Response) => {
        CarService.allCarsList=response;   
        return response;}),
       catchError(this.handleError)
       );
       
    }

  sortDataAscendMilleage(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.mileage > b.mileage ? 1 : -1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    
    }

  sortDataDescendMilleage(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.mileage > b.mileage ? -1 : 1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  sortDataAscendName(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.name > b.name ? 1 : -1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  sortDataDescendName(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.name > b.name ? -1 : 1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  sortDataAscendModel(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.model > b.model ? 1 : -1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  sortDataDescendModel(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.model > b.model ? -1 : 1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  sortDataAscendEngine(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) =>
                {
                  return a.engine > b.engine ? 1 : -1;
                });
            }));  
        }
      else
        {
          return EMPTY;
        }
    }


  sortDataDescendEngine(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {       
              return data.sort((a, b) => 
                {
                  return a.engine > b.engine ? -1 : 1;
                });
            }));

        }
      else
        {
          return EMPTY;
        }
    }

  sortDataAscendColor(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.color > b.color ? 1 : -1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  sortDataDescendColor(): Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.sort((a, b) => 
                {
                  return a.color > b.color ? -1 : 1;
                });
            }));
        }
      else
        {
          return EMPTY;
        }
    }

  filterByName(name:string):Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.filter(car => car.name.toLowerCase().startsWith(name.toLowerCase()))
            }));
        }
      else
        {
          return EMPTY;
        }
    }

   
  filterByMileage(mileage:number):Observable<Car[]>
   {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          
          if(!isNaN(mileage)) 
            {
              return of(CarService.allCarsList).pipe(map((data) => 
                {
                  return data.filter(car => car.mileage === mileage)
                }));
            }
          else
            {
              return of(CarService.allCarsList);
            }
      
        }
      else
        {
          return EMPTY;
        }
    }

  filterByModel(model:string):Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.filter(car => car.model.toLowerCase().startsWith(model.toLowerCase()))
            }));
        }
      else
        {
          return EMPTY;
        }
         
    }

  filterByEngine(engine:string):Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {        
              return data.filter(car => car.engine.toLowerCase().startsWith(engine.toLowerCase()))
            }));
        }
      else
        {
          return EMPTY;
        }        
    }
            
  filterByColor(color:string):Observable<Car[]>
    {
      if(CarService.allCarsList!=null && CarService.allCarsList !="" && CarService.allCarsList !="undefined")
        {
          return of(CarService.allCarsList).pipe(map((data) => 
            {
              return data.filter(car => car.color.toLowerCase().startsWith(color.toLowerCase()))
            }));       
        }
      else
        {
          return EMPTY;
        }       
    }
    
  private handleError(error: Response) 
    {
      console.error(error)
      return Observable.throw(error|| "Server error");
    }
    
}