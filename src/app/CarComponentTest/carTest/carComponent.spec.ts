import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CarComponent } from '../../CarComponent/car/CarComponent';
import {CarService} from "../../CarComponent/service/carService";
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import {ApiService} from "../../CarComponent/service/apiService";
import { APP_CONFIG, AppConfig } from '../../app.config';
import { Title } from '@angular/platform-browser';


describe('CarComponent', () => {
  let component: CarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComponent ],
      providers:[ Title, { provide: APP_CONFIG, useValue: AppConfig },CarService,ApiService],
      imports: [ HttpClientTestingModule]}
      ).compileComponents();
  }));

  it('should create', async(inject([CarService,ApiService], (carService: CarService) => {
    const fixture = TestBed.createComponent(CarComponent);
   component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }) 
));
});