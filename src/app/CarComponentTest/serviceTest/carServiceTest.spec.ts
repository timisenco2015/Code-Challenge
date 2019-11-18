import {TestBed} from '@angular/core/testing'
import {CarService} from "../../CarComponent/service/carService";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ApiService} from "../../CarComponent/service/apiService";
import { APP_CONFIG, AppConfig } from '../../app.config';
import { Title } from '@angular/platform-browser';

describe('CarService', ()=>{
  
    let carService:CarService;

    beforeEach(()=>{
        TestBed.configureTestingModule({providers:[Title, { provide: APP_CONFIG, useValue: AppConfig },CarService,ApiService],imports: [ HttpClientTestingModule]})
            carService = TestBed.get(CarService); 
    });
    
    afterEach(() =>
    {
            carService=null;
    });
    it('should be created', () =>{
        expect(carService).toBeTruthy();
        expect(carService.filterByColor("")).toBeTruthy;
        expect(carService.filterByEngine("")).toBeTruthy;
        expect(carService.filterByModel("")).toBeTruthy;
        expect(carService.filterByName("")).toBeTruthy;
        expect(carService.filterByMileage(0)).toBeTruthy;
        expect (carService.getCars()).toBeTruthy;
        expect (carService.sortDataAscendColor()).toBeTruthy;
        expect(carService.sortDataAscendEngine()).toBeTruthy;
        expect(carService.sortDataAscendMilleage()).toBeTruthy;
        expect(carService.sortDataAscendModel()).toBeTruthy;
        expect(carService.sortDataAscendName()).toBeTruthy;
        expect(carService.sortDataDescendColor()).toBeTruthy;
        expect(carService.sortDataDescendEngine()).toBeTruthy;
        expect(carService.sortDataDescendMilleage()).toBeTruthy;
        expect(carService.sortDataDescendModel()).toBeTruthy;
        expect(carService.sortDataDescendName()).toBeTruthy;

    });

    it('get all cars',()=>
    {
        carService.getCars().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
          });
    })

    it('filter car list by color', async() =>{
        
        carService.filterByColor("Green").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          carService.filterByColor("Yellow").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(0);
            
          });
    });

    it('filter car list by engine', async() =>{
        
        carService.filterByEngine("3 self propelled coasters").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          carService.filterByEngine("13 self propelled coasters").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(0);
            
          });
    });

    

    it('filter car list by model', async() =>{
        
        carService.filterByModel("Ronde").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          carService.filterByModel("Ronderlo").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(0);
            
          });
    }); 


    it('filter car list by name', async() =>{
        
        carService.filterByName("IKea").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          carService.filterByName("IKeaaadd").subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(0);
            
          });
    });


    it('filter car list by millage', async() =>{
        
        carService.filterByMileage(17200).subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          carService.filterByMileage(0).subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(0);
            
          });
    });


    
    it('sort car list by color asc', async() =>{
        
        carService.sortDataAscendColor().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });


    it('sort car list by engine asc', async() =>{
        
        carService.sortDataAscendEngine().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });


    it('sort car list by milleage asc', async() =>{
        
        carService.sortDataAscendMilleage().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });
    
    it('sort car list by model asc', async() =>{
        
        carService.sortDataAscendModel().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });

    it('sort car list by name asc', async() =>{
        
        carService.sortDataAscendName().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });


    it('sort car list by color desc', async() =>{
        
        carService.sortDataDescendColor().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });





    it('sort car list by engine desc', async() =>{
        
        carService.sortDataDescendEngine().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });


    it('sort car list by milleage desc', async() =>{
        
        carService.sortDataDescendMilleage().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });
    
    it('sort car list by model desc', async() =>{
        
        carService.sortDataDescendModel().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });

    it('sort car list by name desc', async() =>{
        
        carService.sortDataDescendName().subscribe(res => {
            expect(res.length).toBeGreaterThanOrEqual(1);
            
          });

          
    });

    
    
});

