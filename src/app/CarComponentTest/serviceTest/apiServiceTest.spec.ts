import {TestBed} from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {ApiService} from "../../CarComponent/service/apiService";
import { APP_CONFIG, AppConfig } from '../../app.config';
import { Title } from '@angular/platform-browser';
describe('ApiService', ()=>{
  
    let apiService:ApiService;
    let httpMock:HttpTestingController;
    const dummyCars: any[]=
    
        [
          {
                "mileage": 12033,
                "name": "Ford",
                "model": "Focus",
                "engine": "3 gophers on a treadmill",
                "color": "green"
            },
            {
                "mileage": 85000,
                "name": "Chevy",
                "model": "mailbu",
                "engine": "6 cylinder",
                "color": "Maroon"
            },
            {
                "mileage": 612033,
                "name": "Ford",
                "model": "F150",
                "engine": "6 cylinder",
                "color": "Green"
            },
            {
                "mileage": 89500,
                "name": "Pontiac",
                "model": "G6",
                "engine": "2 cylinder",
                "color": "Blue"
            },
            {
                "mileage": 17200,
                "name": "Pontiac",
                "model": "G8",
                "engine": "3 cylinder",
                "color": "Silver"
            },
            {
                "mileage": 308,
                "name": "Toyota",
                "model": "Forerunner",
                "engine": "6 cylinders",
                "color": "Grey"
            },
            {
                "mileage": 65328,
                "name": "Volvo",
                "model": "wagon",
                "engine": "8 cyclinders while not in test mode otherwise 2 bicycle pedals",
                "color": "Red"
            },
            {
                "mileage": 50,
                "name": "IKea",
                "model": "Ronde",
                "engine": "3 self propelled coasters",
                "color": "wood panelling"
            },
            {
                "mileage": 17200,
                "name": "Pontiac",
                "model": "Grand Am",
                "engine": "8 cylinder",
                "color": "rusty"
            }
        ]
    

    beforeEach(()=>{
        TestBed.configureTestingModule({providers:[Title, { provide: APP_CONFIG, useValue: AppConfig },ApiService],imports: [ HttpClientTestingModule],})
                apiService = TestBed.get(ApiService);
                httpMock = TestBed.get(HttpTestingController); 
    });
    
    afterEach(() =>
    {
            apiService =null;
    });
    it('should be created', () =>{
        expect(apiService).toBeTruthy();
        expect(apiService.get()).toBeTruthy;
       
    });

    it('get all cars',()=>
    {
       apiService.get().subscribe(cars=>{
           expect(cars.length).toBeGreaterThanOrEqual(1);
       })

       const request = httpMock.expectOne(`${apiService.api_url}`,);
       expect(request.request.method).toBe('GET');
       request.flush(dummyCars);
    })

    
});

